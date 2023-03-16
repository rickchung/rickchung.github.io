import { Box, Button, Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { ReactNode } from "react";

function MyImg({ ...props }) {
  return (
    <img {...props} />
  );
}

function MyH1({ children, pageLink }: { children: ReactNode, pageLink?: string }) {
  return (
    <Typography component="h1" variant="h5">
      {pageLink ? (
        <Link href={pageLink} >{children}</Link>
      ) : (
        children
      )}
    </Typography>
  )
}

/**
 * Render markdown content `children`
 * @returns 
 */
export default function MyMarkdown({ children, pageLink }: { children: string, pageLink?: string }) {
  const options = {
    overrides: {
      a: {
        component: Link
      },
      h2: {
        component: MyH1,
        props: {
          pageLink: pageLink
        }
      },
      h3: {
        component: Typography,
        props: {
          variant: "h6"
        }
      },
      img: {
        component: MyImg,
        props: {
          width: "99%"
        }
      }
    }
  };

  return (
    <Markdown options={options}>{children}</Markdown>
  )
};

/**
 * Preview the first several paragraphs of the markdown content `children`
 */
export function MyMarkdownPreview({ children, continueLink, previewOnly = 6 }: {
  children: string,
  continueLink: string,
  previewOnly?: number
}) {

  if (previewOnly > 0) {
    const split = children.split("\n");
    children = split.slice(0, previewOnly).join("\n") + "...";
  }

  return (
    <Box>
      <MyMarkdown>
        {children}
      </MyMarkdown>
      <Button
        variant='contained' sx={{ color: "white" }}
        component={Link}
        href={continueLink}
      >
        Continue Reading
      </Button>
    </Box>
  );
};
