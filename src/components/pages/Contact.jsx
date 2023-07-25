import React from "react";

const Contact = () => {
  return (
    <div className="m-5" id="contact">
      <h2 className="my-3">Fill out the form below to get in contact: </h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="First and last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message:</label>
          <textarea
            type="text"
            className="form-control"
            id="message"
            rows={3}
            placeholder="A breif description of your reason for reaching out"
          />
        </div>
        <div className="form-group my-3">
          <button type="submit" class="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
