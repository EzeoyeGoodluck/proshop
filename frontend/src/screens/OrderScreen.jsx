import { Link, useParams} from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice';

const OrderScreen = () => {
    const { id } = useParams();

    const { data, isLoading, iserror, refetch } = useGetOrderDetailsQuery(id);
    console.log(data );


  return (
    <div>
        Order screen
      
    </div>
  )
}

export default OrderScreen
