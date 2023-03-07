import { readFileSync } from "fs";
import { glob } from "glob";
import matter from "gray-matter";
import { join } from "path";

const postRepo = join(process.cwd(), "sitedata", "posts", "*.md");

/**
 * Get full paths to all local post files (only working on the server side)
 * @returns full paths to all local post files
 */
export async function getAllPostFullPaths() {
    return await glob(postRepo);
};

/**
 * Get all posts from the local storage (only working on the server side)
 * @param fields data fields to include in the return content
 * @returns all post contents and their metadata
 */
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
            } else if (data.hasOwnProperty(f)) {
                item[f] = data[f];
            }
        }
        return item;
    });

    return items;
};