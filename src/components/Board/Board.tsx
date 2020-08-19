import React from "react";
import Square from '../Square/Square';

export interface Props {
  squares: any;
  onClick: any;
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

const Board = ({ squares, onClick }: Props) => (

  <div style={style}>
    {squares.map((square: any, i: number) => (
      <Square key={i} value={square} handleOnClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
