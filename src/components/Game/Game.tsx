import React, { useState } from 'react';
import Board from '../Board/Board';
import { calculateWinner } from '../../helpers.js';

const styles: any = {
  width: '200px',
  margin: '20px auto',
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i: any) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if( winner || squares[i]) return;
    
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  }
  
  const handleJumpTo = (step: any) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0)
  }

  const handleRenderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'Go to start';
      return (
        <li key={move}>
          <button onClick={() => handleJumpTo(move)}>
            {destination}
          </button>
        </li>
      ) 
    })
  )


  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick}/>
      <div style={styles}>
        <p>{winner ? `Winner ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
        {handleRenderMoves()}
      </div>
    </>
  );
};

export default Game;