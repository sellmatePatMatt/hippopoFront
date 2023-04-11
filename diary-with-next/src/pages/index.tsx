import * as React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@mui/material'
import ListByTime from '@/components/ListByTime'

export default function Diary() {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: 7 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Daily Diary List
          </Typography>
        </Toolbar>
      </AppBar>

      <ListByTime />
    </Box>
  )
}
