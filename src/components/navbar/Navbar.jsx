import './navbar.css'

const Navbar = () =>{

    return(
        <nav>
            <div className='navHeading'>

            <h1>
                Dribble
            </h1>
            </div>

            <div className='navUL'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>



            <div className='navSearch'>
                <input type="search" placeholder='Search any item'/>
            </div>
        </nav>
    )


}


export default Navbar;