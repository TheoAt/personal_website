import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsPerson, BsBook } from 'react-icons/bs';

export default function Navbar() {
    return(
        <nav className="navbar__container">
            <div className="navbar__content">
                <p className="navbar__title">TheoAt</p>
                <div className="navbar__links">
                    <NavLink className="navbar__link" to="/">Accueil</NavLink>
                    <NavLink className="navbar__link" activeClassName="navbar__link__selected" to="/about">A propos</NavLink>
                    <NavLink className="navbar__link" activeClassName="navbar__link__selected" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="navbar__link" activeClassName="navbar__link__selected" to="/contact">Contact</NavLink>
                </div>
            </div>

            <div className="navbar__responsive">
                <p className="navbar__responsive__title">TheoAt</p>
                <div className="navbar__responsive__links">
                    <NavLink to="/"><AiOutlineHome className="navbar__responsive__icon"/></NavLink>
                    <NavLink to="/about"><BsPerson className="navbar__responsive__icon"/></NavLink>
                    <NavLink to="/portfolio"><BsBook className="navbar__responsive__icon"/></NavLink>
                    <NavLink to="/contact"><AiOutlineMail className="navbar__responsive__icon"/></NavLink>
                </div>
            </div>
        </nav>
    )
}