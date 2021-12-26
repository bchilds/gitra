import PropTypes from 'proptypes';

export const proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  githubStatus: PropTypes.string,
  myStatus: PropTypes.string,
};

export default PropTypes.shape({
  ...proptypes,
});
