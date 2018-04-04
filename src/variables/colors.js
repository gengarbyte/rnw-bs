
//
// Color system
//

// stylelint-disable
export const white   = '#fff';
export const gray100 = grays100 = '#f8f9fa';
export const gray200 = grays200 = '#e9ecef';
export const gray300 = grays300 = '#dee2e6';
export const gray400 = grays400 = '#ced4da';
export const gray500 = grays500 = '#adb5bd';
export const gray600 = grays600 = '#6c757d';
export const gray700 = grays700 = '#495057';
export const gray800 = grays800 = '#343a40';
export const gray900 = grays900 = '#212529';
export const black   =  '#000';

export const blue    =  colorsBlue   = '#007bff';
export const indigo  =  colorsIndigo = '#6610f2';
export const purple  =  colorsPurple = '#6f42c1';
export const pink    =  colorsPink   = '#e83e8c';
export const red     =  colorsRed    = '#dc3545';
export const orange  =  colorsOrange = '#fd7e14';
export const yellow  =  colorsYellow = '#ffc107';
export const green   =  colorsGreen  = '#28a745';
export const teal    =  colorsTeal   = '#20c997';
export const cyan    =  colorsCyan   = '#17a2b8';

export const primary   = themeColorsPrimary   = blue
export const secondary = themeColorsSecondary = gray600;
export const success   = themeColorsSuccess   = green;
export const info      = themeColorsInfo      = cyan;
export const warning   = themeColorsWarning   = yellow;
export const danger    = themeColorsDanger    = red;
export const light     = themeColorsLight     = gray100;
export const dark      = themeCOlorsDark      = gray800;

// Set a specific jump point for requesting color jumps
export const themeColorInterval =  '8%';

// The yiq lightness value that determines when the lightness of color changes from "dark" to "light". Acceptable values are between 0 and 255.
export const yiqContrastedThreshold = 150;

// Customize the light and dark text colors for use in our YIQ color contrast function.
export const yiqTextDark  = gray900;
export const yiqTextLight = white;