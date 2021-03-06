import React from "react";
import Square from '../Square/Square';

type value = 'X' | 'O' | null;

export interface Props {
  squares: value[];
  onClick(i: number): void;  
}

const style: any = {
  border: '4px solid darkblue',
  borderRadius: '10px',
  width: '250px',
  height: '250px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board: React.FC<Props> = ({ squares, onClick }) => (

  <div style={style}>
    {squares.map((square: value, i: number) => (
      <Square key={i} value={square} handleOnClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
