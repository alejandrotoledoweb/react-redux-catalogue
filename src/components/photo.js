import React from 'react';
import PropTypes from 'prop-types';
import '../styles/photo.css';

const Photo = ({
  id,
  url,
  photoStyle,
  photoContainer,
}) => (
  <div className={`${photoContainer} d-flex align-items-center`} key={id}>
    <img className={photoStyle} src={url} alt="Cat" />
  </div>
);

Photo.defaultProps = {
  id: 'ZCHj_2lJP00',
};

Photo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  url: PropTypes.string.isRequired,
  photoStyle: PropTypes.string.isRequired,
  photoContainer: PropTypes.string.isRequired,
};

export default Photo;
