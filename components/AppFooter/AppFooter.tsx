import { useTheme } from "@emotion/react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const AppFooter = () => {
  const theme = useTheme();

  return (
    <>
      <Box pt={4} pb={4}><Divider /></Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Container maxWidth="lg">
            <Typography variant="body1" component="p">
              "But where, where was this self, this innermost part, this ultimate part?"
            </Typography>
          </Container>
        </Grid>
        <Grid item>
          <Container maxWidth="lg"></Container>
        </Grid>
      </Grid>
    </>
  );
};

export default AppFooter;
