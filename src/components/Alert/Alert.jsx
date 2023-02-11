import PropTypes from 'prop-types';
import './Alerts.css';

const Alert = ({ text, button, textButton }) => (
  <aside className="loginModal__container">
    <div className="loginModal">
      <h4>{text}</h4>
      {button === null ? null : (
        <button type="button" onClick={button} className="buttonModal">
          {textButton}
        </button>
      )}
    </div>
  </aside>
);


export default Alert;


Alert.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.func,
  textButton: PropTypes.string,
};

Alert.defaultProps = {
  button: null,
  textButton: '',
};
