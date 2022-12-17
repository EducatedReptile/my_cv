import React from 'react';
import {Box, styled} from '@mui/material';
import {SOURCE_CODE_PRO_FONT_FAMILY} from '../../styles/fonts/fontsDefinitions';

const SourceCodeText = styled(Box)(() => ({
    fontFamily: SOURCE_CODE_PRO_FONT_FAMILY,
    fontWeight: 400,
    textTransform: 'uppercase',
    fontSize: '1.25rem',
    lineHeight: 3
}));


export default SourceCodeText;
