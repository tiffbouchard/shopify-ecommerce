import { Modal, Button, Form, FormControl } from "react-bootstrap";

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
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        border: "0px",
        borderRadius: "0px",
        backgroundClip: "none",
      }}
    >
      <Modal.Header
        closeButton
        onClick={closeButtonClicked}
        style={{
          borderBottom: "none",
          backgroundColor: "#c4dbc8",
          border: "none",
          borderRadius: "0",
        }}
      />
      <Modal.Body
        style={{
          backgroundColor: "#c4dbc8",
          height: "180px",
        }}
      >
        <h4>
          {message
            ? message
            : `Join the list for exclusive details on products and releases`}
        </h4>

        <Form className="subscribe-form" onSubmit={subscribe} inline>
          <FormControl
            type="email"
            placeholder="Email"
            name="email"
            ref={input}
            style={{
              borderBottom: "none",
              backgroundColor: "#c4dbc8",
              border: "1px solid black",
              borderRadius: "0px",
              width: "50%",
            }}
          />
          <Button
            style={{
              borderBottom: "none",
              backgroundColor: "#c4dbc8",
              border: "1px solid black",
              borderRadius: "0px",
              color: "black",
              margin: "5px",
            }}
            type="submit"
          >
            Subscribe
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalSubscribe;
