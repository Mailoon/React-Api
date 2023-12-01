import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ mascotas }) => {
  return (
    <div className="col-md-4 col-sm-6 px-2 py-4">
      <div className='d-grid border justify-content-center p-3'>
        <img src={mascotas.image} className='img-fluid' alt={mascotas.name} />
          <Link to={`/details/${mascotas.id}`} className="btn btn-success my-3 p-2">
            Detalle
          </Link>
      </div>
    </div>
  );
};

export default Card;
