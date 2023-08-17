// import { useState } from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";
function Contact(props) {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <section id={props.id} className="contact_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
            <div className="heading-container text-dark">
              <h2>Contact Us</h2>
            </div>
            <form action="">
              <div>
                <input type="text" placeholder="Full Name " />
              </div>
              <div>
                <input type="text" placeholder="Phone number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex ">
                <button>SEND NOW</button>
              </div>
            </form>
          </div>
          <div className="col-md-6  px-0">
            <div className="map_container">
              <div className="map">
                <div id="googleMap">
                  {" "}
                  {/* {!isLoaded ? (
                    <h1>Loading...</h1>
                  ) : (
                    <GoogleMap
                      mapContainerClassName="map-container"
                      center={center}
                      zoom={10}
                    >
                      <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
                    </GoogleMap>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
