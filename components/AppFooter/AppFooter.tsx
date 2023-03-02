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
          <Container>
            <Typography variant="body1" component="p">
            "But where, where was this self, this innermost part, this ultimate part?"
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={8}>
          <Container>
            <Typography variant="body1" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque iure voluptate quia deserunt commodi, aut quaerat consequuntur alias in numquam consectetur nulla nostrum. Necessitatibus culpa modi nemo dicta placeat.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default AppFooter;
