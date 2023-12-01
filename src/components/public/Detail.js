import React, { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import RickAndMortyService from '../../services/RickAndMorty.service';

const Detail = () => {
  const [mascotas, setMascotas] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    RickAndMortyService.getAllChaById(id)
      .then((data) => setMascotas(data))
  }, [])
  return (
    <div>
      <div className='container-fluid'>
        <div className='container py-5 my-5 m'>
          <div className='d-flex'>
            <div className='col-md-3 mx-3'>
              <img src={mascotas.image} />
            </div>
            <div className='d-grid  col-md-6'>
              <div>
                <div className='d-flex align-items-center my-1'>
                  <h4 className='mx-2'>Name: </h4><h5> {mascotas.name}</h5>
                </div>
                <div className='d-flex align-items-center my-1'>
                  <h4 className='mx-2'>Status: </h4><h5> {mascotas.status}</h5>
                </div>
                <div className='d-flex align-items-center my-1'>
                  <h4 className='mx-2'>Specie: </h4><h5> {mascotas.species}</h5>
                </div>
                <div className='d-flex align-items-center my-1'>
                  <h4 className='mx-2'>Gender: </h4><h5> {mascotas.gender}</h5>
                </div>
                <div className='d-flex align-items-center my-1'>
                  <h4 className='mx-2'>Origin: </h4><h5> {mascotas.origin && mascotas.origin.name}</h5>
                </div>
                <div className='d-flex align-items-center my-1'>
                  <h4 className='mx-2'>Location: </h4><h5> {mascotas.location && mascotas.location.name}</h5>
                </div>
                <div className='d-flex align-items-center my-1'>
                  <span>
                    <Link to="/" className='btn btn-success'>
                      Volver
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
