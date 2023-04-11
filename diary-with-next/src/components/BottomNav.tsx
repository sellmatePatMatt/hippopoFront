import * as React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { styled } from '@mui/material/styles'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import FavoriteIcon from '@mui/icons-material/Favorite'

const BottomNav = styled(BottomNavigation)(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  bottom: 0,
}))

export default function MyBottomNavigation() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  return (
    <BottomNav value={value} onChange={handleChange} showLabels={true}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
    </BottomNav>
  )
}
