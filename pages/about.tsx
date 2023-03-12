import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";

import aboutData from "../sitedata/about.json";
import MyMarkdown from '../components/MyMarkdown/MyMarkdown';
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Yet Another CYC</title>
      </Head>
      <Layout>
        <Box pt={2}>
          <Typography variant='h6' gutterBottom>
            About
          </Typography>
          <Divider />
          <Box>
            <MyMarkdown>
              {aboutData.about}
            </MyMarkdown>
          </Box>
        </Box>
      </Layout>
    </>
  )
};
