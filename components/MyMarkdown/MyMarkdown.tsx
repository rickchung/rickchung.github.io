import { Box, Button, Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

function MyImg({ ...props }) {
  return (
    <img {...props} />
  );
}

/**
 * Render markdown content `children`
 * @returns 
 */
export default function MyMarkdown({ children }: { children: string }) {
  const options = {
    overrides: {
      a: {
        component: Link
      },
      h2: {
        component: Typography,
        props: {
          variant: "h5"
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
