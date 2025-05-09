import Frame from '../assets/images/Frame.png' 

export default function Resume() {
  return (
    <div className="row bg-dark text-justify margin-l" id="about">
      <article className="col-sm p-5">
        <h1 className="col success">About Me</h1>
        <p className="crete">
          Hello! I'm a software developer with two years of experience. I can help you build a product, feature, or
          website. Take a look at some of my past work and experience. If you like what you see and have a project you
          need coded, don't hesitate to contact me.
        </p>
        <a href="https://drive.google.com/file/d/10IfejZ5ggvEI1i3CQo__-5CjauZOfAdR/view?usp=sharing" target="_blank"
          rel="noopener noreferrer" className="btn bg-light btn-sm" download="Download-Resume.pdf">
          Get My Resume <i className="fa fa-download"> </i>
        </a>
      </article>
      <figure className="col-sm space">
        <img src={Frame} className="img-fluid" alt="about-img" />
      </figure>
    </div>
  )
}

