import React from 'react';

function GuessInput({ onSubmitGuess, enable }) {
  const [guess, setGuess] = React.useState('');

  function onGuessChage(event) {
    setGuess(event.target.value.toUpperCase());
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitGuess(guess);
    setGuess('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={enable}
        id="guess-input"
        type="text"
        required
        pattern="[a-zA-Z]{5}"
        minLength={5}
        maxLength={5}
        title={'Most be a 5 letter word'}
        value={guess}
        onChange={onGuessChage}
      />
    </form>
  );
}

export default GuessInput;
