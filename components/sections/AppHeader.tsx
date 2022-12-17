import React from 'react';
import {Stack} from '@mui/material';
import SourceCodeText from '../typography/SourceCodeText';
import {useDarkMode} from 'usehooks-ts';

function AppHeader() {
    const {isDarkMode, toggle} = useDarkMode(true);
    return (
        <Stack component="header" justifyContent="space-between" direction="row" sx={{ marginBottom: 25 }}>
            <SourceCodeText sx={{opacity: '0.4', cursor: 'pointer'}}
                            onClick={() => toggle()}>{isDarkMode ? 'Light' : 'Dark'} mode</SourceCodeText>
            <SourceCodeText>Say hi!</SourceCodeText>
            <SourceCodeText sx={{opacity: '0.4'}}>ukrainian</SourceCodeText>
        </Stack>
    );
}

export default AppHeader;
