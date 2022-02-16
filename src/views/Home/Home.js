import React from 'react';
import ItemCount from '../../Components/ItemCount/ItemCount';
const Home = () => {
  return (
    <>
      <ItemCount
      initial= {1}
      stock= {10}
      />
    </>
  );
};

export default Home;
