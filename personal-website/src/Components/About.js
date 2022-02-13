import React, { Component } from 'react';

class About extends Component {

  render() {
    const componentClassName = [
      "bg-emerald-900",
      "grid",
      "place-content-center",
    ].join(" ");

    const titleClassName = [
      "text-2xl",
      "font-bold",
      "text-white",
      "m-5",
    ].join(" ");

    const descriptionClassName = [
      "max-w-md",
      "text-justify",
      "text-white",
      "m-5",
    ].join(" ");

    return (
      <div id="about" className={componentClassName}> 
        <div className={titleClassName}>About Me</div>
        <div className={descriptionClassName}>
          I am currently a PhD candidate in Experimental Nuclear Physics at the Michigan State University, working under the Facility for Rare Isotope Beams (FRIB), formerly known as the National Superconducting Cyclotron Laboratory (NSCL), as a Graduate Research Assistant.
        </div>
      </div>
    );
  }

}

export default About;