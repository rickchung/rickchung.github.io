import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const footerContent = [
  { title: "...", content: "\"But where, where was this self, this innermost part, this ultimate part?\"", size: 4 },
  { title: "...", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque iure voluptate quia deserunt commodi, aut quaerat consequuntur alias in numquam consectetur nulla nostrum. Necessitatibus culpa modi nemo dicta placeat.", size: 8 },
];

const AppFooter = () => {
  return (
    <>
      <Box pt={4} pb={4}><Divider /></Box>
      <Grid container spacing={2}>
        {footerContent.map(({ title, content, size }: {
          title?: string,
          content: string,
          size: number,
        }) => (
          <Grid item xs={size}>
            <Container>
              <Typography variant="body1" component="p">
                {content}
              </Typography>
            </Container>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AppFooter;
