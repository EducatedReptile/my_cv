import {createTheme, responsiveFontSizes} from '@mui/material';
import commonThemeOptions from './commonThemeOptions';
import {deepmerge} from '@mui/utils';
import appColors from './appColors';

const darkTheme = responsiveFontSizes(createTheme(deepmerge(commonThemeOptions, {
    palette: {
        mode: 'dark',
        background: {
            default: appColors.dark,
        },
        text: {
            primary: appColors.light
        }
    }
})));

export default darkTheme;
