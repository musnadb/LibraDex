import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/"    /* adds an anchor tag to the home page */>
                    <h1>Test Navigation Bar</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar