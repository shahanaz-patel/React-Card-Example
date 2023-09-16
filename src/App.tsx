import { FC, useEffect, useState } from 'react';
import { Card } from './Components/Card';

import './style.css';

export const App: FC = () => {
  const cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [cardIndex, setCardIndex] = useState<number>(1);

  const handleClick = (index: number) => {
    console.log(index);
    setCardIndex(index);
  };

  useEffect(() => {
    console.log('Hi');
  }, [cardIndex]);
  return (
    <div className="container">
      {cards.map((index) => (
        <Card
          key={index}
          cardIndex={cardIndex}
          index={index}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};
