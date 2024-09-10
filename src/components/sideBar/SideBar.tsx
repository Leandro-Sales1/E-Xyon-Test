
import { InputAdornment, FormControl, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./SideBar.css"
import { Button } from '@mui/material';
import { FaSortAlphaUp } from "react-icons/fa";
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { sideBarItems } from '../../constants/sideBarItems';
import { useState } from 'react';



export const SideBar = () => {
  const [isSelected, setIsSelected] = useState('')

  const items = sideBarItems
  const styleSelected = {
    backgroundColor: '#1C52970D',
    borderRight: ' var(--border)',
    color: 'var(--primary-color)',
  }
  const handleOnClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setIsSelected(event.currentTarget.id)
  }

  return (
    <aside className="sideBar">
      <section className="topSide">
        <FormControl sx={{ width: '12rem', margin: '2rem 0 0 2rem' }}>
          <OutlinedInput
            sx={{ height: '1.75rem', borderRadius: '0.5rem' }}
            placeholder="Busque"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          sx={{
            minWidth: '27px',
            padding: '0',
            width: '27px',
            height: '27px',
            margin: '2rem 0.75rem 0 0',
            borderRadius: '0.5rem',
            backgroundColor: '#FFFFFF',
            color: 'var(--primary-color)',
            border: ' var(--border)',
            '& .MuiButton-startIcon': {
              margin: '0'
            }
          }}
          variant="contained"
          disableRipple
          disableElevation
          startIcon={<FaSortAlphaUp style={{ fontSize: '12px', margin: '0' }} />}
        />
      </section>
      <section>
        <List
          sx={{
            paddingLeft: '1.2rem',
            marginTop: '1.250rem',
          }}>
          {/* Dinamic rendering the items by the constant */}
          {items.map((item, index) => (
            <div key={index}>
              <ListItem
                id={item}
                onClick={e => handleOnClick(e)}
                sx={{
                  paddingLeft: '3.125rem',
                  cursor: 'pointer',
                  // Conditionally aplly the selected style              
                  ...(isSelected === item && styleSelected),
                }}
              >
                <ListItemText id={item} primary={item} />
              </ListItem>
              {index < items.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </section>
    </aside >
  )
}
