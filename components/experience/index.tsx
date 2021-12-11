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
          date="2015 - 2019"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            2015-2019: B.S. Computer Science Degree
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Albany, NY</h4>
          <p>
            {`Member of Men's Club Lacrosse, and Alpha Phi Omega Service
            Fraternity.`}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            2018: Archbishop Molloy High School, IT Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Briarwood, NY</h4>
          <p>
            Gained fluency in the basics of system networking and hands-on
            troubleshooting.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Aug 2019-Oct 2019: Apple Technical Specialist
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Garden City, NY
          </h4>
          <p>
            Provide and execute technical support solutions for customers by
            troubleshooting, diagnosing, and repairing iOS devices.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Oct 2019-Feb 2021: Apple Technical Expert
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Garden City, NY
          </h4>
          <p>
            Responsible for facilitation of service technician training.
            Complete physical repairs on all models of iOS mobile devices that
            are still supported by Apple.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Feb 2021-June 2021: Apple Software Quality Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            Design automated test cases in Java using Jackson, Jenkins, TestNG,
            and Gradle for the Apple Online Store. AWS Cloud Practitioner
            Certification. Engineer Full-Stack projects using React.js and
            Spring Boot.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            June 2021-July 2021: Witbe Scripting Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Massapequa, NY</h4>
          <p>
            Support the deployment of Witbe’s products. Develop and validate
            specific scripts through graphic interfaces or in Python. Develop
            custom dashboards and reports for clients, presenting the results.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-Present"
          iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            July 2021-Present: Witbe Customer Success Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
          <p>
            Manage 7+ customer projects and provide the highest level of
            customer satisfaction, success with products, and troubleshooting
            for each customer. Coordinate with the Sales Department for
            opportunities of future customer purchases. Manage a team of
            scripters to develop automated scenarios using Witbe robots.
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
