import React from 'react';
import{Row, Col, ButtonGroup, Button} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFill } from '@fortawesome/free-solid-svg-icons'

import Countdown from './Countdown'

class HomeChooseThemeSectionCd extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            theme : 'highlight',
        }

        this.handleThemeChange = this.handleThemeChange.bind(this)

        // List of theme buttons
        this.themeButtons = [
            {
                value: "custom",
                text : "custom css"
            },                 
            {
                value: "default",
                text : "default"
            },
            {
                value: "bordered",
                text : "bordered"
            } ,
            {
                value: "highlight",
                text : "highlighted"
            },
                     
        ];        
    }

    handleThemeChange(e){
        e.preventDefault();
        this.setState({theme : e.target.value});
    }      

    render(){

        const themesBtns = this.themeButtons.map((btn) =>
            <Button 
            key = {btn.value}
            onClick={this.handleThemeChange}
            variant="link" 
            value={btn.value}
            className= {btn.value === this.state.theme ? 'active' : ''}
                >{btn.text}
            </Button>
     
        
        );        

        return <>
            <div className="container-fluid axl-home-icon-section">
                <div className="centered-icon">
                    <FontAwesomeIcon icon={faFill} size="lg"   />
                </div>                  
                <Row className="flex-row-reverse">
                    <Col lg={6} className="bg-dark-lighten-10 is-dark axl-section axl-section-50 ">              
                        <div className="container-sm_xx w-100 text-center text-lg-left">  
                            <h3 className="display-4 mb-5 ">Choose your <strong className="text-secondary">theme</strong></h3>
                            <p className="lead-1 " >You can choose between the themes offered by the component, OR just build your own css using component's css classes</p>

                        </div>
                    </Col>                 
                    <Col 
                    lg={6} 
                    className="axl-section axl-section-50 text-right"
                    >
                        <div className="container-sm_xx w-100">  
                            <div className="mb-5">
                                <ButtonGroup >
                                    {themesBtns}
                                </ButtonGroup>
                                
                            </div>
                            <Countdown 
                            expireDate='30 Jan 2020'
                            theme={this.state.theme}
                            isDark={false}
                            />
                        </div>                    
                    </Col>
                    
                </Row>

            </div>
        </>
    }
}

export default HomeChooseThemeSectionCd;