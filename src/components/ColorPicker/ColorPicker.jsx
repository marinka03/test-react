import React, { Component } from 'react';
import style from '../ColorPicker/ColorPicker.module.css'

class ColorPicker extends Component {
    // static defaultProps = {
    //     options: []
    // }
    state = {
        activeOptionIdx: 4,
    }

    // makeOptionClassName = (idx) => {
    //     if(this.state.activeOptionIdx === idx) {
    //        return "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    //     }
    //     return "none"
    // }
    setActiveIdx = (idx) => {
        this.setState({activeOptionIdx: idx})
    }

    render(){
        return(
            <div className="ColorPicker">
     <h2 className="ColorPicker__title">Color Picker</h2>

     <div className={style.ColorPicker__option}>
       {this.props.options.map(({ label, color }, idx) => {
            
            return (
                <button 
                key={label}
                className={style.ColorPicker__color}
                onClick={() => this.setActiveIdx(idx)}
                style={{ backgroundColor: color,
                transform: this.state.activeOptionIdx === idx ? "scale(1.15)" : "none"}}>
                
                </button>)
       }

        
      )}
    </div>
  </div>
        )
    }
}


export default ColorPicker;
