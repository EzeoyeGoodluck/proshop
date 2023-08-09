import { useState } from "react";
import {Form, Button } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";


const ShippingScreen = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postaCode, setPostaCode] = useState('');
    const[country, setCountry] = useState('');


    const submitHandler = () =>{
        console.log('yes')
    }
  return (
    <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlled='address' className="my-2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                type='text'
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                >Hello
                </Form.Control>

            </Form.Group>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen