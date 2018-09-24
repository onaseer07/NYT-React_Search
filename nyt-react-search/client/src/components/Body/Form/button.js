import React from ('react');

const Button = (props)=>{
    <React.fragment>
        <button id={props.id} type={props.type}>{props.btnValue}</button>
    </React.fragment>
}

export default Button;