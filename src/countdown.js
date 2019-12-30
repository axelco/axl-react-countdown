import React from 'react'
import './countdown.css'
import PropTypes from 'prop-types';

class Countdown extends React.Component {

    constructor(props){
        super(props)
        this.expDate = new Date(this.props.expireDate).getTime(); 
        this.state = {
            isDue: false,
        }
    }


    /*
        Calculate the distance between today's date and expireDate props
        return a number in milliseconds
    */
    calculateDistance(){

        let today = new Date().getTime(); 
        var d = this.expDate - today;
        return d;
    }

    checkIfDue(){
        var d = this.calculateDistance();
        this.setState({isDue: d < 1000 ? true : false});     

    }

    intervalHandler(){
        this.checkIfDue();
        this.intervalId = setInterval(()=>{
            if (this.state.isDue) {
                clearInterval(this.intervalId);
              } else {
                this.checkIfDue(); 
              }       
        }, 1000);
        
    }

    countDownBuilder(){

        var t = this.calculateDistance();
        var days = t > 0 ? Math.floor( t/(1000*60*60*24) ) : 0;
        var hours = t > 0 ?  Math.floor( (t/(1000*60*60)) % 24 ) : 0;
        var minutes = t > 0 ?  Math.floor( (t/1000/60) % 60 ) : 0;
        var seconds = t > 0 ?  Math.floor( (t/1000) % 60 ) : 0;  

        // We build an array of objects containing all values and labels
        // This will be use in the render method with a map
        let remain = [
            {
                id : 0,
                type : 'days',
                label : "days",
                value : days,
            },                  
            {
                id : 1,
                type : 'hours',
                label : "hours",
                value : hours, 
            },           
            {
                id : 2,
                type : 'minutes',
                label : "minutes",
                value : minutes, 
            }       
        ];

        // Is you set viewSeconds prop on TRUE, 
        // the seconds object is added to remain array
        if(this.props.viewSeconds){
            let secsWrapper = {
                id : 3,
                type : 'seconds',
                label : "seconds",
                value : seconds 
            }
            remain.push(secsWrapper)
        }
        return remain;


    }
    

    componentWillMount() {
        this.checkIfDue(); // We change state isDue if data communicated is due
    }

    componentDidMount() {  
        this.intervalHandler()
     }
    

    
     componentDidUpdate(){

        if(this.expDate != new Date(this.props.expireDate).getTime()){

            this.expDate = new Date(this.props.expireDate).getTime();  
            this.intervalHandler();
        }

        if(this.props.theme != this.props.theme){
            this.props.theme = this.props.theme;
        }    
        
        if(this.props.children != this.props.children){
            this.props.children = this.props.children;
        }             

     }

    render(){


        // If isDue state is TRUE, AND component has children
        // we display the children of the component
        if(this.state.isDue && this.props.children){

            return this.props.children

        }
        // ELSE
        //  We display the countDown item
        else{

            const countDonwItems = this.countDownBuilder().map((item) => 
            <div 
                key={item.id}
                className={'rcd-item rcd-item-'+item.label}  
            >
                <div className={'rcd-card rcd-card-'+item.label} >
                    <strong className="rcd-value">{item.value}</strong>
                    <small className="rcd-label">{item.label}</small>
                </div>
                
    
            </div>
         );    
        
        const isDarkClass = this.props.isDark ? 'is-dark' : ''
        const templateClass = this.props.theme !== 'default' ? 'rcd-theme-'+this.props.theme : ''
        // If template props not "default", we add extra class that handles CD styling
        const gridClasses = 'rcd-grid '+templateClass+' '+isDarkClass
    
        return <div 
                className={gridClasses}
            >
                {countDonwItems}
            </div>
 
        }
    }

}

export default Countdown;

Countdown.propTypes = {
    expireDate : PropTypes.string.isRequired,

}

Countdown.defaultProps = {
    viewSeconds: true,
    theme : 'default',
    isDark : false,
  }

