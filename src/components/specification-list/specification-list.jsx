import React from 'react';
import Specifications from '../../mock/specifications';

const SpecificationList = () => {
  return (
    <section className="tabs__specifications specifications">
      <h3 className="visually-hidden">Характеристики</h3>
      <ul className="specification__list">
        {Specifications.map((specification, index) => (
          <React.Fragment key={`specification-${index}`}>
            <li className="specification__item">
              <span className="specification__text">{specification.name}</span>
              <span className="specification__text">{specification.data}</span>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default SpecificationList;
