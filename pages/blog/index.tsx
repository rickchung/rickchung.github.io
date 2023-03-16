import { Box } from "@mui/system";
import Link from "next/link";

import ContentSection from "../../components/ContentSection/ContentSection";
import Layout from "../../components/Layout";
import { getAllPosts, PostItemType } from "../../lib/api";
import MetaHead from "../../lib/seo";

function IndexSection(title: string, posts: PostItemType[]) {
  return (posts.length == 0) ? (
    <Box pt={2}>
      TBA
    </Box>
  ) : (
    <ContentSection title={title}>
      <ul>
        {posts.map((p, i) => (
          <Link key={`${p.id}-${i}`} href={`/blog/${p.id}`}>
            {p.title}{p.createdDate && ` - ${p.createdDate}`}
          </Link>
        ))}
      </ul>
    </ContentSection>

  );
}

/**
 * Display an archive list of all website posts. 
 */
export default function Archive({ posts }: { posts: any[] }) {
  const blogPosts = posts.filter((p) => (p.tag === "blog"));
  const projectPosts = posts.filter((p) => (p.tag === "project"));

  return (
    <>
      <MetaHead
        title="Find My Blog Posts and Projects - Yet Another CYC"
        description="CYC blog posts and projects"
      />
      <Layout>
        <Box pt={2}>
          {IndexSection("Blog Posts", blogPosts)}
          {IndexSection("Project Stories", projectPosts)}
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
