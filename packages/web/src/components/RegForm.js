import React from "react";


import "../style.css";

const RegForm = () => {
    return (
        <div>
            <h1 className="heading">Registration</h1>
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