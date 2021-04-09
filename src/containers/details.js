import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncFetchDetail } from '../actions';
import Photo from '../components/photo';
import loading from '../components/loading';

const Detail = ({ cats, fetchDetail }) => {
  const [cat, setCat] = useState({ id: null, urls: { small: '', user: { name: '' } } });
  const [loaded, setLoaded] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    if (loaded === false) {
      fetchDetail(catId, 1)
        .then(({ cat }) => {
          setLoaded(true);
          setCat(cat);
        });
    }
  }, [loaded]);

  const { loading } = cats;

  const {
    urls,
    alt_description: alt,
    description,
    user: author,
  } = cat;

  return (
    <>
      {
        loading ? (
          <Loading />
        )
          : ''
      }
      <div className="d-flex">
        <div className="col-6">
          <Photo id={catId} url={urls.regular} photoContainer="photo-detail-container" photoStyle="photo-detail" />
        </div>
        <div>
          <h3>{description}</h3>
          <p>{alt}</p>
          <div>
            <span>Author: </span>
            <span>{author.name}</span>
          </div>
        </div>

      </div>
    </>
  );
};

Detail.propTypes = {
  cats: PropTypes.shape({
    loading: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  fetchDetail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cats: state,
});

const mapDispatchToProps = (dispatch) => ({
  featchDetails: (id) => dispatch(asyncFetchDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
