import React from "react";
import "./Timeline.scss";
import { StarFull } from "assets/timelineIcons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "constants/timelineData";
import { AiFillCaretDown } from "react-icons/ai";

const Timeline = () => {
  return (
    <div id="timeline" className="timeline">
      <h1 className="title">Timeline</h1>
      <VerticalTimeline>
        {timelineData.map((el) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            key={el.id}
            date={el.dateVal}
            dateClassName="date-timeline"
            contentStyle={{
              borderTop: `7px solid ${el.bgIconColor}`,
              color: "black",
            }}
            contentArrowStyle={{
              borderRight: `7px solid  ${el.bgIconColor}`,
            }}
            icon={<StarFull />}
            iconStyle={{ background: `${el.bgIconColor}` }}
          >
            <div className="timeline-box">
              <h3 className="vertical-timeline-element-title">{el.title}</h3>
              <p className="vertical-timeline-element-title">
                {el.description}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div className="complete">
        <AiFillCaretDown size="35px" />
        <h3>Completion of WOC 2024</h3>
      </div>
    </div>
  );
};

export default Timeline;
