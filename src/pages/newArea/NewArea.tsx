import "./NewArea.css"
import { useState } from 'react';
import { TextField, FormControlLabel, Autocomplete, Chip, Button } from '@mui/material';
import { FaCircleInfo } from "react-icons/fa6";
import { IOSSwitch } from "../../components/iosSwitch";
import { options } from "../../constants/options";
import { Link } from "react-router-dom";

export const NewArea = () => {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [toggle, setToggle] = useState(false);
  const [multiUnitiesValues, setMultiUnitiesValues] = useState<string[] | never[]>([]);
  const [multiServicesValues, setMultiServicesValues] = useState<string[] | never[]>([]);


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setNameInput(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescriptionInput(event.target.value);
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => setToggle(event.target.checked);
  const handleMultiUnitiesValuesChange = (_: React.SyntheticEvent, newValue: string[]) => setMultiUnitiesValues(newValue);
  const handleMultiServicesValuesChange = (_: React.SyntheticEvent, newValue: string[]) => setMultiServicesValues(newValue);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(nameInput, descriptionInput, toggle, multiUnitiesValues, multiServicesValues)

    // Cleaning the states of form
    setNameInput('')
    setDescriptionInput('')
    setToggle(false)
    setMultiUnitiesValues([])
    setMultiServicesValues([])



  }

  return (
    <>
      <header>
        <h1 className="title">Nova área</h1>
      </header>
      <form onSubmit={e => handleSubmitForm(e)} >
        <div className="divFormFlex">
          <div className="nameFormDiv">
            <label className="label">Nome*</label>
            <TextField
              sx={{
                width: '50rem',
                '& .MuiOutlinedInput-root': {
                  height: '2rem',
                }
              }}
              value={nameInput}
              onChange={handleNameChange}
              placeholder="Digite o nome da área"
              variant="outlined"
            />
          </div>
          <FormControlLabel
            control={<IOSSwitch checked={toggle} onChange={handleToggleChange} />}
            label={
              <span className="labelToggle">
                Status
                <FaCircleInfo style={{ color: '#71717199', fontSize: '12px' }} />
              </span>}
            labelPlacement="top"
            sx={{ marginLeft: '2rem', justifyContent: 'space-between' }}
          />
        </div>
        <div className="formDiv">
          <label className="label">Descrição</label>
          <TextField
            sx={{
              width: '57.75rem',
              '& .MuiOutlinedInput-root': {
                height: '4.5rem',
              }
            }}
            value={descriptionInput}
            onChange={handleDescriptionChange}
            placeholder="Adicione uma descrição para a área"
            variant="outlined"
          />
        </div>
        <div className="formDiv">
          <label className="label">Unidades*</label>
          <Autocomplete
            multiple
            options={options}
            value={multiUnitiesValues}
            onChange={handleMultiUnitiesValuesChange}
            sx={{
              width: '57.75rem',
              '& .MuiOutlinedInput-root': {
                minHeight: '2rem',
              },
              '& .MuiAutocomplete-input': {
                padding: '0.5rem',
              },
              '& .MuiChip-root': {
                height: '1.5rem',
              }
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index });
                return <Chip key={key} label={option} {...tagProps} />
              })}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  '& .MuiInputBase-input': {
                    height: 'auto',
                  }
                }}
                variant="outlined"
              />
            )}
          />
        </div>
        <div className="formDiv">
          <label className="label">Serviços*</label>
          <Autocomplete
            multiple
            options={options}
            value={multiServicesValues}
            onChange={handleMultiServicesValuesChange}
            sx={{
              width: '57.75rem',
              '& .MuiOutlinedInput-root': {
                minHeight: '2rem',
              },
              '& .MuiAutocomplete-input': {
                padding: '0.5rem',
              },
              '& .MuiChip-root': {
                height: '1.5rem',
              }
            }}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index });
                return <Chip key={key} label={option} {...tagProps} />
              })}
            renderInput={(params) => (
              <TextField
                {...params}
                sx={{
                  '& .MuiInputBase-input': {
                    height: 'auto',
                  }
                }}
                variant="outlined"
              />
            )}
          />
        </div>
        <div className="buttonsDiv">
          <Link to="/">
            <Button
              sx={{
                minWidth: '5.75rem',
                padding: '0',
                width: '5.75rem',
                height: '2rem',
                marginRight: '2rem',
                borderRadius: '0.25rem',
                backgroundColor: '#FFFFFF',
                color: '#00000099',
                border: ' var(--border)',
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: '600'
              }}
              variant="contained"
              disableRipple
              disableElevation
            >Cancelar</Button>
          </Link>
          <Button
            sx={{
              minWidth: '5.75rem',
              padding: '0',
              width: '5.75rem',
              height: '2rem',
              marginRight: '2rem',
              borderRadius: '0.25rem',
              backgroundColor: 'var(--primary-color)',
              color: '#FFFFFF',
              border: ' var(--border)',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: '600'
            }}
            variant="contained"
            disableRipple
            disableElevation
            type="submit"
          >Salvar</Button>
        </div>
      </form>
    </>

  )
}
