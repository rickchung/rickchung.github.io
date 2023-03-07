import { readFileSync } from "fs";
import { glob } from "glob";
import matter from "gray-matter";
import path from "path";

const pathPostRepo = path.join(process.cwd(), "sitedata", "posts");

/**
 * Get the IDs of all local post files (only working on the server side)
 * @returns IDs of all local post files
 */
export async function getAllPostIds() {
    return (await glob(path.join(pathPostRepo, "*.md"))).map((i) => path.parse(i).name);
};

/**
 * Get post content from a file fname
 * @param postId post ID
 * @param fields metadata fields to retrieve
 * @returns post content and its metadata
 */
export function getPostById(postId: string, fields = ['title', 'content']) {
    const fullPath = path.join(pathPostRepo, `${postId}.md`);

    type Item = {
        [key: string]: string
    };

    const item: Item = {};
    const { data, content } = matter(readFileSync(fullPath, 'utf-8'));
    for (const f of fields) {
        if (f === 'content') {
            item[f] = content;
        } else if (data.hasOwnProperty(f)) {
            item[f] = data[f];
        }
    }
    return item;
};

/**
 * Get all posts from the local storage (only working on the server side)
 * @param fields metadata fields to include in the return content
 * @returns all post contents and their metadata
 */
export async function getAllPosts(fields = ['title', 'content']) {
    const ids = await getAllPostIds();
    const items = ids.map((i) => getPostById(i, fields));
    return items;
};
