import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";
import { getAllPosts } from "../../lib/api";

/**
 * Display an archive list of all website posts. 
 */
export default function Archive({ posts }: { posts: any[] }) {
  const blogPosts = posts.filter((p) => (p.tag === "blog"));
  const projectPosts = posts.filter((p) => (p.tag === "project"));

  return (
    <>
      <Head>
        <title>Projects and Blog - Yet Another CYC</title>
      </Head>
      <Layout>
        <Box pt={3}>
          <Typography variant="h5">Projects</Typography>
          <ul>
            {projectPosts.map((p, i) => (
              <li key={p.id}><Link href={`/blog/${p.id}`}>{p.title}</Link></li>
            ))}
          </ul>
          <Typography variant="h5">Blog Articles</Typography>
          <ul>
            {blogPosts.map((p, i) => (
              <li key={p.id}><Link href={`/blog/${p.id}`}>{p.title}</Link></li>
            ))}
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
  const posts = await getAllPosts(["title", "tag"]);
  return { props: { posts } };
};
