import { Box, Button, FormControl, InputAdornment, List, ListItem, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material"
import { FaPlus, FaSort } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { ImPrevious2, ImNext2 } from "react-icons/im";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./MainContent.css"
import { areas } from "../../constants/areas";
import { useState } from "react";
import { Link } from "react-router-dom";


export const MainContent = () => {
  const [selectedOption, setSelectedOption] = useState(areas.length.toString());

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="mainContentSection">
        <h2 className="areaTitle">Área judicial</h2>
        <div className="seachBar">
          <FormControl sx={{ width: '17.25rem', marginLeft: '1rem' }}>
            <OutlinedInput
              sx={{ backgroundColor: '#FFFFFF', height: '1.75rem', borderRadius: '0.5rem' }}
              placeholder="Pesquise pelo nome"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <div className="buttonNewDiv">
            <Link to="nova-area/">
              <Button
                sx={{
                  minWidth: '5.4rem',
                  padding: '0',
                  width: '5.4rem',
                  height: '2rem',
                  marginRight: '2rem',
                  borderRadius: '1rem',
                  backgroundColor: 'var(--primary-color)',
                  border: ' var(--border)',
                  textTransform: 'none',
                  fontSize: '13px',
                  fontWeight: '400'
                }}
                variant="contained"
                disableRipple
                disableElevation
                startIcon={< FaPlus style={{ fontSize: '12px', marginRight: '0.3rem', color: '#FFFFFF' }} />}
              >Nova</Button>
            </Link>
          </div>
        </div>
        <div className="seachBar filterBar">
          <button className="filterButton">Assunto <FaSort style={{ fontSize: '13px' }} /></button>
          <button className="filterButton">Data Cadastro <FaSort style={{ fontSize: '13px' }} /></button>
          <button className="filterButton">Status <FaSort style={{ fontSize: '13px' }} /></button>
        </div>
        <List>
          {areas.map((item, index) => (
            <ListItem key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                height: '2.75rem',
                backgroundColor: '#FFFFFF',
                border: 'var(--border)',
                margin: '0 auto 0.25rem auto'
              }}>
              {/* Column 1 - name */}
              <Box sx={{ flexBasis: '37%' }}>
                <Typography variant="body1">{item.name}</Typography> {/* Título ou Nome */}
              </Box>

              {/* Column 2 - date */}
              <Box sx={{ flexBasis: '31%' }}>
                <Typography variant="body2">
                  {item.date.replace(/-/g, '/')}
                </Typography>
              </Box>

              {/* Column 3 - status - with conditional rendering */}
              <Box sx={{ flexBasis: '20%' }}>
                <Typography variant="body2">{item.status === true ?
                  <span className="statusSpan">
                    <GoDotFill style={{ color: '#13BB6A', fontSize: '14px' }} /> Ativo</span>
                  :
                  <span className="statusSpan inative">
                    <GoDotFill style={{ color: '#bb2313', fontSize: '14px' }} /> Inativo</span>}</Typography>
              </Box>

              {/* Column 4 - options icon */}
              <Box sx={{ flexBasis: '20%', textAlign: 'right' }}>
                <Typography variant="body2" >
                  <HiDotsVertical
                    style={{
                      fontSize: '20px', fontWeight: '900', color: 'var(--primary-color)',
                      cursor: 'pointer', paddingTop: '2px'
                    }} />
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
        <footer className="footer">
          <p className="footerText">Exibindo <span style={{ color: '#000000BF' }}>1-{areas.length}</span> de 6 - Áreas</p>
          <div className="footerPaginationDiv">
            <button className="footerButton"><ImPrevious2 /></button>
            <button className="footerButton"><GrFormPrevious /></button>
            <span className="footerSpan">1</span>
            <button className="footerButton"><GrFormNext /></button>
            <button className="footerButton"><ImNext2 /></button>
          </div>
          <div className="footerPerPageDiv">
            <p className="footerTextPage">Tipos por página</p>
            <FormControl >
              <Select
                sx={{ width: '3.625rem', height: '1.75rem' }}
                id="option-select"
                value={selectedOption}
                onChange={handleChange}
              >
                {/* Selects values according the areas length */}
                {areas.map((_, index) => (
                  <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </footer>
      </section >
    </>
  )
}
