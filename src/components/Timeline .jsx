import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      title: "Product Designer",
      company: "Microsoft - Spain",
      date: "2021 - Present",
    },
    {
      title: "UX Designer",
      company: "Apple Inc - Spain",
      date: "2020 - 2021",
    },
    {
      title: "Web Designer",
      company: "Figma - Spain",
      date: "2018 - 2020",
    },
  ];

  return (
    <div className="timeline">
      {timelineData.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.company}</p>
            <p className="timeline-date">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
