import Markdown from "markdown-to-jsx";

import Layout from "../components/Layout";
import post1 from "../sitedata/posts/project_test1.md";

const Archive = () => {
  return (
    <Layout>
      <Markdown>
        {post1}
      </Markdown>
    </Layout>
  )
};

export default Archive;