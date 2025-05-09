export default function Footer () {
  return (
    <footer className="d-flex justify-content-between flex-wrap bg-dark p-4">

      <ul className="list-inline social-links">
        <li className="list-inline-item pl-2 border-left border-light x-left">
          <a href="http://github.com/jebitok-dev" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa1 fa-github"></i>
          </a>
        </li>
        <li className="list-inline-item pl-2 border-left border-light">
          <a href="https://www.linkedin.com/in/sharon-jebitok/" target="_blank" rel="noopener noreferrer"
            className="text-white">
            <i className="fab fa1 fa-linkedin"></i>
          </a>
        </li>
        <li className="list-inline-item pl-2 border-left border-light">
          <a href="http://twitter.com/sharonjebitok" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa1 fa-twitter"></i>
          </a>
        </li>
        <li className="list-inline-item pl-2 border-left border-light">
          <a href="http://jebitok.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fas fa1 fa-rss"></i>
          </a>
        </li>
      </ul>

      <div className="text-white fa2">
        <p>&copy;Software Developer</p>
      </div>
    </footer>
  )
}

