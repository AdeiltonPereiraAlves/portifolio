import {Link} from 'react-router-dom'

function NavBar(){
    return(
       <nav className='flex  gap-5 '> 
        <a href="#home" >Home</a>
        <a href="#xp">Xp</a>
        <a href="#contato">Contato</a>
       </nav>
    )
}

export default NavBar;