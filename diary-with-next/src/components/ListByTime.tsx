import {
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
} from '@mui/material'
import { styled } from '@mui/system'

// Custom styled component for the diary title
const DiaryTitle = styled(Typography)({
  fontWeight: 'bold',
})

// Custom styled component for the diary content with ellipsis
const DiaryContent = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const diarySummaries = [
  {
    id: 1,
    title: 'My First Diary Entry',
    date: '2023-04-01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Another Day, Another Diary Entry',
    date: '2023-04-02',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  // Add more diary summaries here
]

enum Months {
  '1월' = 1,
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
}

export default function ListByTime() {
  return (
    <>
      <Container maxWidth="sm">
        <List>
          {diarySummaries.map((diarySummary) => (
            <ListItem key={diarySummary.id}>
              <ListItemAvatar sx={{}}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  sx={{ mr: 1 }}
                >
                  <Typography component="div">
                    {Months[+diarySummary.date.substring(5, 7)]}
                  </Typography>
                  <Avatar>{diarySummary.date.slice(-2)}</Avatar>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary={<DiaryTitle>{diarySummary.title}</DiaryTitle>}
                secondaryTypographyProps={{ component: 'span' }}
                secondary={
                  <DiaryContent variant="body2">
                    {diarySummary.content}
                  </DiaryContent>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}
