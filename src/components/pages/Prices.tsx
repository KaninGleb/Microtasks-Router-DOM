import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import s from './Prices.module.css';


export const Prices = () => {
  const sneakers = [
    {
      manufacturer: 'Adidas',
      name: 'Adidas Yeezy Boost 350',
      price: 300,
      onSale: false
    },
    {
      manufacturer: 'Adidas',
      name: 'Adidas Ultraboost 21',
      price: 180,
      onSale: true
    },
    {
      manufacturer: 'Puma',
      name: 'Puma Suede Classic',
      price: 65,
      onSale: true
    },
    {
      manufacturer: 'Puma',
      name: 'Puma RS-X',
      price: 110,
      onSale: false
    },
    {
      manufacturer: 'Abibas',
      name: 'Abibas Alphabounce',
      price: 60,
      onSale: true
    }
  ]

  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredSneakers, setFilteredSneakers] = useState(sneakers);

  useEffect(() => {
    if (searchParams.get('onSale')) {
      setFilteredSneakers(sneakers.filter(m => m.onSale))
    } else {
      setFilteredSneakers(sneakers)
    }
  }, [searchParams]);

  function handleOnSale() {
    setSearchParams({onSale: 'true'})
    setFilteredSneakers(sneakers.filter(m => m.onSale))
  }

  function handleReset() {
    setSearchParams({})
    setFilteredSneakers(sneakers)
  }

  return (
    <div className={s.pricesContainer}>
      <button onClick={handleOnSale} className={s.buttonStyle}>On sale</button>
      <button onClick={handleReset} className={s.buttonStyle}>Reset filter</button>

      <table className={s.tableStyle}>
        <thead>
        <tr>
          <th className={s.thStyle}>Manufacturer</th>
          <th className={s.thStyle}>Name</th>
          <th className={s.thStyle}>Price</th>
          <th className={s.thStyle}>On Sale</th>
        </tr>
        </thead>
        <tbody>
        {filteredSneakers.map((sneaker, index) => (
          <tr key={index}>
            <td className={s.tdStyle}>{sneaker.manufacturer}</td>
            <td className={s.tdStyle}>{sneaker.name}</td>
            <td className={s.tdStyle}>${sneaker.price}</td>
            <td className={s.tdStyle}>{sneaker.onSale ? 'Yes' : 'No'}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}