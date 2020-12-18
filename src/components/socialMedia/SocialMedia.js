import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">

        {socialMediaLinks.phone ? 
        (<a href={`tel:${socialMediaLinks.phone}`} className="icon-button" target="_blank">
          <span>PHONE</span>
        </a>)
        :
        null}

      {socialMediaLinks.gmail ?
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button" target="_blank">
        <span>EMAIL</span>
      </a>
      :
      null}

      {socialMediaLinks.github ? 
      (<a href={socialMediaLinks.github} className="icon-button" target="_blank">
        <span>GITHUB</span>
      </a>)
      :
      null}

      {socialMediaLinks.linkedin ?
      <a href={socialMediaLinks.linkedin} className="icon-button" target="_blank">
        <span>LINKEDIN</span>
      </a>
      :
      null}

      {socialMediaLinks.dribbble ? 
      (<a href={socialMediaLinks.dribbble} className="icon-button" target="_blank">
        <span>DRIBBBLE</span>
      </a>)
      :
      null}
      
     
    </div>
  );
}
