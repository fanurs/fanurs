import React, { Component } from 'react';

class Home extends Component {

  render() {
    const componentClassName = [
      "bg-[url('../public/images/background-winter.jpg')]",
      "bg-cover",
      "min-h-screen",
      "grid",
      "place-content-center",
    ].join(" ");

    const titleClassName = [
      "text-5xl",
      "text-center",
      "font-bold",
      "m-5",
    ].join(" ");

    const descriptionClassName = [
      "max-w-md",
      "font-bold",
      "text-justify",
      "m-5",
    ].join(" ");

    return (
      <div id="home" className={componentClassName}>
        <div className="bg-gray-400/[.4] rounded-xl hover:bg-gray-300/[.8]">
          <div className={titleClassName}>Fanurs Teh</div>
          <div className="h-4"></div>
          <div className={descriptionClassName}>
            This is Fanurs C.E. Teh, a PhD candidate in nuclear physics. My primary research involves using both experimental techniques and machine learning to predict neutron star properties with data from heavy-ion collisions.
          </div>
        </div>
      </div>
    );
  }

}

export default Home;