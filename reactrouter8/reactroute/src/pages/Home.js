import {Link} from 'react-router-dom'
import {UseFetch} from '../hooksuseFetch'

import './Home.css'

const Home = () => {
  // 3 - Carregamentos de dados
  const url = 'http://localhost:3000/products'
  const {data: items, loading, error} = UseFetch(url)
  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
      {  items && items.map(item => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>R$: {item.price}</p>
          {/* 4 -rota dinamica */}
          <link to= {`/products/${item.id}`}>Detalhes</link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Home
