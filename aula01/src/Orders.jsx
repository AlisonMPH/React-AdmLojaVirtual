import { useEffect, useState } from 'react';
import NoOrders from './NoOrders';
import TableOrders from './TableOrders';
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const ordersApi = "http://127.0.0.1:8000/admin/obter_pedidos_por_estado/pendente";
  
  const loadOrders = () => {
    axios.get(ordersApi).then((response) => { setOrders(response.data);

    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    orders.length > 0 ? <TableOrders items={orders} /> : <NoOrders />
  );
}

export default Orders;
