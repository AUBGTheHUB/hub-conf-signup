import React from "react";
import "../style.css";
import { useState } from "react";
import axios from "axios";
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

let url = process.env.NODE_ENV === "production"? "https://hubconf.thehub-aubg.com/api/signup" : "http://127.0.0.1:8080/api/signup"

const RegForm = () => {

    const ShowAlert = () => {
        
        // this could be heavily optimized
        if (fullNameFormat === "field-correct" && emailFormat === "field-correct" && success === 200){
            return (
                <Alert status='success' className="success-alert">
                <AlertIcon />
                You have successfully registered!
                </Alert> 
            )
        }

        else if (fullNameFormat === "field-correct" && emailFormat === "field-correct" && success === 500) {
             return (
                <Alert status='warning' className="success-alert">
                <AlertIcon />
                Something went wrong! Please, try again.
                </Alert> 
            )   
        }


        else if (fullNameFormat === "field-incorrect" && emailFormat === "field-incorrect"){
            return (
                <div className={alertShown}>
               <Alert status='error'>
                <AlertIcon />
                <AlertTitle>Incorrect format!</AlertTitle>
                <AlertDescription>Name and Email format is incorrect</AlertDescription>
                </Alert> 
                </div>
            )
        }
        else if(fullNameFormat === "field-incorrect"){
            return (
            <div className={alertShown}>
            <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Missing field!</AlertTitle>
            <AlertDescription>Can't seem to find your name</AlertDescription>
            </Alert>
            </div>
        )
        }
        else {
            return (
            <div className={alertShown}>
            <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Incorrect format!</AlertTitle>
            <AlertDescription>Email is not formatted correctly!</AlertDescription>
            </Alert>
            </div>)
        }
    }

    const [success, setSuccess] = useState(0)
    const [alertShown, setAlertShown] = useState("alert-hidden")
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

        setSuccess(0)

        if (fullNameFormat === "field-correct" && emailFormat === "field-correct"){
            setAlertShown("alert-hidden")
        }

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
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(string)
    }

    // if (fullNameFormat !== "field-correct" || emailFormat !== "field-correct"){
    //         setAlertShown("alert")
    // }

    const handleSubmit = (event) => {

        if (fullNameFormat !== "field-correct" || emailFormat !== "field-correct"){
            setAlertShown("alert")
        }
        else {
            setAlertShown("alert-hidden")
         axios
          .post(url, formState)
          .then((res) => {
            setSuccess(res.status)
            console.log(res)
          })
          .catch((err) => {
              setSuccess(500)
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
                            {ShowAlert()}
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
                                <button className="button" type="button" onClick={() => {
                                handleSubmit()
                                }} >Register</button>
                        
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default RegForm;
