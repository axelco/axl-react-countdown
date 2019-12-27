import React from 'react';
import{ButtonGroup, Button, Row, Col, Alert} from 'react-bootstrap'
import Countdown from './Countdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch, faHourglassEnd } from '@fortawesome/free-solid-svg-icons'

class HomePassesSectionCd extends React.Component {

    constructor(props){
        super(props);
        this.state= {
          passedType : 'default',
          expDate : '01 Jan 1970',
        }

        this.handleBehavClick = this.handleBehavClick.bind(this)

        this.filterBtns = [
            {
                value : 'default',
                label : 'default behaviour',
            },
            {
                value : 'custom',
                label : 'Children props behaviour',
            },            
        ]

    }

    handleBehavClick(e){
        this.setState({passedType : e.target.value})
    }

    cdGenerator(){
        let today = new Date().getTime();
        let startCd = today + (1000*5);
        if(this.state.passedType == 'custom'){
            return <Countdown 
            expireDate={startCd}
            >
                <Alert variant='warning' >
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon 
                        icon={faStopwatch} 
                        size="2x"
                        className="alert-icon"
                        />
                        <div className="ml-4">
                            This is a custom text apperaing when time is up. Just add anything you want inside component.
                        </div>
                    </div>
                </Alert>
                
            </Countdown>            
        }
        else{
            return <Countdown 
            expireDate={startCd}

            />
        }
    }


    render(){

        const filterBtns = this.filterBtns.map((btn) =>
            <Button 
            key = {btn.value}
            onClick={this.handleBehavClick}
            variant="link" 
            value={btn.value}
            className= {btn.value === this.state.passedType ? 'active' : ''}
                >{btn.label}
            </Button>
        );

        return <>
            <div className="container-fluid axl-home-icon-section">
                <div className="centered-icon">
                  <FontAwesomeIcon icon={faHourglassEnd} size="lg"   />
                </div>                
                <Row>
                    <Col 
                    lg={6} 
                    className="bg-dark is-dark axl-section axl-section-50 "
                    >

                    <div className="container-sm_xx w-100 text-center text-lg-right">  
                        <h3 className="display-4 mb-5 ">And <strong className="text-secondary">When time is passed ?</strong></h3>
                        <p className="lead-1 " >By default, the countDown will display with all values set to 0 </p>
                        <p className="lead-2 ">
                        But, if you want to have specific content when time is over, just add your content inside the component itself
                        </p>
                    
                    </div>
                    </Col>
                    <Col lg={6} className="axl-section axl-section-50 ">              
                    <div className="container-sm_xx w-100 ">
                        <div className="d-flex mb-5">
                            <ButtonGroup >
                            {filterBtns}  

                            </ButtonGroup>
                                                
                        </div>
                        {this.cdGenerator()}
                        </div>
                    </Col>                 
                </Row>

            </div>
        </>
    }
}

export default HomePassesSectionCd;