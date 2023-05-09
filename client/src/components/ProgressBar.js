import React, { useEffect, useState, useContext } from "react";
// import './progressBar.css'; //import my custom css;
// //import ProgressBar from 'react-bootstrap/ProgressBar';
// import { ProgressBar } from 'react-bootstrap';
// const deposit = () =>{
//     return(
//         <div>
//             Total Deposit
//             <ProgressBar now={'total deposit/Hardcap'} label={`30`} />
//         </div>
//     );
// };

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      transition: 'width 1s ease-in-out',
      borderRadius: 'inherit',
      textAlign: 'right',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold',
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
export default ProgressBar;
