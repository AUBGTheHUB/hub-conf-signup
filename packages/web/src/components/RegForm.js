import React from "react";
import "../style.css";
import { useState } from "react";
import axios from "axios";

const RegForm = () => {

    const [toggled, setToggled] = useState(false)
    const [inputBoxSchool, setInputBoxSchool] = useState("input-box-hidden")
    const [fullNameFormat, setFullNameFormat] = useState("field-incorrect")
    const [emailFormat, setEmailFormat] = useState("field-incorrect")

    const [formState, setFormState] =  useState({
        fullName: "", 
        email: "",
        school: ""
    })

    function checkFormat(name, value) {
        if(name === "email"){
            if(checkEmail(value)){
                setEmailFormat("field-correct")
            } else {
                setEmailFormat("field-incorrect")
            }
        }
        else if(name === "fullName"){
            if(checkEmptyString(value)){
                setFullNameFormat("field-incorrect")
            } else {
                setFullNameFormat("field-correct")
            }
        }
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        checkFormat(name, value);

        setFormState({
            ...formState,
            [name]: value
        });
        
        console.log(formState);
    }

    function checkEmptyString(string){
        return /^\s*$/.test(string);
    }

    function checkEmail(string){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string)
    }

    const handleSubmit = (event) => {

        if (fullNameFormat !== "field-correct" && emailFormat !== "field-correct"){
            window.alert("NE E PRAILNO BRAT")
        }
        else {
         axios
          .post('http://10.252.27.2:8000/api/signup', formState)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
          });
        }
    
    }

    return (
        <div>
            <div className="container" >
                <div className="title">Register for HubConf</div>
                    <div className="content">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input className={fullNameFormat} type="text" placeholder="Enter your name" required name="fullName" onChange={handleInputChange}></input>
                                </div>
                                
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input className={emailFormat} type="email" placeholder="Enter your email" name="email" required onChange={handleInputChange}></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Are you a student?</span>

                                </div> 
                                <div className="input-box">
                                    <label className="switch">

                                    <input type="checkbox" onClick={()=> {
                                        if(toggled){
                                            setToggled(false)
                                            setInputBoxSchool("input-box-hidden")
                                        } else {
                                            setToggled(true)
                                            setInputBoxSchool("input-box")
                                        }
                                    }}></input>
                                    <span className="slider round"></span>

                                    </label>
                                </div>
                                <div className={inputBoxSchool}>
                                    <span className="details">School</span>
                                    <input type="text" placeholder="Enter your school's name" name="school" onChange={handleInputChange}></input>
                                </div>
                            </div>
                        
                            <div className="button" onClick={handleSubmit}><h3>Register</h3></div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default RegForm;
