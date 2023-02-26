import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResutls from '../GuessResutls/GuessResutls';
import EndGameMessage from '../EndGameMessage/EndGameMessage';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [results, setResults] = React.useState([]);
  const [ended, setEnded] = React.useState(false);
  const [win, setWin] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  console.info({ answer });
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
    setAnswer(sample(WORDS));
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
