import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import { Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';

import Layout from '../components/Layout';
import MyMarkdown from '../components/MyMarkdown/MyMarkdown';
import MyTimeline from '../components/MyTimeline/MyTimeline';
import { getTimelineData, TimelineItemType } from '../lib/api';

import indexData from "../sitedata/index.json";

export async function getStaticProps() {
  const news = await getTimelineData();
  return { props: { news } };
};

/**
 * Website home page
 */
export default function Index({ news }: {
  news: {
    achievements: TimelineItemType[],
    projects: TimelineItemType[],
  }
}) {
  return (
    <Layout>
      <Head>
        <title>Yet Another CYC</title>
      </Head>
      <Grid container spacing={4} pt={2}>
        <Grid item xs={12} md={8}>
          <Typography variant='h5' gutterBottom>
            {indexData.title}
          </Typography>
          <Divider />
          <Box pt={2}>
            <MyTimeline news={news} />
          </Box>
        </Grid>

        {/* Sidebar */}
        <Grid item md={4}>
          <Typography variant='h5' gutterBottom>
            About
          </Typography>
          <Divider />
          <Box pt={2}>
            <MyMarkdown>{indexData.about}</MyMarkdown>
          </Box>
          <Typography variant='h5' gutterBottom pt={2}>
            Connect
          </Typography>
          <Divider />
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
