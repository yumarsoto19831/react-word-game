import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <>
      <p className="guess">
        {range(5).map((index) => {
          if (guess.length > 0) {
            return (
              <span key={index} className={`cell ${guess[index].status}`}>
                {guess[index].letter}
              </span>
            );
          } else {
            return <span key={index} className="cell" />;
          }
        })}
      </p>
    </>
  );
}

export default Guess;
