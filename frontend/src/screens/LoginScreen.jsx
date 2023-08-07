import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer';


const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={SubmitHandler}>

      </Form>
    </FormContainer>
  )
}

export default LoginScreen