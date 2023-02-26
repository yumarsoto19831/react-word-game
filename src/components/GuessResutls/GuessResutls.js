import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess/Guess';

function GuessResutls({ results }) {
  return (
    <>
      <div className="guess-results">
        {range(6).map((result, key) => {
          return <Guess key={key} guess={results[key] || ''} />;
        })}
      </div>
    </>
  );
}

export default GuessResutls;
