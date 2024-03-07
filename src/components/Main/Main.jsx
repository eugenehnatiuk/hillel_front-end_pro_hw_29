import React from 'react';
import './main.scss';

const imgUrl = './images/main_photo.jpg';

const Main = ({ sectionClass }) => {
  return (
    <section className={sectionClass}>
      <Counter />
    </section>
  );
};

export default Main;
