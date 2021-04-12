import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilter } from '../actions';
import Filter from '../components/filter';

const Navbar = ({ setFilter }) => {
  const handleClick = (filter) => {
    setFilter(filter);
  };

  return (
    <main className="navbar">
      <div>
        <h3>Title of the project</h3>
      </div>
      <div className="links">
        <Link to="/" className="btn-link">Home</Link>
        <Link to="/about" className="btn-link">About</Link>
      </div>
      <div>
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
