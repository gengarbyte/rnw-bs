import _ from "lodash";
// import * as reactWrapper from "./wrapper";
import EStyleSheet from 'react-native-extended-stylesheet';

import grid from "./styles/grid";
import flexbox from "./styles/flexbox";
import textUtilities from "./styles/text";
import mediaquries from "./styles/mediaqueries";
import typography from "./styles/types";
import { fontSizeRemBase, gridBreakpoints, infix } from "./variables";
import { Dimensions } from 'react-native';
const dim = Dimensions.get('screen');

function sortKeysBy(obj, comparator) {
  let keys = _.sortBy(_.keys(obj), (key) => {
      return comparator ? comparator(obj[key], key) : key;
  });

  return _.object(keys, _.map(keys, (key) => {
      return obj[key];
  }));
}
function getPrefixKey(str) {
  let i=0;
  for(; i<str.length; i++){
    if(str.charAt(i) == str.charAt(i).toUpperCase()){
      break;
    }
  }
  return str.slice(0,i);
}

function filterRedundantKeys(arr, preferredKeys, dumpedKeys){
  let ret = [];
  console.log('Dumped Keys >>> ')
  console.log(dumpedKeys)
  console.log('Preferred Keys >>> ')
  console.log(preferredKeys)
  arr.forEach((item, idx)=>{
    if(_.some(dumpedKeys, (key)=> _.includes(item, key)) ){
      //go thru loop to find if existing, 
      //if yes, dump; if no, keep
      let prefixKey = getPrefixKey(item);
      let keepFlag = true;
      ret.forEach((compareitem,idx)=>{
        if(getPrefixKey(compareitem) == prefixKey){
          keepFlag = false;
        }
      });
      if(keepFlag){
        ret.push(item);
      }
    }else if(_.some(preferredKeys, (key)=> _.includes(item, key)) ){
      //go thru loop to replace existing
      let prefixKey = getPrefixKey(item);
      let i = -1;
      ret.forEach((compareitem,idx)=>{
        if(getPrefixKey(compareitem) == prefixKey){
          idx = i;
        }
      });
      ret[i] = item;
    }else{
      //non breakpoint redudndant, just return
      ret.push(item);
    }
  });
  return ret;
}

const NativeBootStrap = {
  // wrap: reactWrapper.wrap,
  wrap: 'YET TO BE IMPLEMENTED',
  /* Placeholder */
  styles: {},
  merge: function(arr){
    let ret = [];
    
    const infixIdx = dim.width > gridBreakpoints[4]
                    ?4 
                    :dim.width > gridBreakpoints[3]
                      ? 3
                      : dim.width > gridBreakpoints[2]
                        ? 2
                        : dim.width > gridBreakpoints[1]
                          ? 1
                          : 0;

    console.log("Width by dim.width is >>> " + dim.width + '   ' + dim.scale);
    console.log("Merging to breakpoint >>> " + infix[infixIdx] + '  ' + gridBreakpoints[infixIdx]);

    switch(infixIdx){
      case 0:
        ret = filterRedundantKeys(arr, [], infix.slice(1));
        break;
      case 1:
        ret = filterRedundantKeys(arr, [infix[1]], infix.slice(2));
        break;
      case 2:
        ret = filterRedundantKeys(arr, [infix[2]]), [infix[1],...infix.slice(3)];
        break;
      case 3:
        ret = filterRedundantKeys(arr, [infix[3]], [infix[1],infix[2],infix[4]]);
      case 4:
        ret = filterRedundantKeys(arr, [infix[4]], infix.slice(1,4));
        break;
    }
    ret = ret.map((item)=>{
      return NativeBootStrap.styles[item];
    })
    console.log(ret);
    return ret;
  },

  build: function build(options = {}) {

    /* Assign all the styles */
    const styleSheet = {}
    mediaquries.build(options);
    _.assign(styleSheet, grid(options));
    _.assign(styleSheet, typography(options));
    _.assign(styleSheet, textUtilities(options));
    _.assign(styleSheet, mediaquries.styles);
    /* Calculate rem scales */
    _.assign(styleSheet, objectCamelCasesToDashes(styleSheet));
    
    EStyleSheet.build({
      $rem: dim.width > gridBreakpoints[3] 
            ? fontSizeRemBase * 1.6 
            : dim.width > gridBreakpoints[2] 
              ? fontSizeRemBase * 1.4
              : dim.width > gridBreakpoints[1]
                ? fontSizeRemBase * 1.2
                : fontSizeRemBase
    });
    // console.log(mediaquries.styles);
    const eStyleSheet = EStyleSheet.create(styleSheet);
    _.assign(NativeBootStrap.styles, eStyleSheet);


  }
}


function objectCamelCasesToDashes(sourceObj){
  const translated = {}
  _.forOwn(sourceObj, (val, key) => {
      translated[camelCaseToDash(key)] = val;
  })
  return translated;
}
function dashToCamelCase(str){
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}
function camelCaseToDash(str) {
  // inspired by this gist
  // https://gist.github.com/youssman/745578062609e8acac9f
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase().replace(/([a-z])([0-9])/g, '$1-$2');
}


export default NativeBootStrap;
export const { styles, wrap, build, merge } = NativeBootStrap;
