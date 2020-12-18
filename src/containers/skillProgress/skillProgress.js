import React from "react";
import "./Progress.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { Fade } from "react-reveal";

export default function StackProgress() {
    if(true){
        return (
            <Fade bottom duration={1000} distance="20px">
            <div className="skills-container">
                
                <div className="skills-bar">
                    <h1 className="skills-heading">Skills</h1>
                    <SoftwareSkill/>
                </div>

                <div className="skills-image">
                    <img alt="Skills" src={require("../../assets/images/skill.svg")} />
                </div>

            </div>
            </Fade>
        );
    }
    return null;
}
