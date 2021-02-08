import emailjs from "emailjs-com";

const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const USER_ID = process.env.USER_ID;

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: this.state.email,
      to_name: "OJOS",
      message_html: this.state.message,
      reply_to: this.state.email,
    };

    emailjs
      .send("gmail", { TEMPLATE_ID }, templateParams, { USER_ID })
      .then(this.resetForm());
  };

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
    return (
      <section className="sub-section" id="contact">
        <div>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
              className="contact-form-input"
            />
            <input
              required
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              className="contact-form-input"
            />
            <textarea
              required
              rows="10"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Message"
              className="contact-form-input"
            />
            <button type="submit" className="contact-form-input-button">
              Send
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
