
import { 
  gridBreakpoints, 
  infix
} from '../variables';
import {styles as mqstyles} from "./mediaqueries";
import _ from "lodash";

export default function makeTextUtilities(opts){
  opts = opts || {};
  opts.gridBreakpoints =  opts.gridBreakpoints || gridBreakpoints;
  
  let ret = {};

  ret.textCenter = {textAlign: 'center'};
  ret.textRight  = {textAlign: 'right'};
  
  opts.gridBreakpoints.map((breakpoint, idx)=>{
      if(infix[idx] != ''){
        mqstyles['@media (min-width:'+breakpoint+')']['text'+infix[idx]+'center'] = {
          textAlign: 'center'
        };
        mqstyles['@media (min-width:'+breakpoint+')']['text'+infix[idx]+'right'] = {
          textAlign: 'right'
        };
      }
  });


  return ret;
}