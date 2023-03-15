import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import { Button, Divider, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import ContentSection from '../components/ContentSection/ContentSection';

import Layout from '../components/Layout';
import MyMarkdown from '../components/MyMarkdown/MyMarkdown';
import TimeLine from '../components/TimeLine/TimeLine';
import { getHomepageData, getNewsData, TimelineItemType } from '../lib/api';

export async function getStaticProps() {
  const news = await getNewsData();
  const homepage = await getHomepageData();
  return { props: { news, homepage } };
};

/**
 * Website home page
 */
export default function Index({ news, homepage }: {
  news: {
    achievements: TimelineItemType[],
    projects: TimelineItemType[],
  },
  homepage: {
    title: string,
    about: string,
    socialLinks: { name: string, url: string }[]
  }
}) {
  return (
    <Layout>
      <Head>
        <title>Yet Another CYC</title>
      </Head>
      <Grid container spacing={4} pt={2}>
        <Grid item xs={12} md={8}>
          <Typography variant='h5' gutterBottom pt={2}>
            {homepage.title}
          </Typography>
          <Divider />
          <Box pt={2}>
            <TimeLine title='Projects' items={news.projects} disableIcons />
          </Box>
        </Grid>

        {/* Sidebar */}
        <Grid item md={4}>
          <ContentSection title="About">
            <Box pt={2}>
              <MyMarkdown>{homepage.about}</MyMarkdown>
            </Box>
            <Box pt={2}>
              Connect: 
              {homepage.socialLinks.map((s, i) => {
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
            </Box>
          </ContentSection>

          <ContentSection title='Milestones' pt={4}>
            <TimeLine items={news.achievements} />
          </ContentSection>
        </Grid>
      </Grid>
    </Layout>
  );
};
