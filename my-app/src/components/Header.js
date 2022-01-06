import PropTypes from 'prop-types';
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header>
            <div className='header'>
                <h1>{ title }</h1>
                <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'black' : 'green'} onClick={onAdd} />
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
