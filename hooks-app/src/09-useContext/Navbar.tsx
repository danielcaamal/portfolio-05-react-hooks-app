import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/login">Login</NavItem>
                        <NavItem to="/about">About</NavItem>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const NavItem = ({ children, to } : {children: any, to:string}) => {
    return (
        <NavLink 
            className={ (args) => `nav-item nav-link ${args.isActive && 'active' }` }
            to={to}>
            {children}
        </NavLink>
    );
}