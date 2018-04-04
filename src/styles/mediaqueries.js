import {gridBreakpoints} from '../variables';
import _ from "lodash";

const mediaquries = {
  styles: {},
  build: function(opts={}){
      breakpoints  =  opts.gridBreakpoints || gridBreakpoints;
      breakpoints.map((breakpoint, idx)=>{
        mediaquries.styles['@media (min-width:'+breakpoint+')'] = {};
      }); 
  }
};
export default mediaquries;
export const { styles, build } = mediaquries;