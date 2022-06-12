import React, {useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {addProduct} from '../../services/api';

const AddProductModal = (props) => {
    const {show, handleClose, setRefresh, refresh} = props;
    const [name, setName] = useState(" ");
    const [quantity, setQuantity] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [image, setImage] = useState(" ");

    const addNewProduct = async (e) => {
      e.preventDefault()
       await addProduct(name, quantity, price, image)
       .then((response)=>console.log(response.data))
      .catch((error) => console.log(error));
      handleClose();

    }


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addNewProduct}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="input product name"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
                type="number"
                placeholder="input product quantity"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>price</Form.Label>
              <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder="input product price"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="input product image"
                autoFocus
                required
              />
            </Form.Group>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit'>
            SUBMIT
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal>
        </div>
    )
}

export default AddProductModal