import React from 'react'; 

interface Props {
  handleOnClick: any;
  value: any;
}

const style: any = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ handleOnClick, value }: Props) => (
      <button style={style} onClick={handleOnClick}>{value}</button>
);

export default Square;