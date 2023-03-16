import { Box } from "@mui/system";
import Head from "next/head";
import Link from "next/link";

import ContentSection from "../../components/ContentSection/ContentSection";
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
        <Box pt={2}>
          <ContentSection title="Blog Posts">
            <ul>
              {blogPosts.map((p, i) => (
                <li key={p.id}>
                  <Link href={`/blog/${p.id}`}>
                    {p.createdDate && `${p.createdDate}: `}{p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </ContentSection>
          <ContentSection title="Projects">
            {
              (projectPosts.length == 0) ? (
                <Box pt={2}>
                  TBA
                </Box>
              ) : (
                <ul>
                  {projectPosts.map((p, i) => (
                    <li key={p.id}>
                      <Link href={`/blog/${p.id}`}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              )
            }
          </ContentSection>
        </Box>
      </Layout>
    </>
  )
};

/**
 * Run at the build time to retrieve all post files from a folder. Ref: https://github.com/vercel/next.js/tree/canary/examples/blog-starter
 */
export async function getStaticProps() {
  const posts = await getAllPosts(["title", "tag", "createdDate"]);
  return { props: { posts } };
};
