import { Flood } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";

type Props = {
  pages: {
    name: string,
    url: string
  }[]
};

const AppToolbar = ({ pages }: Props) => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Flood sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            CYC
          </Typography>
          <Box sx={{ display: { md: 'flex' } }}>
            {pages.map(({ name, url }) => (
              <Button
                key={`${name}-${url}`}
                component={Link}
                href={url}
                variant="outlined"
                sx={{ color: "white" }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppToolbar;
