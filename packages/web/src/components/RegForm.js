import React from "react";
import "../style.css";
import { useState } from "react";

const RegForm = () => {

    const [toggled, setToggled] = useState(false)
    const [inputBoxSchool, setInputBoxSchool] = useState("input-box-hidden")

    return (
        <div>
            <div class="container">
                <div class="title">Register for HubConf</div>
                    <div class="content">
                        <form action="#">
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required></input>
                                </div>
                                
                                <div class="input-box">
                                    <span class="details">Email</span>
                                    <input type="text" placeholder="Enter your email" required></input>
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
                                    <input type="text" placeholder="Enter your school's name"></input>
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