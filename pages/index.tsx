import { Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import Head from 'next/head';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';

import Layout from '../components/Layout';
import indexData from "../sitedata/index.json";
import { Box } from '@mui/system';
import MyMarkdown from '../components/MyMarkdown/MyMarkdown';

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Yet Another CYC</title>
      </Head>

      {/* TODO: Featured Timeline */}

      <Grid container spacing={4} pt={2}>

        {/* New Posts */}
        <Grid item xs={12} md={8}>
          <Typography variant='h6' gutterBottom>
            Yet Another Blog
          </Typography>
          <Divider />
          <Box>
            <MyMarkdown>{indexData.description}</MyMarkdown>
          </Box>
        </Grid>

        {/* Sidebar */}
        <Grid item md={4}>
          <Typography variant='h6'>
            About
          </Typography>
          <Typography pt={2}>
            {indexData.about}
          </Typography>
          <Typography variant='h6' pt={2}>
            Connect
          </Typography>
          <Typography pt={1}>
            {indexData.socialLinks.map((s, i) => {
              const props: {} = {
                key: `${s.url}-${i}`,
                href: s.url,
                target: "_blank",
                size: "small",
              };

              if (s.name === "LinkedIn") {
                return <IconButton {...props}><LinkedInIcon /></IconButton>
              } else if (s.name === "GitHub") {
                return <IconButton {...props}><GitHubIcon /></IconButton>
              } else if (s.name === "Scholar") {
                return <IconButton {...props}><SchoolIcon /></IconButton>
              }
              return <Button variant="contained" {...props}>{s.name}</Button>
            })}
          </Typography>
        </Grid>

      </Grid>
    </Layout>
  );
};

export default Index;
