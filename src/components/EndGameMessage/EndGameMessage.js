import React from 'react';
import { answer } from '../Game/Game';

function EndGameMessage({ won, attempts, answer }) {
  return (
    <>
      {won ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{`${attempts} guesses`} </strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default EndGameMessage;
