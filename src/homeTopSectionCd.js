import React from 'react';
import{ButtonGroup, Button, Alert} from 'react-bootstrap'
import Countdown from './Countdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHourglassStart } from '@fortawesome/free-solid-svg-icons'

class HomeTopSectionCd extends React.Component {

    constructor(props){
        super(props);

        this.state= {
          expireDate : '',
          btnDateState : '',
        }
        //Biding events
        this.handleDatesCalculation = this.handleDatesCalculation.bind(this)


        // List of dates buttons
        this.datesButtons = [
            {
                value : "30d",
                label : "30 days",
            },
            {
                value : "7d",
                label : "7 days",
            }, 
            {
                value : "5m",
                label : "5 min",
            },  
            {
                value : "30s",
                label : "30 secs",
            },  
            {
                value : "10s",
                label : "10 secs",
            },                                                   
        ]

    }
    
    handleThemeChange(e){
    e.preventDefault();
    this.setState({theme : e.target.value});
    }  

    handleDatesCalculation(e){
        e.preventDefault();
        let today = Date.now()   
        let newDate;
        let value = e.target.value;

        switch(value){
            case '30d' :
                newDate = today +(1000 * 60 * 60 * 24 * 30); 
                break;
            case '7d'  :
                newDate = today + (1000 * 60 * 60 * 24 * 7); 
                break;
            case '5m'  :
                newDate = today + (1000 * 60 * 5); 
                break;
            case '30s'  :
                newDate = today + (1000 * 30); 
                break;            
            case '10s'  :
                newDate = today + (1000 * 10); 
                break;                             
            default :
            newDate = today +(1000 * 60 * 60 * 24 * 30); 
        }

        this.setState({
            expireDate : new Date(newDate).toString(),
            btnDateState : value
        });
    }  

    componentWillMount(){
        let today = Date.now()   
        let newDate;
        newDate = today +(1000 * 60 * 60 * 24 * 90);     
        this.setState({expireDate : new Date(newDate).toString()})
    }

    render(){
        
        
        const datesBtns = this.datesButtons.map((btn) =>
            <Button 
            key = {btn.value}
            onClick={this.handleDatesCalculation}
            variant="outline-light" 
            value={btn.value}
            className= {btn.value === this.state.btnDateState ? ' active' : ''}
                >{btn.label}
            </Button>
     
        
        );       

        return <>
        
            <article className="axl-section axl-section-100 bg-dark-lighten-10 axl-home-icon-section" >
                <div className="centered-icon">
                  <FontAwesomeIcon icon={faHourglassStart} size="lg"   />
                </div>                  
                <div className="container-sm_x text-center">            

                    <h1 className="mb-5 display-3 text-white">Axl <strong className="text-secondary">React CountDown</strong> Component</h1>
                    <p className="text-white lead-1 mb-5">A simple and easy to use react component<br/>
                     to trigger a countdown on your web app.</p>
                    
                    <div className="py-5">
                        <ButtonGroup 
                            aria-label="Buttons group to choose theme"
                            className=""
                        >
                            {datesBtns}                                                             
                        </ButtonGroup>                            
                    </div>
                    <Countdown 
                        expireDate={this.state.expireDate}
                        viewSeconds={true}
                        theme='custom'
                        isDark={true}
                    >
                        <Alert variant='success' className="shadow" >
                            <div className="d-flex align-items-center">
                                <FontAwesomeIcon 
                                icon={faCheck} 
                                size="2x"
                                className="alert-icon"
                                />
                                <div className="ml-4">
                                    This is a custom text apperaing when time is up. Just add anything you want inside component.
                                </div>
                            </div>
                        </Alert>
                    </Countdown>

                    
                </div>
            </article>

        </>
    }
}

export default HomeTopSectionCd;