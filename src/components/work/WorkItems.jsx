
import React, {useState } from 'react';

const WorkItems = ({item}) => {
  const [showDescription, setShowDescription] = useState(0);

  const toggleDescription = (index) => {
    setShowDescription(index);
  };
  return (
    <div className="work__card " key={item.id}>
      <img src={item.image} alt="" className='work__img'/>
      <h3 className="work__title">{item.title}</h3>

      <span className="span description__button" onClick={()=>toggleDescription(1)}>
        ver descripción
        <i className="uil uil-arrow-right description__button-icon"></i>
      </span>

      <div className={showDescription === 1 ? 'description__modal active-modal' : 'description__modal'}>
        <div className="description__modal-content">
          <i onClick={()=>toggleDescription(0)} className="uil uil-times description__modal-close"></i>
          <h3 className="description__modal-title"> {item.title} </h3>
          <p className="description__modal-description"> {item.description} </p>
        </div>
      </div>

      <a href={item.url} className="work__button" target='_blank' rel='noopener noreferrer'>
        ver proyecto <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
    
  )
}

export default WorkItems