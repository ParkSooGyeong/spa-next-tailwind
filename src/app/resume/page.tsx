import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  description: string[];
  from: string;
  to: string;
}

interface SkillItem {
  name: string;
  level: string;
}

export default function Resume() {
  const experienceItems: ExperienceItem[] = [
    {
      role: "Frontend & Backend Develop",
      company: "개발팀/CTO, 유비스랩",
      description: [
        "Node.js(Express), Nest.js(typescript), React.js(Typescript), Ruby on Rails",
        "MySQL, PostgreSQL",
        "Docker, GitHub Actions",
        "Firebase, Apexchart",
        "Recoil, Mobx",
        "Slack, Notion, Postman, Git, XD, Figma"
      ],
      from: "2019",
      to: "2024"
    },
    {
      role: "Frontend & Backend Develop",
      company: "개발팀/팀원, 텐지",
      description: [
        "Vue.js, Python, Apache Cordova",
        "PostgreSQL, MongoDB",
        "RabbitMQ, Redis",
        "Firebase, D3.js",
        "VueX",
        "Slack, Google Drive, Git, Jenkins, Zeplin"
      ],
      from: "2019",
      to: "2019"
    }
  ];

  const educationItems: ExperienceItem[] = [
    {
      role: "Frontend & Backend Develop",
      company: "개발팀/팀원, 유저해빗",
      description: [
        "Vue.js, Ruby on Rails, CoffeeScript, SCSS",
        "PostgreSQL, Elasticsearch",
        "Confluence, Slack, Google Drive, Git, JIRA, Bitbucket"
      ],
      from: "2018",
      to: "2019"
    },
    {
      role: "Frontend & Backend Develop",
      company: "개발팀/팀원, 엘아이케이",
      description: [
        "Python(Django), javascript, jQuery",
        "MySQL",
        "SVG, Canvas, WebSocket, Socket.io, D3.js"
      ],
      from: "2017",
      to: "2018"
    }
  ];

  const skillsLeft: SkillItem[] = [
    { name: "React.js", level: "87%" },
    { name: "Next.js", level: "50%" },
    { name: "Vue.js", level: "50%" },
    { name: "Typescript", level: "65%" },
    { name: "Jypescript", level: "75%" },
    { name: "Recoil", level: "80%" },
    { name: "Mobx", level: "65%" },
    { name: "VueX", level: "65%" }
    
  ];

  const skillsRight: SkillItem[] = [
    { name: "Node.js (Express)", level: "87%" },
    { name: "Node.js (Nest)", level: "35%" },
    { name: "Python (Django)", level: "60%" },
    { name: "Ruby on Rails", level: "40%" },
    { name: "MySQL, PostgreSQL", level: "70%" },
    { name: "TailWind", level: "40%" },
    { name: "React Native", level: "58%" },
    { name: "Html", level: "90%" }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <section className="container mx-auto p-8">
        <div className="page-heading">
          <span className="icon text-4xl"><i className="lnr lnr-license"></i></span>
          <h2>My Resume.</h2>
        </div>

        <div className="container mx-auto text-left pb-1">
          <div className="subheading text-center mb-12">
            <h3>Experience</h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <ul className="relative pl-8">
              {experienceItems.map((item, index) => (
                <li key={index} className="relative mb-10">
                  <span className="line-left"></span>
                  <div className="ml-8 w-[80%]">
                    <h4 className="font-bold text-xl">{item.role}</h4>
                    <h5 className="text-blue-400">{item.company}</h5>
                    {item.description.map((desc, idx) => (
                      <p key={idx} className="text-gray-300 mt-1">{desc}</p>
                    ))}
                  </div>
                  <span className="year">
                    <span className="to">{item.to}</span>
                    <span className="from">{item.from}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <ul className="relative pl-8">
              {educationItems.map((item, index) => (
                <li key={index} className="relative mb-10">
                  <span className="line-left"></span>
                  <div className="ml-8 w-[80%]">
                    <h4 className="font-bold text-xl">{item.role}</h4>
                    <h5 className="text-blue-400">{item.company}</h5>
                    {item.description.map((desc, idx) => (
                      <p key={idx} className="text-gray-300 mt-1">{desc}</p>
                    ))}
                  </div>
                  <span className="year">
                    <span className="to">{item.to}</span>
                    <span className="from">{item.from}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16">
          <div className="container mx-auto text-left pb-1">
            <div className="subheading text-center mb-12">
              <h3>Skills</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                {skillsLeft.map((skill, index) => (
                  <div key={index}>
                    <span>{skill.name}</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: skill.level }}>
                        <div className="progress-value">{skill.level}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="space-y-4">
                {skillsRight.map((skill, index) => (
                  <div key={index}>
                    <span>{skill.name}</span>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: skill.level }}>
                        <div className="progress-value">{skill.level}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
