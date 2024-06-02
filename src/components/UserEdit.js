import React from 'react';
import InputForm from './InputForm';

const UserEdit = ({ user, updateUser }) => {
  return (
    <div>
      <h2>Editar Usuario</h2>
      <InputForm initialData={user} updateUser={updateUser} />
    </div>
  );
};

export default UserEdit;