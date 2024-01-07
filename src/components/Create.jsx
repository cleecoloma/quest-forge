'use strict';

import React, { useState, useContext } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import { UserContext } from '../context/User';
import SelectionCard from './SelectionCard';
import '../styles/Create.css';

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    age: 50,
    sex: 'male',
    race: 'human',
    class: 'fighter',
  });
  const { handleHero } = useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedValue = name === 'age' ? Number(value) : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    handleHero(formData);
    console.log(formData);
  };

  return (
    <div id='create-container'>
      <div id='create-left'>
        <form id='create-form' onSubmit={handleSubmit}>
          <h2 className='form-title'>Create your hero!</h2>

          <TextField
            label='Name'
            variant='outlined'
            fullWidth
            margin='normal'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            inputProps={{ maxLength: 15, style: { textAlign: 'center' } }}
            required
          />

          <TextField
            label='Age'
            variant='outlined'
            fullWidth
            margin='normal'
            name='age'
            type='number'
            value={formData.age}
            onChange={handleInputChange}
            inputProps={{ min: 8, max: 1000, step: 1, style: {textAlign: 'center'} }}
            required
          />

          <FormControl fullWidth margin='normal' required>
            <InputLabel id='sex-label'>Sex</InputLabel>
            <Select
              labelId='sex-label'
              label='Sex'
              name='sex'
              value={formData.sex}
              onChange={handleInputChange}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin='normal' required>
            <InputLabel id='race-label'>Race</InputLabel>
            <Select
              labelId='race-label'
              label='Race'
              name='race'
              value={formData.race}
              onChange={handleInputChange}
            >
              <MenuItem value='human'>Human</MenuItem>
              <MenuItem value='elf'>Elf</MenuItem>
              <MenuItem value='dwarf'>Dwarf</MenuItem>
              <MenuItem value='halfling'>Halfling</MenuItem>
              <MenuItem value='dragonborn'>Dragonborn</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin='normal' required>
            <InputLabel id='class-label'>Class</InputLabel>
            <Select
              labelId='class-label'
              label='Class'
              name='class'
              value={formData.class}
              onChange={handleInputChange}
            >
              <MenuItem value='fighter'>Fighter</MenuItem>
              <MenuItem value='wizard'>Wizard</MenuItem>
              <MenuItem value='cleric'>Cleric</MenuItem>
              <MenuItem value='rogue'>Rogue</MenuItem>
              <MenuItem value='paladin'>Paladin</MenuItem>
            </Select>
          </FormControl>

          <Button
            id='create-submit'
            type='submit'
            variant='contained'
            fullWidth
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </form>
      </div>
      <div id='create-right'>
        <SelectionCard
          key={formData.value}
          label={formData.label}
          image={'/images/' + formData.race + '-' + formData.sex + '.png'}
          value={formData.value}
          selected={formData.class}
        />
        {formData.name ? <h3>{formData.name}</h3> : null}
        <img
          className='image-logo'
          src={'/images/' + formData.class + '.png'}
          alt='hero class'
        />
      </div>
    </div>
  );
}

export default Create;
