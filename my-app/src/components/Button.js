import PropTypes from 'prop-types';
const Button = ({ text, color }) => {
    return (
        <button className='btn' style={{ backgroundColor: color }}>{ text }</button>
    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'black'
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Button;
