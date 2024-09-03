
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item ">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
