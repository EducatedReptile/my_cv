import {createTheme, responsiveFontSizes, ThemeOptions} from '@mui/material';
import commonThemeOptions from './commonThemeOptions';
import {deepmerge} from '@mui/utils';
import appColors from './appColors';

const darkStyles: ThemeOptions = {
    palette: {
        mode: 'light',
        background: {
            default: appColors.light,
        },
        text: {
            primary: appColors.dark
        }
    }
}

const lightTheme = responsiveFontSizes(createTheme(deepmerge(commonThemeOptions, darkStyles)));

export default lightTheme;
