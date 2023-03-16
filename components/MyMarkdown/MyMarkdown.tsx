import { Typography } from "@mui/material";
import Markdown from "markdown-to-jsx";
import Link from "next/link";

function MyImg({ ...props }) {
  return (
    <img {...props} />
  );
}

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
