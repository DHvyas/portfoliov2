
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dhruv Vyas",
  title: "Hello! I'm Dhruv",
  subTitle: emoji("a design-minded front-end software engineer focused on building beautiful interfaces & experiences."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/DHvyas",
  linkedin: "https://www.linkedin.com/in/thedhruvvyas/",
  gmail: "vyasdhruvh@gmail.com",
  dribbble: "https://dribbble.com/DHvyas",
  phone: "+916355283125"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Background",
  skills: [
    emoji("I'm currently a student at DTU, although it is more like a netflix subscription due to the pandemic."),
    emoji("As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences."),
    emoji("When I'm not in front of a computer screen, I'm probably playing guitar, driving around on a long drive, or crossing off another item on my bucket list.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5",
      type: "Language"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt",
      type: "Language"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
      type: "Language"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      type: "Language"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react",
      type: "Framework"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node",
      type: "Framework"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs",
      type: "Language"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
      type: "Language"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
      type: "Language"
    },
    {
      skillName: "Git/Github",
      fontAwesomeClassname: "fab fa-github",
      type: "Tools"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
      type: "Tools"
    },
    {
      skillName: "Sketch",
      fontAwesomeClassname: "fab fa-sketch",
      type: "Design"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma",
      type: "Design"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Delhi Technological University",
      logo: require("./assets/images/dtulogo.png"),
      subHeader: "Bachelors of Technology in Information & Technology",
      duration: "August 2018 - April 2022",
      desc: "Managing many lead responsibilities at university clubs",
      descBullets: [
        "Did a special course on Finance with honors from Yale University",
        "Did a special course on Cybersecurity with honors"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience



// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "WebDev Intern",
      company: "Jufmy",
      companylogo: require("./assets/images/jufmyrlogo.png"),
      date: "Dec 2018 - Jan 2019",
      desc: "Winter Intern",
      descBullets: [
        "Jufmy is a marketing startup in New Delhi",
        "Worked as their sole web developer and design"
      ]
    },
    {
      role: "Head of Web Development",
      company: "TEDxDTU",
      companylogo: require("./assets/images/tedxlogo.png"),
      date: "Dec 2018 – Present",
      desc: "Developed the website for tedxdtu.co.in for 2018, 2019 & 2020 using ReactJS and VueJS"
    },
    {
      role: "Head of Web Development",
      company: "National Service Scheme",
      companylogo: require("./assets/images/nsslogo.jpg"),
      date: "April 2019 – Present",
      desc: "NSS is a government oragnisation for social service. I develop and maintain the website for their DTU chapter at nssdtu.in"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */



// Some Big Projects You have worked with your company

// Your Achievement Section Include Your Certification Talks and More



// Blogs Section



// Talks Sections


// Podcast Section




//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, workExperiences, twitterDetails};
