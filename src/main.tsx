import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import App from './App.tsx'
import './index.css'

const client = new ApolloClient({
  //required
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
