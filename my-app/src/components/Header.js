import PropTypes from 'prop-types';
import Button from './Button'
const Header = ({ title }) => {
    return (
        <header>
            <div className='header'>
                <h1>{ title }</h1>
                <Button text='add' color='green' />
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default title',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
/*const headingStyle = {
    color: 'black',
    backgroundColor: 'grey'
}*/

export default Header
