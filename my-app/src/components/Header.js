import propTypes from 'prop-types';
const Header = ({ title }) => {
    return (
        <header>
            <div className='container'>
                <h1 style={headingStyle}>{ title }</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default title',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    color: 'black',
    backgroundColor: 'grey'
}

export default Header
