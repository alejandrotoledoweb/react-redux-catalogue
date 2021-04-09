import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncFetchDogs, setPage } from '../actions';
import Photo from '../components/photo';
import Loading from '../components/loading';

const Home = ({ cats, fetchCats, setPage }) => {
  const [filter, setFilter] = useState('cat-clothes');
  useEffect(() => {
    if (cats.page !== undefined) {
      fetchCats(filter, cats.page);
    }
    if (cats.filter !== undefined) {
      setFilter(cats.filter);
      fetchCats(cats.filter, cats.page);
    }
  }, [cats.filter, cats.page]);

  const { list, loading } = cats;

  const pagination = [1, 2, 3];

  return (
    <>
      <ul className="d-flex list-items">
        { pagination.map((page) => (
          <li key={page}>
            <Link
              to="/"
              className="btn"
              onclick={
                () => setPage(page)
              }
              alt={`Page ${page}`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
      {
        loading ? (<Loading />) : ''
      }
      <div>
        {list.map((cat) => (
          <Link
            to={`/photos/${cat.id}`}
            key={cat.id}
            className="col-12"
          >
            <Photo photoContainer="photo-container" photoStyle="photo" key={cat.id} id={cat.id} url={cat.urls.regular} />
          </Link>
        ))}
      </div>
    </>
  );
};

Home.propTypes = {
  cats: PropTypes.shape({
    list: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired,
    loading: PropTypes.bool,
    filter: PropTypes.string,
    page: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  fetchCats: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cats: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCats: (filter, page) => dispatch(asyncFetchDogs(filter, page)),
  setPage: (page) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
