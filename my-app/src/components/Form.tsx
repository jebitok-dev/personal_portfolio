
export default function Form () {
  return (
    <div className=" row justify-content-center p-5" id="contact">
      <div className="col-sm-3">
        <h3 className="text-dark text-justify">
          I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
        </h3>
      </div>
      <form data-netlify="true" className="col-sm-6 skills crete" data-netlify-honeypot="bot-field">
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input type="text" name="first" id="first" placeholder="First Name" required />
            </div>
            <div className="col">
              <input type="text" name="last" id="last" placeholder="Last Name" required />
            </div>
          </div>
          <br />
          <input type="email" name="email" id="email" placeholder="Email Address" required />
        </div>
        <br />
        <div className="">
          <textarea placeholder="Enter text here" rows={5} name="text" id="text" required></textarea>
        </div>
        <input className="hidden" name="bot-field" placeholder="Don't fill this out if you're a human" />
        <br />
        <button type="submit" className="btn text-white bg-dark">Get in touch <i className="fa fa-envelope"> </i></button>
      </form>
    </div>
  )
}

