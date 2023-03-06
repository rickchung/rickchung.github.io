import Markdown from "markdown-to-jsx";
import { glob } from "glob";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import Layout from "../components/Layout";
import path, { join } from "path";

const postRepo = join(process.cwd(), "sitedata", "posts", "*.md");

async function getAllPostFnames() {
  return await glob(postRepo);
};


type Props = {
  posts: any[]
};

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

export async function getStaticProps() {
  const postFullPaths = await getAllPostFnames();
  const postFnames = postFullPaths.map((x)=> path.basename(x));
  console.log(postFnames);
  return { props: { postFnames } };
};