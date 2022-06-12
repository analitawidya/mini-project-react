import React, {useState, useEffect} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {updateProduct} from '../../services/api';

const EditProductModal = (props) => {
    const {showEdit, handleCloseEdit, setRefresh, refresh, dataEditProduct} = props;
   
    const [name, setName] = useState(" ");
    const [quantity, setQuantity] = useState(" ");
    const [price, setPrice] = useState(" ");
    const [image, setImage] = useState(" ");

    const editProduct = async (e) => {
        e.preventDefault();
       await updateProduct(dataEditProduct.id, name, quantity, price, image)
       .then((response)=>console.log(response.data))
      .catch((error) => console.log(error));
      handleCloseEdit();
      setRefresh(refresh);

    };

    useEffect (()=> {
        setName(dataEditProduct.name)
        setQuantity(dataEditProduct.Quantity)
        setPrice(dataEditProduct.Price)
        setImage(dataEditProduct.Image)

    }, [dataEditProduct.id])


    return (
        <div>
            <Modal showEdit={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editProduct}>
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
          <Button variant="secondary" onClick={handleCloseEdit}>
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

export default EditProductModal

