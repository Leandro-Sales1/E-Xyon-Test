import "./NewArea.css"
import { useState } from 'react';
import { TextField, FormControlLabel, Autocomplete, Chip, Button } from '@mui/material';
import { FaCircleInfo } from "react-icons/fa6";
import { IOSSwitch } from "../../components/iosSwitch";
import { options } from "../../constants/options";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useRecoilState } from "recoil";
import { AreaProps, areasState } from "../../states/areasState";

export const NewArea = () => {
  const [nameInput, setNameInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [toggle, setToggle] = useState(false);
  const [multiUnitiesValues, setMultiUnitiesValues] = useState<string[] | never[]>([]);
  const [multiServicesValues, setMultiServicesValues] = useState<string[] | never[]>([]);
  const navigate = useNavigate();
  const [areaState, setAreaState] = useRecoilState(areasState);

  const isFormComplete =
    nameInput !== '' &&
    multiUnitiesValues.length > 0 &&
    multiServicesValues.length > 0;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setNameInput(event.target.value);
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescriptionInput(event.target.value);
  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => setToggle(event.target.checked);
  const handleMultiUnitiesValuesChange = (_: React.SyntheticEvent, newValue: string[]) => setMultiUnitiesValues(newValue);
  const handleMultiServicesValuesChange = (_: React.SyntheticEvent, newValue: string[]) => setMultiServicesValues(newValue);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // building a new area object
    const date = format(new Date(), "dd-MM-yyyy");
    const newArea: AreaProps = {
      name: nameInput,
      description: descriptionInput,
      status: toggle,
      unities: multiUnitiesValues,
      services: multiServicesValues,
      date
    }

    // adding the new Area
    setAreaState([...areaState, newArea])

    alert('Sua Área foi adicionada com sucesso!!\nVocê será redirecionado à página inicial automaticamente.')

    // redirect to main page
    navigate('/')

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
              required
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
            sx={{ margin: '0 0.5rem 0 2rem', justifyContent: 'space-between' }}
          />
          {toggle === true && <span className="labelToggle ative">Ativo</span>}
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
                placeholder="Selecione as unidades"
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
                placeholder="Selecione os serviços"
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
              fontWeight: '600',
              '&.Mui-disabled': {
                backgroundColor: '#1C529733',
                color: '#ffffff',
              },
            }}
            variant="contained"
            disableRipple
            disableElevation
            type="submit"
            disabled={!isFormComplete}
          >Salvar</Button>
        </div>
      </form>
    </>
  )
}
