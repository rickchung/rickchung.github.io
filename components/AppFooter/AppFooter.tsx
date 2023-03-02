import { Box, Divider, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { Container } from "@mui/system";

const desc = "\"But where, where was this self, this innermost part, this ultimate part?\"";

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {`Copyright © CYC ${new Date().getFullYear()}`}
  </Typography>
);

const AppFooter = () => {
  return (
    <>
      <Box pt={6} pb={4}><Divider /></Box>
      <Container>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {desc}
        </Typography>
        <Copyright />
      </Container>
    </>
  );
};

export default AppFooter;
