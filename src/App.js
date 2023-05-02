import './App.css';
import { useMemo, useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const HandleSubmit = () => {
    setProducts([...products, {
      name,
      price: +number //praseint number
    }]);
  }
  //before use useMemohook
  // const total = products.reduce((result, item) => {
  //   console.log('re');
  //   return result + item.price
  // }, 0)

  //afer use useMemohook

  const total = useMemo(() => {
     return products.reduce((result, item) => {
        console.log('re');
        return result + item.price
      }, 0)
  }, [products]);

  return (
    <div className="App">
      <div>
        <input value={name}
          placeholder='name'
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input value={number || ''}
          placeholder='number'
          onChange={e => setNumber(e.target.value)}
        />
      </div>
      <button onClick={HandleSubmit}>submit</button>
      <div>
        total : {total}
      </div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>

  );
}

export default App;
