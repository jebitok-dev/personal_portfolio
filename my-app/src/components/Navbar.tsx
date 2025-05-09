
export default function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg gray mw-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sharon Jebitok</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-md-auto gap-2">
            <li className="nav-item rounded">
              <a className="nav-link active" aria-current="page" href="#projects"><i
                  className="bi bi-house-fill me-2"></i>Portfolio</a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="#about"><i className="bi bi-people-fill me-2"></i>About</a>
            </li>
            <li className="nav-item rounded">
              <a className="nav-link" href="#contact"><i className="bi bi-telephone-fill me-2"></i>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

