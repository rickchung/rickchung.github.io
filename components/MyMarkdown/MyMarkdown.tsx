import { Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default function MyMarkdown({ children }: { children: string }) {
  const options = {
    overrides: {
      a: {
        component: Link
      },
      h1: {
        component: Typography,
        props: {
          variant: "h4",
        }
      },
      h2: {
        component: Typography,
        props: {
          variant: "h5",
        }
      },
      h3: {
        component: Typography,
        props: {
          variant: "h6",
        }
      },
    }
  };
  return (
    <Markdown options={options}>{children}</Markdown>
  )
};
