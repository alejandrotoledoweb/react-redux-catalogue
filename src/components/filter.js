import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CATEGORIES from '../actions/categories';

const Filter = ({ handleOnClick }) => {
  <ul className="options">
    {CATEGORIES.map((category) => (
      <Link
        className="drop-menu"
        to={`/category/${category.id}`}
        onClick={() => handleOnClick(category.url)}
        key={category.id}
      >
        {category.name}
      </Link>
    ))}
  </ul>;
};

Filter.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
};

export default Filter;
