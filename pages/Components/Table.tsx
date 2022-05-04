interface Props {
  orders: Array<Array<string>>;
}

const Table = ({ orders }: Props) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Count</th>
            <th>Amount</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            return (
              <tr key={i}>
                <td>{order[1]}</td>
                <td>{order[2]}</td>
                <td>{order[0]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
