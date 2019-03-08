import React from 'react'
import './scss/styles.scss'
import { Element } from 'react-scroll'


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
        <Element name='Accueil'>
          <Header/>
        </Element>

        <Element name='Accueil'>
          <Featured/>
        </Element>

        <Element name='bio'>
          <Highlights/>
        </Element>
       
        <Element name='Actuellement'>
          <CaloeNfo/>
        </Element>

        <Element name='Adresse'>
          <Location/>
        </Element>

        <Element name='Précédemment'>
          <LastConcerts/>
        </Element>
        
        <Footer/>
      </div>
    )
  }
}
