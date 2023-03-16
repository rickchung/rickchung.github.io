import { Box } from "@mui/material";
import Head from "next/head";

import ContentSection from "../components/ContentSection/ContentSection";
import Layout from "../components/Layout";
import MyMarkdown from '../components/MyMarkdown/MyMarkdown';
import MetaHead from "../lib/seo";

import aboutData from "../sitedata/about.json";

export default function About() {
  return (
    <>
      <MetaHead
        title={aboutData.title}
        description={aboutData.about}
      />
      <Layout>
        <Box pt={2}>
          <ContentSection title="About">
            <MyMarkdown>
              {aboutData.about}
            </MyMarkdown>
          </ContentSection>
        </Box>
      </Layout>
    </>
  )
};
