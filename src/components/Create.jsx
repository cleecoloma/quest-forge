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
import '../styles/Create.css';

function Create() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    race: '',
    class: '',
  });
  const { handleHero } = useContext(UserContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleHero(formData)
    console.log(formData);
  };

  return (
    <form
      id='create-form'
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, margin: 'auto' }}
    >
      <h2 className='form-title'>Create your hero!</h2>
      <TextField
        label='Name'
        variant='outlined'
        fullWidth
        margin='normal'
        name='name'
        value={formData.name}
        onChange={handleInputChange}
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
        inputProps={{ min: '5', max: '1000', step: '5' }}
      />

      <FormControl fullWidth margin='normal'>
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

      <FormControl fullWidth margin='normal'>
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
        color='warning'
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
}

export default Create;
