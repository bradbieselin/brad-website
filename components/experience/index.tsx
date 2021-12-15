import { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  return (
    <div className="Experience" id="experience">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
          date="Present"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>{``}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
          date="June 2021-Present"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            June 2021-Present: Witbe Customer Success Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            • Manage 7+ customer projects (including Verizon, Peacock, and A&E)
            and provide the highest level of customer satisfaction, success with
            products, and troubleshooting for each customer<br></br> •
            Coordinate with the Sales Department for opportunities of future
            customer purchases<br></br> • Manage a team of scripters to develop
            automated scenarios using Witbe robots
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2021-June 2021"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Feb 2021-June 2021: Apple Software Quality Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Briarwood, NY</h4>
          <p>
            • Collaborate with development engineers for code review<br></br> •
            Design automated test cases in Java using Jackson, Jenkins, TestNG,
            and Gradle<br></br> • Engineer Full-Stack projects using React.js
            and Spring Boot<br></br> • Collect data and produce Confluence
            reports for weekly team meetings<br></br> • Gained fluency in the
            basics of Amazon Web Services and became an AWS Certified Cloud
            Practioner
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2019-February 2021"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Oct 2019-Feb 2021: Apple Technical Expert
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Garden City, NY
          </h4>
          <p>
            • Responsible for facilitation of service technician training
            <br></br> • Provide and execute technical support solutions for
            customers by troubleshooting, diagnosing, and repairing iOS devices
            <br></br> • Mentor colleagues to encourage growth and development
            amongst our team<br></br> • Support our team with solutions when
            team members are facing various challenges<br></br> • Complete
            physical repairs on all models of iOS mobile devices that are still
            supported by Apple
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2019-October 2019"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Aug 2019-Oct 2019: Apple Technical Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Garden City, NY
          </h4>
          <p>
            • Promote a healthy relationship between the customers and the
            business<br></br>• Diagnose and troubleshoot hardware and software
            while maintaining customer focus
            <br></br>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2018-August 2018"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            July 2019-Aug 2019: Archbishop Molloy High School - IT Internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Briarwood, NY</h4>
          <p>
            • Provided technological support to staff, parents, and students,
            including account, software, and hardware troubleshooting<br></br> •
            Managed assignment timelines by utilizing a Help Desk software to
            track assignments and see updates on their progress<br></br> •
            Gained fluency in the basics of system networking and hands-on
            troubleshooting
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015-2019"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            2015-2019 - B.S. Computer Science - SUNY Albany
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Albany, NY</h4>
          <p>
            • Advanced courses taken: Systems Programming, Algorithms & Data
            Structures, Automata & Formal Languages, Operating Systems, Ordinary
            Differential Equations, Physics 1&2, Computer Organization, Digital
            Logic Design, Calculus 1&2, Microprocessor Applications, Linear
            Algebra, Societal and Ethical Implications of Computing, Programming
            Hardware/Software Interfaces, Discrete Structures, Data Structures
            <br></br> • 4-year Member of Mens Club Lacrosse<br></br> • Member of
            Alpha Phi Omega Service Fraternity<br></br> • Alpha Phi Omega
            New-Member Recruitment Committee
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <style jsx>{`

          .Experience {
            padding-top: 5rem;
            width: 100%;
            background: black;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
