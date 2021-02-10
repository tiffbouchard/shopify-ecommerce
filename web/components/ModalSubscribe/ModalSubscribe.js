import { Modal } from "react-bootstrap";

import styles from './ModalSubscribe.module.css';

function ModalSubscribe(props) {
  const input = React.useRef(null);

  const [message, setMessage] = React.useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: input.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }
    
    localStorage.setItem("subscribed", true);
    input.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  const closeButtonClicked = () => {
    sessionStorage.setItem("closeButtonClicked", true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.wrapper}
    >
      <Modal.Header
        closeButton
        onClick={closeButtonClicked}
        className={styles.header}
      />
      <Modal.Body
        className={styles.body}
      >
        <h4>
          {message
            ? message
            : `Join the list for exclusive details on products and releases`}
        </h4>

        <form className={styles.form} onSubmit={subscribe} inline>
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={input}
            className={styles.input}
          />
          <button
            className={styles.button}
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalSubscribe;
