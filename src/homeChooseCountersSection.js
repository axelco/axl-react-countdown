

import React from 'react';
import{ButtonGroup, Button, Row, Col, Alert} from 'react-bootstrap'
import Countdown from './Countdown'


class HomeChooseCountersSection extends React.Component {

    constructor(props){
        super(props);
    }


    render(){

        return <>
            <div className="container-fluid ">
            <Row>
                <Col 
                lg={6} 
                className="bg-white axl-section axl-section-50 text-right"
                >

                </Col>
                <Col lg={6} className="bg-dark text-left axl-section axl-section-50 ">              

                    <div className="p-5 w-100">  
                        <h3 className="display-4 mb-5 text-white">Choose which indicator to show</h3>
                         <p className="lead-1 text-white " >You can display or hide seconds, minutes, hours or days if you need to</p>

                    </div>
                </Col>                 
            </Row>

            </div>
        </>
    }
}

export default HomeChooseCountersSection;