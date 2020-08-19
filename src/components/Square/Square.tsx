import React from 'react'; 

type value = 'X' | 'O' | null;

interface Props {
  value: value;
  handleOnClick(): void;
}

const style: any = {
  background: 'lightblue',
  border: '2px solid darkblue',
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
};

const Square: React.FC<Props> = ({ handleOnClick, value }: Props) => (
      <button style={style} onClick={handleOnClick}>{value}</button>
);

export default Square;