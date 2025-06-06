import react from 'react';
import Proptypes from 'prop-types';
export default function Navbar(props1) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props1.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props1.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props1.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props1.about2}</a>
                        </li>

                    </ul>
                   

                    <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props1.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}



Navbar.defaultProps={
    title:'this is me',
    home:'hello'
}

Navbar.propTypes={
    title:Proptypes.string.isRequired,
    home:Proptypes.string,
}

