import React, {FC, MutableRefObject} from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ThemeVariables from '../theme';

type LayoutProps = {
    rootRef: MutableRefObject<HTMLDivElement | null>,
};

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        height: 100%;
    }
    body {
        background-color: ${({ theme }) => theme.body.backgroundPrimary};
    }
`;

const Layout: FC<LayoutProps> = ({ children, rootRef }) => {
    return (
        <ThemeProvider theme={ThemeVariables}>
            <GlobalStyle />
            <div className="container-xl h-100" ref={rootRef}>
                <div className="row h-100">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Layout;
