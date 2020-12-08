import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { DETAILS } from '../../graphql/queries';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { FaArrowLeft } from 'react-icons/fa';

interface CountryDetailProps {
  match: any;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ match }) => {
  const [getCountry, { error, loading, data }] = useLazyQuery(DETAILS, {
    variables: { id: match.params.id },
  });

  useEffect(() => {
    getCountry();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed :(</p>;
  if (data === undefined) return <p>Loading...</p>;
  if (data.details.length === 0) {
    return (
      <p>
        Country not found. Please try again. <br />
        <Link to="/countries">Voltar</Link>
      </p>
    );
  }

  const {
    _id,
    name,
    flag,
    capital,
    area,
    population,
    topLevelDomains,
  } = data.details;

  return (
    <div>
      <Header hasSearch={false} />
      <div className="country-detail-container">
        <Link className="country-detail-back-button" to="/countries">
          <FaArrowLeft className="country-detail-back-button__icon" />
          Go back
        </Link>
        <div className="country-detail-content">
          <div className="country-detail-content-media">
            <img
              className="country-detail-content-media-img"
              src={flag.svgFile}
              alt={` Flag of ${name} `}
            />
          </div>
          <div className="country-detail-content-info">
            <h2 className="country-detail-content-info__name">{name}</h2>
            <div className="country-detail-content-info-details">
              <h3 className="country-detail-content-info__title">Capital</h3>
              <p className="country-detail-content-info__value">{capital}</p>
              <h3 className="country-detail-content-info__title">Area</h3>
              <p className="country-detail-content-info__value">{area}</p>
              <h3 className="country-detail-content-info__title">Population</h3>
              <p className="country-detail-content-info__value">{population}</p>
              <h3 className="country-detail-content-info__title">
                Top level domain
              </h3>
              <p className="country-detail-content-info__value">
                {topLevelDomains[0].name}
              </p>
            </div>
          </div>
        </div>
        <Link
          className="country-detail-btn-edit"
          to={`/countries/edit/${match.params.id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default CountryDetail;
