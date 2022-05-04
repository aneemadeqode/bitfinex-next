import { useEffect, useState } from "react";
import Table from "./Components/Table";
import Header from "./Components/Header";
import axios from "axios";

export default function Home() {
  const [orders, setOrders] = useState([]);
  const [negativeOrders, setNegativeOrders] = useState([]);

  const loadData = async () => {
    const result = await axios.get(
      "https://api-pub.bitfinex.com/v2/book/tBTCUSD/P0"
    );
    const data = result?.data;
    setOrders(data.slice(0, 24));
    setNegativeOrders(data.slice(24));
  };

  useEffect(() => {
    loadData();
    setInterval(loadData, 100);
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="order-table">
          <Table orders={orders} />
          <Table orders={negativeOrders} />
        </div>
      </div>
    </>
  );
}
