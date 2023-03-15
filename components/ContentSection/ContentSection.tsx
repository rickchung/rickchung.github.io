import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";

export default function ContentSection({ title, pt = 2, children }: {
  title: ReactNode,
  pt?: number,
  children: ReactNode
}) {
  return (
    <Box pt={pt}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Box>
        {children}
      </Box>
    </Box>
  )
};