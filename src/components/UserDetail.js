import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>Detalhes</h2>
      <p>Nome: {user.name}</p>
      <p>Data de Aniversario: {user.dob}</p>
      <p>Endereço: {user.address}</p>
    </div>
  );
};

export default UserDetail;