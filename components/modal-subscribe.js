import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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
          borderRadius: "0px",
        }}
      />
      <Modal.Body
        style={{
          backgroundColor: "rgb(173, 223, 173)",
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

// .modal-header {
//   border-bottom: none;
// }
// .modal-content {
//   background-color: rgb(173, 223, 173);
//   border: none;
//   border-radius: 0px;
// }

export default SubscribeModal;
