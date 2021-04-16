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
    <>
      <main className="navbar d-flex flex-row flex-wrap justify-content-around pt-4 pb-4 mb-5 pb-5 rounded">
        <div>
          <img className="logo position-relative" src="https://i.pinimg.com/originals/7d/1d/81/7d1d8104d1460bb020561f06a6522bad.png" alt="main logo" />
        </div>
        <div>
          <div>
            <div className="pb-3">
              <h3 className="text-white">Catalogue of cats</h3>
            </div>
            <div className="links d-block pb-2 pt-2 mb-3">
              <Link to="/" className="btn-link d-inline">Home  </Link>
              <Link to="/about" className="btn-link">About  </Link>
              <Link to="/shop" className="btn-link">Shop  </Link>
            </div>
          </div>
          <div className="dropdown position-absolute mb-2 pb-2">
            <button className="btn btn-primary rounded dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Search by category
            </button>
            <Filter handleOnClick={handleClick} />
          </div>
        </div>
      </main>
    </>
  );
};

Navbar.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => (dispatch(setFilter(filter))),
});

export default connect(null, mapDispatchToProps)(Navbar);
