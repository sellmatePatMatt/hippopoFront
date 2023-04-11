import { Container, List, ListItem, ListItemText, Typography  } from '@mui/material'
import { styled } from '@mui/system';

// Custom styled component for the diary title
const DiaryTitle = styled(Typography)({
  fontWeight: 'bold',
});

// Custom styled component for the diary content with ellipsis
const DiaryContent = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const diarySummaries = [
    {
      id: 1,
      title: 'My First Diary Entry',
      date: '2023-04-01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Another Day, Another Diary Entry',
      date: '2023-04-02',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Add more diary summaries here
  ];

export default function ListByTime() {
  return (
    <>
      <Container maxWidth="sm">
      <List>
      {diarySummaries.map((diarySummary) => (
        <ListItem key={diarySummary.id}>
          <ListItemText
            primary={<DiaryTitle>{diarySummary.title}</DiaryTitle>}
            secondary={
              <>
                <Typography variant="subtitle2" component="span">{diarySummary.date}</Typography>
                <br />
                <DiaryContent variant="body2">{diarySummary.content}</DiaryContent>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
      </Container>
    </>
  )
}
