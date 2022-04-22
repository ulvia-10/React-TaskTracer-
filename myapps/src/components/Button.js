import PropTypes from 'prop-types'

  const Button = ({color,text, onClick}) => {
    // object on click 
  

    return ( 
      <button onClick={onClick} 
      style={{backgroundColor: color}}
      className='btn'>{text ? 'hapus': 'tambah'}</button>
    )
  }
    // default propos digunakan untuk mengeset props apabila dia tidak memiliki warna 
    Button.defaultProps={
        color: 'steelblue',
        text: 'Add',
    }

    Button.propTypes = {
        text: PropTypes.string,
        color: PropTypes.string,
        onClick: PropTypes.func.isRequired

    }
    export default Button
