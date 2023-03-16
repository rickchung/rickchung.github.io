import { readFileSync } from "fs";
import { glob } from "glob";
import matter from "gray-matter";
import path from "path";

import homepageData from "../sitedata/homepage.json";
import timelineData from "../sitedata/timeline.json";
const pathPostRepo = path.join(process.cwd(), "sitedata", "posts");

export type TimelineItemType = {
    [key: string]: (string | undefined)
};
export type NewsDataType = {
    achievements: TimelineItemType[],
    projects: TimelineItemType[],
};
export type HomepageDataType = {
    featuredPosts: PostItemType[],
    about: string,
    socialLinks: { name: string, url: string }[]
};

export type PostItemType = {
    id: string,
    [key: string]: string
};

/**
 * Base GET helper
 * @param pathRepo path to a repository (local folder)
 * @param globPtn glob pattern to search
 * @returns data IDs (filenames without the extension)
 */
async function getDataIds(pathRepo: string, globPtn = '*.md') {
    return (await glob(path.join(pathRepo, globPtn))).map((i) => path.parse(i).name);
}

/**
 * Base GET helper to get markdown objects
 * @param pathRepo path to a repository (local folder)
 * @param dataId target data ID
 * @param fields data fields to retrieve
 * @returns data item
 */
function getMdDataById(pathRepo: string, dataId: string, fields: string[]) {
    const fullPath = path.join(pathRepo, `${dataId}.md`);

    const item: PostItemType = { id: dataId };
    const { data, content } = matter(readFileSync(fullPath, 'utf-8'));
    for (const f of fields) {
        if (f === 'content') {
            item[f] = content;
        } else if (data.hasOwnProperty(f)) {
            if (f === "createdDate" || f === "modifiedDate") {
                item[f] = new Date(Date.parse(data[f])).toLocaleDateString();
            } else {
                item[f] = data[f];
            }
        }
    }

    return item;
}

/**
 * Get the IDs of all local post files (only working on the server side)
 * @returns IDs of all local post files
 */
export async function getAllPostIds() {
    return await getDataIds(pathPostRepo);
}

/**
 * Get post content from a file fname
 * @param postId post ID
 * @param fields metadata fields to retrieve
 * @returns post content and its metadata
 */
export function getPostById(postId: string, fields = ['title', 'content']) {
    return getMdDataById(pathPostRepo, postId, fields);
}

/**
 * Get all posts from the local storage (only working on the server side)
 * @param fields metadata fields to include in the return content
 * @returns all post contents and their metadata
 */
export async function getAllPosts(fields = ['title', 'content']) {
    const ids = await getAllPostIds();
    const items = ids.map((i) => getPostById(i, fields));
    return items;
}

/**
 * Get news data to disply on the home page
 * @returns news data
 */
export async function getNewsData(): Promise<NewsDataType> {
    timelineData.sort((a, b) => (Date.parse(a.ts) >= Date.parse(b.ts)) ? -1 : 1);

    const achievements: TimelineItemType[] = [];
    const projects: TimelineItemType[] = [];
    const others: TimelineItemType[] = [];

    for (const i of timelineData) {
        switch (i.group) {
            case "Achievement":
                achievements.push(i);
                break;
            case "Project":
                projects.push(i);
                break;
            case "Other":
                others.push(i);
                break;
        }
    }

    return { achievements, projects };
};

/**
 * Get content for the homepage
 * @returns content for the homepage
 */
export async function getHomepageData(): Promise<HomepageDataType> {
    const featuredPosts = homepageData.featuredPosts.map(
        (id) => getPostById(id, ['title', 'content', 'createdDate'])
    );
    return { ...homepageData, featuredPosts };
}
