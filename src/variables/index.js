// using native dimensions to get scale
import { Dimensions } from 'react-native';
import * as colors from './colors';

const dim = Dimensions.get('screen');


// Variables
//
// Variables should follow the `$component-state-property-size` formula for
// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.



// Options
//
// Quickly modify global styling by enabling or disabling optional features.

export const enableCaret          = true;
export const enableRounded        = true;
export const enableShadows        = false;
export const enableGradients      = false;
export const enableTansitions     = true;
export const enableHoverMediaQuery= false; // Deprecated, no longer affects any compiled CSS
export const enableGridClasse     = true;
export const enablePrintStyles    = true;


// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

// stylelint-disable
export const spacer = '1rem';
export const spacers0 = 0;
export const spacers1 = spacer * 0.25;
export const spacers2 = spacer * 0.5;
export const spacers3 = spacer;
export const spacers4 = spacer * 1.5;
export const spacers5 = spacer * 3;

// This variable affects the `.h-*` and `.w-*` classes.
export const sizes25 = 0.25;
export const sizes50 = 0.5;
export const sizes75 = 0.75;
export const sizes100 = 1;
export const sizesAuto = 'auto';
// stylelint-enable

// Body
//
// Settings for the `<body>` element.

export const bodyBg    = colors.white;
export const bodyColor = colors.gray900;

// Links
//
// Style anchor elements.

export const linkColor           = colors.themeColorsPrimary;
export const linkDecoration      = 'none';
//export const linkHoverColor      =  darken(linkColor, 15%);
export const linkHoverDecoration =  'underline';

// Paragraphs
//
// Style p element.

// $paragraph-margin-bottom =   1rem;


// Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.
export const infix = ['', 'Sm','Md','Lg','Xl'];

export const gridBreakpointsXs = 0 / dim.scale;
export const gridBreakpointsSm = 576 / dim.scale;
export const gridBreakpointsMd = 768 / dim.scale;
export const gridBreakpointsLg = 992 / dim.scale;
export const gridBreakpointsXl = 1200 / dim.scale;
export const gridBreakpoints = [
                                  gridBreakpointsXs,
                                  gridBreakpointsSm,
                                  gridBreakpointsMd,
                                  gridBreakpointsLg,
                                  gridBreakpointsXl
                                ];

// Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

export const containerMaxWidthsSm = 540 / dim.scale;
export const containerMaxWidthsMd = 720 / dim.scale;
export const containerMaxWidthsLg = 960 / dim.scale;
export const containerMaxWidthsXl = 1140 / dim.scale;
export const containerMaxWidths = [
                                    null,
                                    containerMaxWidthsSm,
                                    containerMaxWidthsMd,
                                    containerMaxWidthsLg,
                                    containerMaxWidthsXl
                                  ];

// Grid columns
//
// Set the number of columns and specify the width of the gutters.

export const gridColumns     = 12;
export const gridGutterWidth = 30 / dim.scale;

// Components
//
// Define common padding and border radius sizes and more.

export const lineHeightLg = 1.5;
export const lineHeightSm = 1.5;

export const borderWidth = 1;
export const borderColor = colors.gray300;

export const borderRadius   = '.25rem'
export const borderRadiusLg  = '.3rem';
export const borderRadiusSm = '.2rem';

export const componentActiveColor = colors.white;
export const componentActiveBg    = colors.themeColorsPrimary;

export const caretWidth = '.3rem';



// Fonts
//
// Font, line-height, and color for body text, headings, and more.

// stylelint-disable value-keyword-case
export const fontFamilySansSerif =       'Avenir Next'; //TODO: fix font
//'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
export const fontFamilyMonospace =       'San Francisco';
//'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
export const fontFamilyBase =            fontFamilySansSerif;
// stylelint-enable value-keyword-case

export const fontSizeRemBase =           16;
export const fontSizeBase =              '1rem'; // Assumes the browser default, typically `16px`
export const fontSizeLg =                (fontSizeBase * 1.25);
export const fontSizeSm =                (fontSizeBase * .875);

export const fontWeightLight =           '300';
export const fontWeightNormal =          '400';
export const fontWeightBold =            '700';

export const fontWeightBase =            fontWeightNormal;
export const lineHeightBase =            1.5;

export const h1FontSize =                '2.5rem';      //fontSizeBase * 2.5
export const h2FontSize =                '2rem';        //fontSizeBase * 2
export const h3FontSize =                '1.75rem';     //fontSizeBase * 1.75
export const h4FontSize =                '1.5rem';      //fontSizeBase * 1.5
export const h5FontSize =                '1.25rem';     //fontSizeBase * 1.25
export const h6FontSize =                '1rem';  //fontSizeBase * 1
//export const headingsLineHeight =        1.2;
export const h1LineHeight =              '3rem';
export const h2LineHeight =              '2.4rem';
export const h3LineHeight =              '2.1rem';
export const h4LineHeight =              '1.8rem';
export const h5LineHeight =              '1.5rem';
export const h6LineHeight =              '1.2rem';
export const headingsMarginBottom =      '0.5rem'; //spaer / 2
export const headingsFontFamily =        fontFamilySansSerif;
export const headingsFontWeight =        '500';
// export const headingsColor =             colors.;

export const display1Size =               '6rem';
export const display2Size =               '5.5rem';
export const display3Size =               '4.5rem';
export const display4Size =               '3.5rem';

export const display1Weight =             '300';
export const display2Weight =             '300';
export const display3Weight =             '300';
export const display4Weight =             '300';
// export const displayLineHeight =          1.2;
export const display1LineHeight =         '7.2rem';
export const display2LineHeight =         '6.6rem';
export const display3LineHeight =         '5.4rem';
export const display4LineHeight =         '4.2rem';


export const leadFontSize =              '1.25rem';
export const leadFontWeight =            '300';

export const smallFontSize =             '0.8rem';

export const textMuted =                  colors.gray600;

export const blockquoteSmallColor =      colors.gray600;
export const blockquoteFontSize =        '1.25rem';

export const hrBorderColor =             colors.black; //TODO: rgba($black,0.1)
export const hrBorderWidth =             borderWidth;

export const markPadding =                '0.2rem';

export const dtFontWeight =              fontWeightBold;

// export const kbdBoxShadow =              inset 0 -.1rem 0 rgba($black, .25);
export const nestedKbdFontWeight =       fontWeightBold;

export const listInlinePadding =         '0.5rem';

export const markBg =                    '#fcf8e3';

export const hrMarginY =                 spacer;
