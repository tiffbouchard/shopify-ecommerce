import { Modal, Button, Form, FormControl } from "react-bootstrap";

function SubscribeModal(props) {
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
        style={{
          borderBottom: "none",
          backgroundColor: "rgb(173, 223, 173)",
          border: "none",
          borderRadius: "0",
        }}
      />
      <Modal.Body
        style={{
          backgroundColor: "rgb(173, 223, 173)",
          height: "180px",
        }}
      >
        <h4>Join the list for exclusive details on products and events</h4>
        <Form className="subscribe-form" inline>
          <FormControl
            type="text"
            placeholder="Email"
            style={{
              borderBottom: "none",
              backgroundColor: "rgb(173, 223, 173)",
              border: "1px solid black",
              borderRadius: "0px",
              width: "50%",
            }}
          />
          <Button
            style={{
              borderBottom: "none",
              backgroundColor: "rgb(173, 223, 173)",
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

export default SubscribeModal;
