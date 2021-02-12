import emailjs from "emailjs-com";

const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.EMAILJS_USER_ID;
const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    response: "",
    loading: false
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, message } = this.state;

    let templateParams = {
      from_name: email,
      to_name: "OJOS",
      message_html: message,
      reply_to: email,
    };

    this.sendEmail(templateParams);
  };

  sendEmail = (templateParams) => {
    this.setState({ loading : true });

    emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      templateParams,
      USER_ID
      )
      .then((response) => {
        this.setState({ loading : false });
        this.setState({ response : "Yay! 🎉 Your message has been sent. We will get back to you ASAP" });
        this.resetForm();
      }).catch((error) => {
        this.setState({ loading : false });
        console.log(error)
        this.setState({ response : "Something went wrong, sorry! Please try again later" })
      });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { response, loading, message, email , name } = this.state;

    return (
      <section className="sub-section" id="contact">
        <div>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"
              className="contact-form-input"
            />
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
              className="contact-form-input"
            />
            <textarea
              required
              rows="10"
              name="message"
              value={message}
              onChange={this.handleChange}
              placeholder="Message"
              className="contact-form-input"
            />
            <button type="submit" className="contact-form-input-button" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
            <div>{response ? response : " "}</div>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
