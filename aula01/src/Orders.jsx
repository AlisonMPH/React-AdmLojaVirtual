import { useEffect, useState } from 'react';
import NoOrders from './NoOrders';
import TableOrders from './TableOrders';
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderState, setOrderState] = useState("pendente");
  
  const loadOrders = (state) => {
    const ordersApi = `http://127.0.0.1:8000/admin/obter_pedidos_por_estado/${state}`;
    axios.get(ordersApi).then((response) => { setOrders(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    loadOrders(orderState);
  }, [orderState]);

  return (
    <>
      <div className="form-floating my-3">
        <select id="orderState" className="form-control" onChange={(event) => setOrderState(event.target.value)}>
          <option value="carrinho">Carrinho</option>
          <option value="pendente">Pendente</option>
          <option value="pago">Pago</option>
          <option value="faturado">Faturado</option>
          <option value="separado">Separado</option>
          <option value="enviado">Enviado</option>
          <option value="entregue">Entregue</option>
          <option value="cancelado">Cancelado</option>
        </select>
        <label className="form-label" htmlFor="orderState">Status dos Pedidos</label>
      </div>
      {orders.length > 0 ? 
      <TableOrders  items={orders} /> : 
      <NoOrders     state={orderState} />}
    </>
  );
}

export default Orders;
