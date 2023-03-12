import Markdown from "markdown-to-jsx";
import Link from "next/link";

export default function MyMarkdown({ children }: { children: string }) {
  const options = {
    overrides: {
      a: {
        component: Link
      }
    }
  };
  return (
    <Markdown options={options}>{children}</Markdown>
  )
};
