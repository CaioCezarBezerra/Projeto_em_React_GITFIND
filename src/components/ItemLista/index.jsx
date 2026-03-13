import React from 'react';
import './styles.css';

function ItemList({tilte, description}) {
  return (
    <div className='item-list'>
        <strong>{tilte}</strong>
        <p>{description}</p>
        <hr/>
    </div>
  )
}

export default  ItemList;