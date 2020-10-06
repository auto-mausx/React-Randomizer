import React, { Component } from 'react';
import ReactTurntable from 'react-turntable';
// import "react-turntable/assets/index.css";

const WheelSpin = () => {
  const styles = {
    justifyContent:"center",
    alignContent:"center",
    display:"flex"
}
const prizes = [
    'Durex', 'MI', 'Meizu',
    'iphone 6s', 'iphone 6s plus', 'Chafingdish',
    'WeiLong','masturbation cup'
]

const options = {
    prizes,
    width: 500,
    height: 500,
    hiddenButton: false,
    primaryColor: "#83AF9B",
    secondaryColor: "#C8C8A9",
    fontStyle:{
        color:"#fff",
        size:"14px",
        fontVertical:true,
        fontWeight:"bold",
        fontFamily:"Microsoft YaHei"
    },
    speed : 1000,
    duration:5000,
    clickText:"Click",
    onStart(){
      //If you want before the rotate do some...
      console.log('start...');
      //If you want stop rotate you can return false
      return true
    },
    onComplete(prize){
      console.log('prize:',prize)
    }
}
  
  return (
    <div style={styles}>
      <ReactTurntable {...options}/>
    </div>
  )
}

export default WheelSpin;

