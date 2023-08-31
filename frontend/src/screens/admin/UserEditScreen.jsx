import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {  toast } from "react-toastify";
import {
  useUpdateUserMutation,
  useGetUsersDetailsQuery,

} from "../../slices/usersApiSlice";
import FormContainer from "../../components/FormContainer";
import { FaLaptopHouse } from "react-icons/fa";

const UserEditScreen = () => {
  const { id: userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);


  const {
    data: user,
    isLoading,
    refetch,
    error,
  } = useGetUsersDetailsQuery(productId);

  const [ updateUser,  {isLoading: loadingUpdate}] = useUpdateUserMutation();


  const navigate = useNavigate();

  useEffect(() => { 
    if(user){
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
    }

  }, [user]);


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit');
   
  }

  return <>
  <Link to="/admin/userlist" className="btn btn-light my-3">
    Go Back
  </Link>
  <FormContainer>
    <h1>Edit User</h1>
    {loadingUpdate && <loader /> }
    {isLoading ? <Loader /> : error ? <Message variant='danger' >{error}</Message> : (
        <Form onSubmit={ submitHandler }>
            <Form.Group controlId="name" className="my-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type='name'
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId="email" className="my-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                type='email'
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>


            <Form.Group controlId="image" className="my-2">
                <Form.Label>Image</Form.Label>
                <Form.Control type='text' placeholder='Enter image url'
                value={image} onChange={(e) => setImage}>
                </Form.Control>
                <Form.Control type="file" label='choose file'
                onChange={ uploadFileHandler  }>

                </Form.Control>
            </Form.Group>

            

            <Form.Group controlId="brand" className="my-2">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                type='text'
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock" className="my-2">
                <Form.Label>Count In Stock</Form.Label>
                <Form.Control
                type='number'
                placeholder="Enter brand"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
            </Form.Group>

            
            <Form.Group controlId="catogory" className="my-2">
                <Form.Label>Count In Stock</Form.Label>
                <Form.Control
                type='text'
                placeholder="Enter brand"
                value={category}
                onChange={(e) => setCategory(e.target.value)}></Form.Control>
            </Form.Group>

            
            <Form.Group controlId="description" className="my-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                type='text'
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Button
            type="submit"
            variant="primary"
            className="my-2">
                Update

            </Button>

        

        </Form>
    )}
  </FormContainer>
  </>;
};

export default UserEditScreen;
