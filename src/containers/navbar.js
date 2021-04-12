import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../actions';
import Filter from '../components/filter';
import '../styles/navbar.css';

const Navbar = ({ setFilter }) => {
  const handleClick = (filter) => {
    setFilter(filter);
  };

  return (
    <main className="navbar d-flex flex-row justify-content-around pt-4 pb-4 mb-5">
      <div>
        <h3 className="text-white">Catalogue of cats</h3>
      </div>
      <div className="links">
        <Link to="/" className="btn-link">Home  </Link>
        <Link to="/about" className="btn-link">About  </Link>
        <Link to="/shop" className="btn-link">Shop  </Link>
      </div>
      <div className="dropdown position-absolute">
        <button className="btn btn-primary rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Search by category
        </button>
        <Filter handleOnClick={handleClick} />
      </div>
    </main>
  );
};

Navbar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => (dispatch(setFilter(filter))),
});

export default connect(null, mapDispatchToProps)(Navbar);
