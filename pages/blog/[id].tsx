import { getAllPostIds, getPostById } from "../../lib/api";

export default function BlogPost({ post }: { post: { [key: string]: string } }) {
    return (
        <div>
            <ul>
                {post.title}
            </ul>
        </div>
    );
};

/**
 * Get post IDs to pre-render
 */
export async function getStaticPaths() {
    const postIds = await getAllPostIds();
    const paths = postIds.map((i) => ({ params: { id: i } }));
    return { paths, fallback: false };
};

/**
 * Get post content to pre-render  
 */
export async function getStaticProps({ params }: { params: { [key: string]: string } }) {
    const post = getPostById(params.id);
    return { props: { post } };
}