import React from "react";
import "../style.css";
import { useState } from "react";

const RegForm = () => {

    const [toggled, setToggled] = useState(false)
    const [inputBoxSchool, setInputBoxSchool] = useState("input-box-hidden")

    const [formState, setFormState] =  useState({
        fullName: "", 
        email: "",
        school: ""
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setFormState({
            ...formState,
            [name]: value
        });
        
        console.log(formState);
    }

    const handleSubmit = () => {
        // send request to api
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
                                    <input type="text" placeholder="Enter your email" name="email" required onChange={handleInputChange}></input>
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
                                <input type="submit" value="Register"></input>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default RegForm;