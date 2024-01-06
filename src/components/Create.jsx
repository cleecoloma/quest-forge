'use strict';

import React, { useState, useContext } from 'react';
import {
  TextField,
  Button,
  Typography,
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
    age: '',
    sex: '',
    race: '',
    class: '',
  });
  const { handleHero } = useContext(UserContext);

  const raceOptions = [
    { label: 'Human', value: 'human', image: '/images/human' },
    { label: 'Elf', value: 'elf', image: '/images/elf' },
    { label: 'Dwarf', value: 'dwarf', image: '/images/dwarf' },
    { label: 'Halfling', value: 'halfling', image: '/images/halfling' },
    { label: 'Dragonborn', value: 'dragonborn', image: '/images/dragonborn' },
  ];

  const classOptions = [
    { label: 'Fighter', value: 'fighter', image: '/images/fighter.png' },
    { label: 'Wizard', value: 'wizard', image: '/images/wizard.png' },
    { label: 'Cleric', value: 'cleric', image: '/images/cleric.png' },
    { label: 'Rogue', value: 'rogue', image: '/images/rogue.png' },
    { label: 'Paladin', value: 'paladin', image: '/images/paladin.png' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedValue = name === 'age' ? Number(value) : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSelectionChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleHero(formData);
    console.log(formData);
  };

  return (
    <form
      id='create-form'
      onSubmit={handleSubmit}
      style={{ maxWidth: 900, margin: 'auto' }}
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
        inputProps={{ min: 5, max: 1000, step: 5 }}
      />

      <FormControl fullWidth margin='normal'>
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

      <div className='card-selection-container'>
        <Typography gutterBottom variant='h6' component='div'>
          Race
        </Typography>
        {raceOptions.map((option) => (
          <SelectionCard
            key={option.value}
            label={option.label}
            image={option.image + '-'+ formData.sex +'.png'}
            value={option.value}
            selected={formData.race === option.value}
            onClick={() => handleSelectionChange('race', option.value)}
          />
        ))}
      </div>

      <div className='card-selection-container'>
        <Typography gutterBottom variant='h6' component='div'>
          Class
        </Typography>
        {classOptions.map((option) => (
          <SelectionCard
            key={option.value}
            label={option.label}
            image={option.image}
            value={option.value}
            selected={formData.class === option.value}
            onClick={() => handleSelectionChange('class', option.value)}
          />
        ))}
      </div>

      <Button
        id='create-submit'
        type='submit'
        variant='contained'
        color='warning'
        fullWidth
        style={{ marginTop: 20 }}
      >
        Submit
      </Button>
    </form>
  );
}

export default Create;