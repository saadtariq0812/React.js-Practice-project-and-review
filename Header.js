import React from 'react'
//this used to be required but not anymore works without as well ^

const Header = ({title}) => {
  return (
    <header className = 'header'>
        <h1>{title}</h1> 
        <button className = 'btn'>Explore</button>
    </header>
  )
}

Header.defaultProps = {
    title : "default prop",
}





export default Header

//<button className = 'explore1'>"Explore"</button> 