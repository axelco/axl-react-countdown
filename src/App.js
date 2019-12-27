import React from 'react';

import './app.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

import HomeTopSectionCd from './homeTopSectionCd'
import HomePassesSectionCd from './homePassesSectionCd'
import HomeChooseThemeSectionCd from './homeChooseThemeSectionCd'

class App extends React.Component{

  render(){

    return <>

      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">Axl CountDown Component</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
     
      <section className="axl-sections" >

        <HomeTopSectionCd />
        <HomePassesSectionCd />
        <HomeChooseThemeSectionCd />


        <article className="py-5 bg-light">
          <div className="container text-center">
            <h3 className="display-3 mb-5 text-primary">
              Want to use it ?
            </h3>
            <p className="lead-1"> check the doc</p>
            <pre>
              {"<p>Test</p>"}

            </pre>

            
          </div>
        </article>

      </section>
      </>

  }


}


export default App;
