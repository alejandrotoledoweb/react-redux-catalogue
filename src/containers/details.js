import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { asyncFetchDetail } from '../actions';
import Photo from '../components/photo';
import Loading from '../components/loading';
import '../styles/details.css';

const Detail = ({ dogs, fetchDetail }) => {
  const [dog, setDog] = useState({ id: null, urls: { small: '' }, user: { name: '' } });
  const [loaded, setLoaded] = useState(false);
  const { dogId } = useParams();
  useEffect(() => {
    if (loaded === false) {
      fetchDetail(dogId, 1)
        .then(({ dog }) => {
          setLoaded(true);
          setDog(dog);
        });
    }
  }, [loaded]);

  const { loading } = dogs;

  const {
    urls,
    alt_description: alt,
    description,
    user: author,
  } = dog;

  return (
    <>
      {
        loading ? (
          <Loading />
        )
          : ''
      }
      <div className="conatiner-fluid d-flex flex-row bd-highlight bg-ligth mt-2 mb-2 ml-3 mr-3 pt-4 pb-4 pl-3 pr-3 rounded">
        <div className="col-5">
          <Photo id={dogId} url={urls.small} photoContainer="photo-detail-container" photoStyle="photo-detail" />
        </div>
        <div className="col-5 d-flex flex-column photo-info">
          <h4>Photo description</h4>
          <p className="description">{description}</p>
          <div>{alt}</div>
          <span>--------</span>
          <div className="font-lilita-one">
            <span>Photo taken by: </span>
            <span>{author.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};

Detail.propTypes = {
  dogs: PropTypes.shape({
    loading: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  fetchDetail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dogs: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDetail: (id) => dispatch(asyncFetchDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
