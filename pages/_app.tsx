import '../styles/globals.css'
import * as React from 'react';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';
import darkTheme from '../styles/themes/darkTheme';
import {useDarkMode} from 'usehooks-ts';
import lightTheme from '../styles/themes/lightTheme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const {isDarkMode} = useDarkMode(true);
    const theme = isDarkMode ? darkTheme : lightTheme;
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}
