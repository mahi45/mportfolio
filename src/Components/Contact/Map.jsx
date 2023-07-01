import React from "react";

const Map = () => {
  return (
    <>
      <div className="mt-16 p-1 border-4">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item border-6 border-white"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d406.4367833971457!2d90.41579449152592!3d23.830028425752435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1687973795948!5m2!1sen!2sbd"
            style={{ width: "100%", height: "350px" }}
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
