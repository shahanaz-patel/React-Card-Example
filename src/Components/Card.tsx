import { FC, useEffect, useState } from 'react';

import './styles.css';

export const Card: FC<{
  cardIndex: number;
  index: number;
  onClick: (index: number) => void;
}> = ({ cardIndex, index, onClick }) => {
  // const [selected, setSelected] = useState<boolean>(
  //   index === cardIndex ? true : false
  // );

  // useEffect(() => {
  //   if (index === cardIndex) {
  //     setSelected(true);
  //   }
  //   console.log(selected, index, cardIndex);
  // }, [selected, cardIndex, index]);
  return (
    <div
      className="accommodationClass"
      style={{ borderColor: index === cardIndex ? 'red' : 'black' }}
    >
      <div className="imageContainer">
        <button
          key={index}
          style={{ color: index === cardIndex ? 'red' : 'black' }}
          onClick={() => onClick(index)}
        >
          Add to Favorites
        </button>
        <img
          src="https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
          alt=""
        />
      </div>
      <div className="detailsContainer">
        <h4>Chapter Portobello, London</h4>
        <h6>address</h6>

        <div className="chip">
          <div>
            <p>Gym</p>
          </div>
        </div>

        <div className="details">
          <div> from $235/week</div>
          <button> Know more </button>
        </div>
      </div>
    </div>
  );
};
