import React from 'react'
import './resources/styles.css'
import './scss/styles.scss'


// Components
import Header from './components/header_footer/Header'
import Featured from './components/featured'
import CaloeNfo from './components/caloeNfo'
import Highlights from './components/highlights'
import LastConcerts from './components/last_concerts'
import Location from './components/location'
import Footer from './components/header_footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" style={{height: '1500px', backgroundColor: '$white'}}>
        <Header/>
        <Featured/>
        <Highlights/>
        <CaloeNfo/>
        <Location/>
        <LastConcerts/>
        <Footer/>
      </div>
    )
  }
}
