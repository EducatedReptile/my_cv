import {ThemeOptions} from '@mui/material';
import appColors from './appColors';
import {NUNITO_FONT_FAMILY} from '../fonts/fontsDefinitions';

const commonThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: appColors.red,
        }
    },
    typography: {
        fontFamily: NUNITO_FONT_FAMILY,
    },
};

export default commonThemeOptions;
