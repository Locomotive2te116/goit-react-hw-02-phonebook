import React from 'react';

export const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={event => deleteContact(id, event)}>
        Delete
      </button>
    </li>
  );
};
