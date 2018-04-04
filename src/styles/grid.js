

import { createStyles, minWidth } from 'react-native-media-queries';
import { 
  gridGutterWidth, 
  gridBreakpoints, 
  containerMaxWidths, 
  gridColumns, 
  infix
  } from '../variables';
import _ from "lodash";
import {styles as mqstyles} from "./mediaqueries";

function makeContainerMaxWidths(opts){
  opts.gridBreakpoints     =  opts.gridBreakpoints || gridBreakpoints;
  opts.containerMaxWidths  =  opts.containerMaxWidths || containerMaxWidths;
  opts.gridBreakpoints.map((breakpoint, idx)=>{
    if(opts.containerMaxWidths[idx]){
      mqstyles['@media (min-width:'+breakpoint+')'].container = {
        maxWidth: opts.containerMaxWidths[idx]
      };
    }
  });
};

function makeContainers(opts){
  opts.gridGutterWidth = opts.gridGutterWidth || gridGutterWidth;
  const containers = {
    container:{
      width: '100%',
      paddingRight: (opts.gridGutterWidth / 2),
      paddingLeft: (opts.gridGutterWidth / 2),
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    containerFluid:{
      width: '100%',
      paddingRight: (opts.gridGutterWidth / 2),
      paddingLeft: (opts.gridGutterWidth / 2),
      marginRight: 'auto',
      marginLeft: 'auto',
    }
  }
  makeContainerMaxWidths(opts);
  return containers;
}

function makeRows(opts){
  opts.gridGutterWidth = opts.gridGutterWidth || gridGutterWidth;
  return {
    row:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: (opts.gridGutterWidth / -2),
      marginLeft: (opts.gridGutterWidth / -2),
    }
  }
}

function makeGridColumns(opts){
  opts.gridColumns = opts.gridColumns || gridColumns;
  opts.gridGutterWidth = opts.gridGutterWidth || gridGutterWidth;
  opts.gridBreakpoints     =  opts.gridBreakpoints || gridBreakpoints;
  return [...Array(opts.gridColumns).keys()].map((count)=>{
    let ret = {};
    //columns of break Xs
    ret['col'+(count+1)] = {
      flexDirection: 'row',
      width: ((count+1)/12*100)  + '%',
      minHeight: 1, // Prevent collapsing
      paddingRight: (gridGutterWidth / 2),
      paddingLeft: (gridGutterWidth / 2),
    }
    opts.gridBreakpoints.map((breakpoint, idx)=>{
      if(infix[idx] != ''){
        ret['col'+infix[idx]+(count+1)] = {
          flexDirection: 'row',
          width: '100%',
          minHeight: 1, // Prevent collapsing
          paddingRight: (gridGutterWidth / 2),
          paddingLeft: (gridGutterWidth / 2),
        }
        mqstyles['@media (min-width:'+breakpoint+')']['col'+infix[idx]+(count+1)] = {
          width: ((count+1)/12*100)  + '%',
        };
      }
    });

    return ret;
  }); 
}

export default function makeGrid(opts){
  opts = opts || {};

  const grid = {};
  grid.w100 = {width: '100%'};
  _.assign(grid, makeContainers(opts));
  _.assign(grid, makeRows(opts));
  _.assign(grid, ...makeGridColumns(opts));


  return grid;
}
