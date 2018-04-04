import * as vars from '../variables';
import _ from "lodash";

export default function makeTypography(opts){
  opts = opts || {};

  const types = {};

  //
  // Headings
  //
  [1,2,3,4,5,6].forEach((val)=>{
    types['h'+val] = {
      // color:        vars.headingsColor,
      width:        '100%',
      marginBottom: vars.headingsMarginBottom,
      fontFamily:   vars.headingsFontFamily,
      fontWeight:   vars.headingsFontWeight,
      lineHeight:   vars['h'+val+'LineHeight'],
      fontSize:     vars['h'+val+'FontSize'],
    };
  });
  
  types.lead = {
    fontSize:       vars.leadFontSize,
    fontWeight:     vars.leadFontWeight,
  };

  // Type display classes
  [1,2,3,4].forEach((val)=>{
    types['display'+val] = {
      width:        '100%',
      fontSize:     vars['display'+val+'Size'],
      fontWeight:   vars['display'+val+'Weight'],
      lineHeight:   vars['display'+val+'LineHeight'],
    };
  });

  //
  // Horizontal rules
  //
  types.hr = {
    marginTop:      vars.hrMarginY,
    marginBottom:   vars.hrMarginY,
    borderTopWidth: vars.hrBorderWidth,
    borderTopColor: vars.hrBorderColor,
    borderStyle:    'solid'
  };

  //
  // Emphasis
  //
  types.small = {
    fontSize:   vars.smallFontSize,
    fontWeight: vars.fontWeightMormal,
  };

  types.mark = {
    padding:         vars.markPadding,
    backgroundColor: vars.markBg,
  };


  //
  // Lists
  //

  // .list-unstyled {
  //   @include list-unstyled;
  // }

  // // Inline turns list items into inline-block
  // .list-inline {
  //   @include list-unstyled;
  // }
  // .list-inline-item {
  //   display: inline-block;

  //   &:not(:last-child) {
  //     margin-right: $list-inline-padding;
  //   }
  // }

  //
  // Misc
  //

  // Builds on `abbr`
  types.initialism = {
    fontSize:      '0.9rem',
    // textTransform: 'uppercase',
  };

  // Blockquotes
  types.blockquote = {
    marginBottom: vars.spacer,
    fontSize:     vars.blockquoteFontSize,
  };

  types.blockquoteFooter = {
    // display: block
    fontSize: '0.8rem', // back to default font-size
    color:    vars.blockquoteSmallColor,

    // &::before {
    //   content: "\2014 \00A0"; // em dash, nbsp
    // }
  };
  return types;
}