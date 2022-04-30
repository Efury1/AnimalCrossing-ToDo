import React from 'react';
import CharacterQuotes from './CharacterQuotes';

function DailyQuotes() {
  const randomNum = Math.floor(Math.random() * Math.floor(CharacterQuotes.length)); //Get random number from quotes
  return (
    <div className="Quote">
      <h1>{CharacterQuotes[randomNum].Quote} </h1>
      <h1>{CharacterQuotes[randomNum].Character}</h1>
    </div>
  )
};

export default DailyQuotes;
