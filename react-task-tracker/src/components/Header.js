import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd}) => {
    const onClick = () =>{
        console.log('Click');
    }
    return(
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={onAdd} color='green' text = 'Add'/>
    </header>
    )
    
}
Header.defaultProps ={
    title :'Task Tracker'
}
Header.propType ={
    title: PropTypes.string.isRequired
}
//CSS in js
const headerStyle ={
    color : 'red'
}
export default Header;
