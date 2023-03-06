import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";

type Props = {
  posts: any[]
};

/**
 * Display an archive list of all website posts. 
 */
export default function Archive({ posts }: Props) {
  return (
    <Layout>
      <Box pt={2}>
        <Typography variant="h5">All Posts</Typography>
        <ul>
          {posts.map((p, i) => (<li key={i}>{p.title}</li>))}
        </ul>
      </Box>
    </Layout>
  )
};

/**
 * Run at the build time to retrieve all post files from a folder. Ref: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
 */
export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
};
