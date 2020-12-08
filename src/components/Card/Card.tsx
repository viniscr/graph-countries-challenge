import React from 'react';
import { Country } from '../../models/country';
import { Link } from 'react-router-dom';

interface CardProps {
  country: Country;
}

const Card: React.FC<CardProps> = ({ country }) => {
  const { name, capital, flag, _id } = country;

  return (
    <article className="card" data-testid="card">
      <Link to={`countries/${_id}`} data-testid="country-details">
        <div className="card__media">
          <img className="card__flag" src={flag.svgFile} alt="Country Flag" />
        </div>
        <div className="card__content">
          <h2 className="card__name">{name}</h2>
          <span className="card__capital">{capital}</span>
        </div>
      </Link>
    </article>
  );
};

export default Card;
