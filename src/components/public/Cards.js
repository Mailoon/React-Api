import React, { useEffect, useState } from 'react';
import Card from './Card';
import RickAndMortyService from '../../services/RickAndMorty.service';

const Cards = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    RickAndMortyService.getAllCharacter()
      .then((data) => setMascotas(data.results))
      .catch((error) => console.log(error));
  }, []);  // Cambiado la dependencia a []

  const CardList = mascotas.map((m) => <Card mascotas={m} key={m.id} />);

  return (
    <div className='contianer'>
      <div className="container justify-container-center p-5">
        <div className="row justify-content-center align-items-center">
          {CardList}
        </div>
      </div>
    </div>
  );
};

export default Cards;
