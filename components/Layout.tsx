/**
 * Custom layout file for all pages that defines the following:
 * 
 * - A site-wise theme provider and a custom theme
 * - CSS baseline: Set the baseline CSS style such as no margin
 * - Header: AppToolbar.tsx
 * - Main: A container for page content
 * - Footer: AppFooter.tsx
 * 
 */

import { Container, CssBaseline } from "@mui/material";
import { grey, lightBlue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from "next/head";

import AppFooter from "./AppFooter/AppFooter";
import AppToolbar from "./AppToolbar/AppToolbar";

import appFooterData from "../sitedata/appFooter.json";
import appToolbarData from "../sitedata/appToolbar.json";

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[800],
    },
    secondary: {
      main: grey[400],
    }
  }
});

type Props = {
  children: React.ReactNode
};

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <AppToolbar pages={appToolbarData.pages} />
      </header>
      <main>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>
      <footer>
        <AppFooter desc={appFooterData.desc} />
      </footer>
    </ThemeProvider>
  );
};

export default Layout;
