import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import BookForm from '../Redux/bookform';
import BookList from '../Redux/books';
const Redux = () => {
  return (
    <>
     <Provider store={store}>
      <div>
        <h1>Book Adding Using Redux</h1>
        <BookForm />
        <BookList />
      </div>
    </Provider>
    </>
  )
}

export default Redux