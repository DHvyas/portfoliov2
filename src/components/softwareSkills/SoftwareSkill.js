import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <div>
          <ul className="dev-icons">
            <div className="s1">
            <li className="software-skill-inline">
              <h3>Language</h3>
            </li>
            </div>
            <div className="s2">
            {skillsSection.softwareSkills.map(skills => {
              if(skills.type==="Language"){
                return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
              }
            })}
            </div>
          </ul>
        </div>
        <div>
          <ul className="dev-icons">
            <div className="s1">
            <li className="software-skill-inline">
              <h3>Framework</h3>
            </li>
            </div>
            <div className="s2">
            {skillsSection.softwareSkills.map(skills => {
              if(skills.type==="Framework"){
                return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
              }
            })}
            </div>
          </ul>
        </div>
        <div>
          <ul className="dev-icons">
            <div className="s1">
            <li className="software-skill-inline">
              <h3>Tools</h3>
            </li>
            </div>
            <div className="s2">
            {skillsSection.softwareSkills.map(skills => {
              if(skills.type==="Tools"){
                return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
              }
            })}
            </div>
          </ul>
        </div>
        <div>
          <ul className="dev-icons">
            <div className="s1">
            <li className="software-skill-inline">
              <h3>Design</h3>
            </li>
            </div>
            <div className="s2">
            {skillsSection.softwareSkills.map(skills => {
              if(skills.type==="Design"){
                return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
              }
            })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
