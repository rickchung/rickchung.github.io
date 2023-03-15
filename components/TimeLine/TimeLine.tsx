import BiotechIcon from '@mui/icons-material/Biotech';
import FeedIcon from '@mui/icons-material/Feed';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WorkIcon from '@mui/icons-material/Work';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ReactElement } from "react";

import { TimelineItemType } from '../../lib/api';

/**
 * Timeline section (list)
 */
export default function TimeLine({ title = "", items, disableIcons = false }: {
  title?: string,
  items: TimelineItemType[],
  disableIcons?: boolean
}) {
  const icons: { [key: string]: ReactElement } = {
    "Award": <StarIcon />,
    "Work": <WorkIcon />,
    "Education": <SchoolIcon />,
    "Featured Project": <StarIcon />,
    "Research Project": <BiotechIcon />,
    "Side Project": <HomeIcon />,
    "Course Project": <SchoolIcon />,
  };

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <List>
        {items.map((item, i) => (
          <ListItem key={i} disableGutters={disableIcons}>
            {!disableIcons &&
              <ListItemIcon>
                {typeof item.tag === "string" ? (
                  icons[item.tag]
                ) : (
                  <FeedIcon />
                )}
              </ListItemIcon>
            }
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
        ))}
      </List>
    </Box>
  );
};
