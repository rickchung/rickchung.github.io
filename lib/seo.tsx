/**
 * Handy tools to create meta tags and other SEO stuff
 */

import Head from "next/head"

export default function MetaHead({ title, description, image = "/img/a1.jpg" }: {
  title: string,
  description?: string
  image?: string
}) {
  return (
    <Head>
      <meta charSet="utf-8" />

      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
};
