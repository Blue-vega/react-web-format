import React, { useState } from "react";
import  style from "./Contactus.module.css";
import message from "./image/message.jpg";
import runner from "./image/running.gif";
import Footer from "./Footer";
import Nav from "./Nav";
const Contactus = () => {
  const [Data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setdata({ ...Data, [name]: value });
  };
  //connection with firebase
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, message } = Data;
    if (name && email && message) {
      const res = await fetch("url/userDataRecords.json", {
        method: "POST",
        Headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (res) {
        setdata({
          name: "",
          email: "",
          message: "",
        });
        alert("Submited");
      } else {
        alert("Please Fill The Form");
      }
    }
    else {
      alert("Please Fill The Form");
    }
  };
  return (
    <>
      <Nav />
      <div className={style.contactContainer}>
        <h1>Feel Free To Contact Us</h1>
      </div>
      <div className={style.anime}>
        <img className={style.animeImg} src={runner} alt="runner" />
      </div>
      <div className={style.formDiv}>
        <img src={message} alt="main" className={style.messageImg}/>
        <h2 id={style.messagel}>Message</h2>
        <form action="#" method="POST" className={style.formInputs}>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            autoComplete="off"
            onChange={postUserData}
            value={Data.username}
            required
          />
          <input
            type="Email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={postUserData}
            value={Data.email}
            required
          />
          <textarea
            name="message"
            id={style.message}
            cols="40"
            rows="6"
            autoComplete="off"
            required
            placeholder="Your Message"
            onChange={postUserData}
            value={Data.message}
          ></textarea>
          <input
            type="Submit"
            value="Send"
            className={style.fSubmit}
            onClick={submitData}
          />
        </form>
      </div>
      <Footer />
    </>
  );
};
export default Contactus;
