import React from 'react'
import './resources/styles.css'
import './scss/styles.scss'


// Components
import Header from './components/header_footer/Header';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', backgroundColor: 'green'}}>
        <Header/>
      </div>
    )
  }
}
