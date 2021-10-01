import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul class="nav justify-content-center fixed-sticky">
            <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/inicio">Active</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/about">About</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Navbar;