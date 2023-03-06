import { glob } from "glob";
import { join } from "path";

const postRepo = join(process.cwd(), "sitedata", "posts", "*.md");
export async function getAllPostFullPaths() {
    return await glob(postRepo);
};

