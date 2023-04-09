import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Container,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BottomNav = styled(BottomNavigation)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  width: "100%",
}));

const diaryEntries = [
  {
    id: 1,
    date: "April 8th, 2023",
    content: "Today was a great day!",
  },
  {
    id: 2,
    date: "April 7th, 2023",
    content: "I had a lot of fun with my friends.",
  },
  {
    id: 3,
    date: "April 6th, 2023",
    content: "I was feeling pretty down today.",
  },
];

export default function Diary() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 7 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center", marginBottom: 2 }}>
            Daily Diary List
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <List>
          {diaryEntries.map((entry) => (
            <ListItem key={entry.id}>
              <ListItemText
                primary={entry.content}
                secondary={entry.date}
              />
            </ListItem>
          ))}
        </List>
      </Container>

      <BottomNav
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </BottomNav>
    </Box>
  );
}
