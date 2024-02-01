import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { UserContext } from '../context/User';
import { LoadingContext } from '../context/Loading';
import { useNavigate } from 'react-router-dom';
import '../styles/QuestForge.css';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function QuestForge() {
  const [data, setData] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const navigate = useNavigate();
  const { hero, handleHero, resetHero } = useContext(UserContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    fetchDataAndDisplay();
  }, []);

  const populateFormWithData = (responseData) => {
    setData(responseData);
  };

  const fetchDataAndDisplay = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${SERVER_URL}/quest`);
      const responseData = response.data;
      console.log("HERE'S THE RESPONSE ", response);
      populateFormWithData(responseData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserChoice = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (userChoice !== null && data !== null) {
        const response = await axios.post(`${SERVER_URL}/quest`, {
          ...data,
          userChoice,
        });
        const updatedData = response.data;
        populateFormWithData(updatedData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    resetHero(null);
    console.log('Hero has been reset');
    navigate('/create');
  };

  const renderOptions = () => {
    if (data && !data.deathScene) {
      return data.options.map((option, index) => (
        <div key={index}>
          <input
            type='radio'
            name='userChoice'
            value={index}
            id={`option${index}`}
            onChange={(e) => setUserChoice(option)}
            checked={userChoice === option}
          />
          <label htmlFor={`option${index}`}>{' ' + option}</label>
        </div>
      ));
    } else {
      return null;
    }
  };

  return (
    <div id='quest-container'>
      <div id='quest-left'>
        {hero ? (
          <>
            <img
              id='quest-hero-race'
              src={'/images/' + hero.race + '-' + hero.sex + '.png'}
              alt='hero race'
            />
            <div id='hero-properties'>
              <h2>{hero.name}</h2>
              <h3>
                a {hero.race} {hero.class}
              </h3>
            </div>
          </>
        ) : null}
      </div>
      <div id='quest-right'>
        <div id='quest-scene'>
          {data && data.scene ? data.scene : null}
          {data && data.deathScene ? (
            <div id='scene'>
              <h2>Game Over: Your Hero's Journey Ends Here</h2>
              {data.deathScene}
            </div>
          ) : null}
        </div>
        {loading ? <div className='loader'></div> : null}
        <div id='quest-options'>
          {data && !data.deathScene ? (
            <form id='optionsForm' onSubmit={handleUserChoice}>
              <fieldset>
                <legend>Options</legend>
                <div id='optionsList'>{renderOptions()}</div>
              </fieldset>
              <Button
                variant='contained'
                id='submit-choice-button'
                type='submit'
              >
                Submit Choice
              </Button>
            </form>
          ) : null}
        </div>
      </div>
      <Button
        id='reset-button'
        type='submit'
        variant='contained'
        color='error'
        onClick={handleReset}
      >
        Reset
      </Button>
    </div>
  );
}

export default QuestForge;
