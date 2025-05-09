import headerImage from '../assets/images/Illustration-header.svg'

export default function Header () {
  return (
    <header className="bg-dark mw-100">
    <div className="row p-5">
      <ul className="col-lg col-md col-sm first list-inline width-re list-group-horizontal-lg social-links">
        <li>
          <a href="https://github.com/jebitok-dev" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa1 fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sharon-jebitok/" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa1 fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sharonjebitok" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa1 fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://jebitok.hashnode.dev" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fas fa-rss"></i>
          </a>
        </li>
      </ul>
      <div className="col-lg-4 col-md-4 col-sm second">
        <h1 className="text-white">Hey There..</h1>
        <h1 className="text-white">I'm Sharon</h1>
        <h4 className="text-white">I'm a Software Developer</h4>
        <p className="text-white">
          {/* I can help you build a product, feature or website. Look through
          some of my work and experience! If you like what you can see and
          have a project you need coded, don't hesitate to contact me. */}
          With a solid background in product development, feature implementation, and website creation, I possess two
          years of valuable work experience. I take pride in my ability to deliver exceptional solutions that meet
          client needs. I invite you to review my portfolio and gain a deeper understanding of my skills and
          accomplishments. If you find my work aligned with your requirements and have a coding project in mind,
          please don't hesitate to reach out. I look forward to the opportunity to collaborate with you and bring your
          vision to fruition.
        </p>
      </div>
      <div className="col-lg-6 col-md-6 col-sm order-last">
        <img src={headerImage} className="img-fluid" alt="header-img" />
      </div>
    </div>
  </header>
  )
}

