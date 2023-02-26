import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResutls from '../GuessResutls/GuessResutls';
import EndGameMessage from '../EndGameMessage/EndGameMessage';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
let answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [ended, setEnded] = React.useState(false);
  const [win, setWin] = React.useState(false);

  function handleSubmitGuess(guess) {
    const guessChecked = checkGuess(guess, answer);
    setResults([...results, guessChecked]);
    if (guess === answer) {
      setEnded(true);
      setWin(true);
    }
  }
  function handleRest() {
    setResults([]);
    setEnded(false);
    setWin(false);
    answer = sample(WORDS);
    console.info({ answer });
  }
  const isEnd = win || results.length === 6;

  return (
    <>
      <button className="btn-reset" onClick={handleRest}>
        {!isEnd ? 'reset' : 'restart'}
      </button>
      <GuessResutls results={results} />
      {isEnd && (
        <EndGameMessage won={win} attempts={results.length} answer={answer} />
      )}
      <GuessInput onSubmitGuess={handleSubmitGuess} enable={ended} />
    </>
  );
}

export default Game;
