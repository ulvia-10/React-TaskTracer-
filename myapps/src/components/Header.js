    import React from "react";  
    import PropTypes from 'prop-types';
    import Button from "./Button";
    import {FaTrash} from 'react-icons/fa'


//  isi props 
    const Header = ({title}) => {
        const onClick= () => {
            console.log('Click')
        }
        return (
            <header className='header'>
                <h1 > {title} </h1>
            <Button color='green' onClick={onClick}/> <FaTrash/>
            </header>
        )
    }
    // kalau ga ada 
    Header.defaultProps = {
        title: 'Task Tracer',
    }

    //  propTypes adalah untuk validasi, string atau required
    Header.propTypes = {
        title: PropTypes.string.isRequired,
    }
    // styling 

    export default Header
