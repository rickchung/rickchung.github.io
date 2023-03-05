import { Box, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {`Copyright © CYC ${new Date().getFullYear()}`}
  </Typography>
);

type Props = {
  desc: string
};

const AppFooter = ({ desc }: Props) => {
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
