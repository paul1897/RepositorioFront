import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    async function fetchAlumnos() {
      try {
        const response = await axios.get('http://localhost:8091/api/alumnos/');
        setAlumnos(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API de alumnos:', error);
      }
    }

    fetchAlumnos();
  }, []);

  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.id}>
            <strong>Nombre:</strong> {alumno.nombre}<br />
            <strong>Apellido:</strong> {alumno.apellido}<br />
            <strong>Email:</strong> {alumno.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
