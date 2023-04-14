import React, { useState } from "react";
import styles from "./Form.module.css" 
import { validate } from "../Validate/Validate";

export default function Form(props){

   
    const [userData, setUserData] = useState({
        userName:'',
        password:'',
    });
    
    const [errors, setErrors] = useState({
        userName:'',
        password:'',
    });
     
    const handleChange = (e)=>{
        const{value, name} = e.target;
        
        setUserData({...userData, [name]:value});
        setErrors(validate({...userData, [name]:value}))
    
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userData)
        props.login(userData)
    }
    
    return(
    <form className={styles.container} onSubmit={handleSubmit}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP2D2EnFAL_enyXkcdxea2mcjpNMvmgUg4LA&usqp=CAU" alt="" />
        
        <div>
            {/*<label htmlFor="">Usuario</label>*/}
            <input className={errors.userName && styles.warning} placeholder="USUARIO" type="text" name="userName" value={userData.userName} onChange={handleChange}/>
            {errors.userName ? <div className={styles.danger}>{errors.userName}</div> : null}
        </div>
        <div>
            {/* <label htmlFor="">Contraseña</label> */}
            <input className={errors.userName && styles.warning} placeholder="CONTRASEÑA" type="password" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password ? <p className={styles.danger}>{errors.password}</p> : null}
        </div>
        
        <button type="submit" >LOGIN</button>
    
    </form>
    )
}