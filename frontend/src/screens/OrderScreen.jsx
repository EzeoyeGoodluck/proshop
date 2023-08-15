import { Link, useParams} from 'react-router-dom';
import { Row, Col, ListGrup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice';

const OrderScreen = () => {
    const { id: orderId } = useParams();

    const { data:order, isLoading, iserror, refetch } = useGetOrderDetailsQuery(orderId);
    console.log(order + 'order');
    // console.log(orderId)


  return (
    <div>
        Order screen
      
    </div>
  )
}

export default OrderScreen
