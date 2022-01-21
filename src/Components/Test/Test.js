import React from "react";

import { ButtonToolbar, Button, Modal } from "rsuite";

const Test = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="modal-container">
        <ButtonToolbar>
          <Button onClick={handleOpen}> Open</Button>
        </ButtonToolbar>

        <Modal open={open} onClose={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Hello</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} appearance="primary">
              Ok
            </Button>
            <Button onClick={handleClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Test;
