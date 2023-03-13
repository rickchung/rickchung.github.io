import BiotechIcon from '@mui/icons-material/Biotech';
import FeedIcon from '@mui/icons-material/Feed';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ReactElement } from "react";

import timelineData from "../../sitedata/timeline.json";
timelineData.sort((a, b) => (Date.parse(a.ts) >= Date.parse(b.ts)) ? -1 : 1);

type TimelineItemType = { [key: string]: (string | undefined) }[];
const achievements: TimelineItemType = [];
const projects: TimelineItemType = [];
const others: TimelineItemType = [];
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

const avatarIcons: { [key: string]: ReactElement } = {
  "Award": <StarIcon />,
  "Work": <WorkIcon />,
  "Education": <SchoolIcon />,
  "Featured Project": <StarIcon />,
  "Research Project": <BiotechIcon />,
  "Side Project": <HomeIcon />,
  "Course Project": <SchoolIcon />,
};

export default function Timeline() {
  const makeNewSection = (title: string, items: TimelineItemType) => (
    <>
      <Typography variant="h6">
        {title}
      </Typography>
      <List>
        {items.map((item, i) => (
          <>
            <ListItem key={i}>
              <ListItemIcon>
                {typeof item.tag === "string" ? (
                  avatarIcons[item.tag]
                ) : (
                  <FeedIcon />
                )}
              </ListItemIcon>
              <ListItemText
                primary={item.tsDetailsDesc ?? `${item.ts}`}
                secondary={
                  <>
                    <Typography component="span" variant="body2">
                      {`${item.description}`}
                    </Typography>
                    <br />
                    <Typography component="span" variant="caption">
                      {`@ ${item.location}`}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );

  return (
    <Box>
      {makeNewSection("Milestones", achievements)}
      {makeNewSection("Projects", projects)}
      {makeNewSection("Others", others)}
    </Box>
  );
}