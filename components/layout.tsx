/**
 * Custom layout file for all pages
 */

import { Container, CssBaseline } from "@mui/material";
import { grey, lightBlue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from "next/head";

import AppFooter from "./AppFooter/AppFooter";
import AppToolbar from "./AppToolbar/AppToolbar";

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
      <Head><meta name="description" content="Yet Another Website" /></Head>
      <header>
        <AppToolbar />
      </header>
      <main>
        <Container maxWidth="lg">
          {children}
        </Container>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </ThemeProvider>
  );
};

export default Layout;
