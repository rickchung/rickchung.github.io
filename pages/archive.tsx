import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import path from "path";

import { getAllPostFullPaths } from "../lib/api";
import Layout from "../components/Layout";

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
        {posts}
      </Box>
    </Layout>
  )
};

/**
 * Run at the build time to retrieve all post files from a folder. Ref: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
 */
export async function getStaticProps() {
  const postFullPaths = await getAllPostFullPaths();
  const postFnames = postFullPaths.map((x) => path.basename(x));
  console.log(postFnames);
  return { props: { postFnames } };
};
