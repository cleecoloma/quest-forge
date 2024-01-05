import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  const [data, setData] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const navigate = useNavigate();
  const { handleHero } = useContext(UserContext);

  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    fetchDataAndDisplay();
  }, []);

  const populateFormWithData = (responseData) => {
    setData(responseData);
  };

  const fetchDataAndDisplay = async () => {
    try {
      // Make a POST request using Axios
      const response = await axios.post(`${SERVER_URL}/adventure`);
      const responseData = response.data;
      console.log("HERE'S THE RESPONSE ", response);

      // Populate the form with the initial response
      populateFormWithData(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUserChoice = async (event) => {
    event.preventDefault();
    if (userChoice !== null && data !== null) {
      const response = await axios.post(`${SERVER_URL}/adventure`, {
        ...data,
        userChoice,
      });
      const updatedData = response.data;
      populateFormWithData(updatedData);
    }
  };

  const handleReset = () => {
    handleHero(null);
    console.log("Hero has been reset")
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
          <label htmlFor={`option${index}`}>{option}</label>
        </div>
      ));
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Quest Forge</h1>
      <div id='userInfo'>
        {data ? (
          data.deathScene ? (
            <div>
              <p id='death-scene'>{data.deathScene}</p>
            </div>
          ) : (
            <div>
              <p>
                Name: <span id='userName'>{data.user.name}</span>
              </p>
              <p>
                Age: <span id='userAge'>{data.user.age}</span>
              </p>
              <p>
                Race: <span id='userRace'>{data.user.race}</span>
              </p>
              <p>
                Class: <span id='userClass'>{data.user.class}</span>
              </p>
            </div>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {data && data.scene ? <div id='scene'>{data.scene}</div> : null}
      {data && !data.deathScene ? (
        <form id='optionsForm' onSubmit={handleUserChoice}>
          <fieldset>
            <legend>Options</legend>
            <div id='optionsList'>{renderOptions()}</div>
          </fieldset>
          <button type='submit'>Submit Choice</button>
        </form>
      ) : null}
      <Button type='submit' variant='contained' color='error' onClick={handleReset} fullWidth>
        Reset
      </Button>
    </div>
  );
}

export default Hero;
