import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms : rooms} = this.context;
  
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />
    })
 
    console.log(rooms);

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center" >
          {loading? < Loading / >: rooms}
        </div>
     
      </section> 
      );
  } 
}

//export default FeaturedRooms

/*
//import React, { Component } from "react";
//import Title from "./Title";
//import { RoomContext } from "../context";
//import Room from "./Room";
//import Loading from "./Loading";
//export default class FeaturedRooms extends Component {
//  static contextType = RoomContext;
//
  render() {
//    let { loading, featuredRooms: rooms } = this.context;
//
    rooms = rooms.map(room => {
 //     return <Room key={room.id} room={room} />;
//    });
//    return (
//      <section className="featured-rooms">
//        <Title title="featured rooms" />
//        <div className="featured-rooms-center">
//          {loading ? <Loading /> : rooms}
//        </div>
//      </section>
//    );
//  }
//}



// */