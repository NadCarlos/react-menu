import { Component } from "react"

const classData = {
    name: 'Person',
    attributes: ['+name:str','+phoneNumber:str','+emailAddress:str','+emailAddress:str','+emailAddress:str','+emailAddress:str','+emailAddress:str'],
    methods:['+purcharseParkinPass()', '+purcharseSnacks()', '+purcharsacks()', '+Snacks()', '+Snacks()', '+Snacks()', '+Snacks()', '+Snacks()'],
    borderColor:'black',
    headColor:'orange',
    textColor:'white'
}

const DrawClass = () => {
    const { name, attributes, methods, borderColor, headColor, textColor } = classData;
    const classHeight = 90 + (attributes.length + methods.length) * 20;
    let middleHeight = 0
  
    return (
      <svg 
        className="svg"
        width="1920" 
        height={classHeight}
        version="1.1"
        baseProfile="full"
        xmlns="http://www.w3.org/2000/svg">

        <rect width="400" height={classHeight} fill="#555" stroke={borderColor} strokeWidth="4" />
        <rect x="0" y="0" width="400" height="30" fill={headColor} />
        <text x="10" y="20" fill={textColor} fontSize={22}>{name}</text>
  
        {attributes.map((attribute, index) => (
          <text key={index} x="10" y={50 + index * 20} fill={textColor} fontSize={22}>{attribute}</text>
        ))}
        
        <line x="0" y="0" width="400" height="30"/>

        {attributes.map((attributes, index) => (middleHeight = Math.max(index)))}
        {attributes.map((attributes) => (
          <line x1="0" y1={60 + middleHeight * 20} x2="400" y2={60 + middleHeight * 20} stroke={borderColor} strokeWidth="4" />
          ))}
      
        {methods.map((method, index) => (
          <text key={index} x="10" y={80 + (attributes.length + index) * 20} fill={textColor} fontSize={22}>{method}</text>
        ))}
      </svg>
    );
};

export default DrawClass