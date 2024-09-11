import "./MainContent.css"
import { Box, Button, FormControl, InputAdornment, List, ListItem, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material"
import { FaPlus, FaSort } from "react-icons/fa";
import SearchIcon from '@mui/icons-material/Search';
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { ImPrevious2, ImNext2 } from "react-icons/im";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { areasState } from "../../states/areasState";
import { useRecoilState } from "recoil";


export const MainContent = () => {
  const [areaState, setAreaState] = useRecoilState(areasState);
  const [initialAreas,] = useState(areaState);
  const [search, setSearch] = useState("");

  //setting the max items per page to 8
  const areasLength = areaState.length < 8 ? areaState.length.toString() : '8'
  const [selectedOption, setSelectedOption] = useState(areasLength);
  const numberSelection = Number(selectedOption) < 8 ? Number(selectedOption) : 8


  const handleSearchFilter = useCallback((target: string) => {
    setSearch(target)
    //setting the initial value to the list
    if (target === '') {
      setAreaState(initialAreas)
      setSelectedOption(initialAreas.length.toString())
    } else {
      const filteredItems = [...initialAreas].filter(item =>
        item.name.toLowerCase().includes(target.toLowerCase())
      );
      if (filteredItems.length === 0) {
        setSelectedOption('')
      } else {
        setSelectedOption(filteredItems.length.toString())
      }
      setAreaState(filteredItems)
    }
  }, [setAreaState, initialAreas])

  const handleNameSort = () => {
    const sortedAreas = [...areaState].sort((a, b) => a.name.localeCompare(b.name));
    setAreaState(sortedAreas)
  }

  const handleDateSort = () => {
    // to compare dates needs to parse into a Date Obj first
    const parseDate = (dateString: string) => {
      const [day, month, year] = dateString.split('-').map(Number);
      return new Date(year, month - 1, day);
    };
    // need to .getTime prop to have a number to compared instead the Date Obj
    const sortedAreas = [...areaState].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
    setAreaState(sortedAreas)
  }

  // need to convert boolean into number to compare, 1 to true and 0 to false
  const handleStatusSort = () => {
    const sortedAreas = [...areaState].sort((a, b) => (b.status ? 1 : 0) - (a.status ? 1 : 0));
    setAreaState(sortedAreas)
  }

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
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
              value={search}
              onChange={(e) => handleSearchFilter(e.target.value)}
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
          <button onClick={handleNameSort} className="filterButton">Assunto <FaSort style={{ fontSize: '13px' }} /></button>
          <button onClick={handleDateSort} className="filterButton">Data Cadastro <FaSort style={{ fontSize: '13px' }} /></button>
          <button onClick={handleStatusSort} className="filterButton">Status <FaSort style={{ fontSize: '13px' }} /></button>
        </div>
        <List>
          {/* slice to list don't overflow */}
          {areaState.slice(0, numberSelection).map((item, index) => (
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
          <p className="footerText">Exibindo <span style={{ color: '#000000BF' }}>1-{numberSelection}</span> de {areaState.length} - Áreas</p>
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
                onChange={handleSelectChange}
              >
                {/* Selects values according the areas length */}
                {areaState.slice(0, 8).map((_, index) => (
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
