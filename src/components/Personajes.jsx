import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]); 
  const [cargando, setCargando] = useState(true); 

  useEffect(() => {
    const obtenerPersonajes = async () => {

        const response = await fetch('https://dragonball-api.com/api/characters');
        if (!response.ok) {
          throw new Error('Error al obtener los personajes');
        }
        const data = await response.json();
        setPersonajes(data.items); 

    };

    obtenerPersonajes();
  }, []);


  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Personajes Dragon Ball</h1>

      <div className="container-fluid">
        <div className="row">
          {personajes.map((personaje) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={personaje.id}>
              <div className="card h-100">

                  <img
                    src={personaje.image}
                    alt={personaje.name}
                    className="card-img-top"
                    height="500"
                    width="300"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                        <NavLink to={`/personajes/${personaje.id}`}>
                            {personaje.name}
                        </NavLink>
                    </h5>
                    <p className="card-text">Role: {personaje.race}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Personajes;
