import React, { Component } from "react";
import { FaCoffee, FaHiking, FaShuttleVan, FaBed } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCoffee />,
        title: "Free Coffee",
        info: "All the coffee you can drink"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Come hike in our one of at beautiful locations"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Free shuttle to and from the airport"
      },
      {
        icon: <FaBed />,
        title: "Luxury Beds",
        info: "Beds that will give you a great nights rest"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
