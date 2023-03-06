import { readFileSync } from "fs";
import { glob } from "glob";
import matter from "gray-matter";
import { join } from "path";

const postRepo = join(process.cwd(), "sitedata", "posts", "*.md");

export async function getAllPostFullPaths() {
    return await glob(postRepo);
};

export async function getAllPosts(fields = ['title', 'content']) {
    const paths = await getAllPostFullPaths();

    type Item = {
        [key: string]: string
    }

    const items: Item[] = paths.map((i) => {
        const { data, content } = matter(readFileSync(i, 'utf-8'));
        const item: Item = {};
        for (const f of fields) {
            if (f === 'content') {
                item[f] = content;
            } else if (typeof data[f] !== 'undefined') {
                item[f] = data[f];
            }
        }
        return item;
    });

    return items;
};