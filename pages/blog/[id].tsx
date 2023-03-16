import { Box } from "@mui/material";
import Head from "next/head";

import Layout from "../../components/Layout";
import MyMarkdown from "../../components/MyMarkdown/MyMarkdown";
import { getAllPostIds, getPostById } from "../../lib/api";

/**
 * Pre-rendered blog posts from "/sitedata/posts/*.md"
 */
export default function BlogPost({ post }: { post: { [key: string]: string } }) {
  return (
    <>
      <Head>
        <title>{`${post.title} - Yet Another CYC`}</title>
      </Head>
      <Layout>
        <Box pt={4}>
          <MyMarkdown>{post.content}</MyMarkdown>
        </Box>
      </Layout>
    </>
  );
};

/**
 * Get post IDs to pre-render
 */
export async function getStaticPaths() {
  const postIds = await getAllPostIds();
  const paths = postIds.map((i) => ({ params: { id: i } }));
  return { paths, fallback: false };
};

/**
 * Get post content to pre-render  
 */
export async function getStaticProps({ params }: { params: { [key: string]: string } }) {
  const post = getPostById(params.id, ["title", "content", "tag"]);
  return { props: { post } };
}