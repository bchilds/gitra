import PropTypes from 'proptypes';

export const proptypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PropTypes.shape({
  ...proptypes,
});
