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
                setEmailFormat("field-incorrect")
            } else {
                setEmailFormat("field-correct")
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
            <div class="container" >
                <div class="title">Register for HubConf</div>
                    <div class="content">
                        <form action="#">
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required name="fullName" onChange={handleInputChange}></input>
                                </div>
                                
                                <div class="input-box">
                                    <span class="details">Email</span>
                                    <input type="email" placeholder="Enter your email" name="email" required onChange={handleInputChange}></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Are you a student?</span>

                                </div> 
                                <div className="input-box">
                                    <label class="switch">

                                    <input type="checkbox" onClick={()=> {
                                        if(toggled){
                                            setToggled(false)
                                            setInputBoxSchool("input-box-hidden")
                                        } else {
                                            setToggled(true)
                                            setInputBoxSchool("input-box")
                                        }
                                    }}></input>
                                    <span class="slider round"></span>

                                    </label>
                                </div>
                                <div className={inputBoxSchool}>
                                    <span class="details">School</span>
                                    <input type="text" placeholder="Enter your school's name" name="school" onChange={handleInputChange}></input>
                                </div>
                            </div>
                        
                            <div class="button">
                                <input onClick={handleSubmit}></input>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default RegForm;