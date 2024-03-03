import React, { useState } from 'react';
import axios from 'axios';

const AgregarEstudiante = () => {
  // Estados para almacenar los datos del estudiante
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Realizar la solicitud POST al microservicio de agregar estudiantes
      const response = await axios.post('http://localhost:8091/api/alumnos/', {
        nombre: nombre,
        apellido: apellido,
        email: email
      });
      // Manejar la respuesta del servidor
      console.log('Estudiante agregado correctamente:', response.data);
      // Limpiar el formulario después de agregar el estudiante
      setNombre('');
      setApellido('');
      setEmail('');
    } catch (error) {
      console.error('Error al agregar estudiante:', error);
    }
  };

  return (
    <div>
      <h2>Agregar Estudiante</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            
          />
        </div>
        <button type="submit">Agregar Estudiante</button>
      </form>
    </div>
  );
};

export default AgregarEstudiante;
