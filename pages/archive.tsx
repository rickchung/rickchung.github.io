import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";

import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";

/**
 * Display an archive list of all website posts. 
 */
export default function Archive({ posts }: { posts: any[] }) {
  return (
    <>
      <Head>
        <title>Post Archive - Yet Another CYC</title>
      </Head>
      <Layout>
        <Box pt={2}>
          <Typography variant="h5">All Posts</Typography>
          <ul>
            {posts.map((p, i) => (<li key={i}>{p.title}</li>))}
          </ul>
        </Box>
      </Layout>
    </>
  )
};

/**
 * Run at the build time to retrieve all post files from a folder. Ref: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
 */
export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
};
