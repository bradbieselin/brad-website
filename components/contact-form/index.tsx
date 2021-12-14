import { FC } from "react";
import { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import Fade from "react-reveal/Fade";
import emailjs from "emailjs-com";

export interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
  const validator = useRef(new SimpleReactValidator());
  const [, forceUpdate] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [btnShow, setBtnShow] = useState(true);
  const [submitResult, setSubmitResult] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (validator.current.allValid()) {
      setSubmitResult(
        "Thank you for you message, I will get back to you as soon as possible."
      );
      setBtnShow(false);
    } else {
      validator.current.showMessages();
      forceUpdate(null);
    }
  }

  return (
    <div className="ContactForm" id="contact">
      <Fade>
        <div className="ContactForm__Header">Contact Me</div>
      </Fade>
      <Fade up>
        <div className="ContactForm__Border"></div>
      </Fade>
      <Fade up>
        <form className="ContactForm__Details">
          <div className="FormElement">
            <input
              type="text"
              className="ContactForm__Text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            {validator.current.message("name", name, "required|alpha_space")}
          </div>
          <div className="FormElement">
            <input
              type="email"
              className="ContactForm__Text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {validator.current.message("email", email, "required|email")}
          </div>
          <div className="FormElement">
            <input
              type="text"
              className="ContactForm__Text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            {validator.current.message("phone", phone, "required|phone")}
          </div>
          <div className="FormElement">
            <textarea
              className="ContactForm__MessageText"
              placeholder="Your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {validator.current.message(
              "message",
              message,
              "required|min:20|max:300"
            )}
          </div>

          {btnShow ? (
            <div onClick={submitForm} className="ContactForm__Button">
              Send Email
            </div>
          ) : (
            <p>{submitResult}</p>
          )}
        </form>
      </Fade>
      <style jsx>{`
        .ContactForm {
          padding-top: 50px;
          background: black;
          width: 100%;
          height: 100vh;
          position: relative;
          color: white;
        }
        .ContactForm__Header {
          text-align: center;
          color: white;
          font-family: "monsterrat", sans-serif;
          padding-top: 5rem;
          font-size: 50px;
        }
        .ContactForm__Details {
          padding: 40px 0;
          text-align: center;
          background: black;
          max-width: 650px;
          margin: auto;
          padding: 0 10px;
          overflow: hidden;
        }
        .ContactForm__Border {
          width: 100px;
          height: 10px;
          background: white;
          margin: 40px auto;
        }
        .ContactForm__Text {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin: 10px 0;
          border: 0;
          padding: 8px 40px;
          outline: none;
          transition: 0.5s;
        }
        .ContactForm__MessageText {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin: 10px 0;
          border: 0;
          padding: 30px 40px;
          outline: none;
          transition: 0.5s;
          resize: none;
          height: 250px;
        }
        .ContactForm__MessageText:focus {
          box-shadow: 0 0 10px 10px #34495e;
        }
        .ContactForm__Text:focus {
          box-shadow: 0 0 10px 10px #34495e;
        }
        .ContactForm__Button {
          background: white;
          color: black;
          border: 0;
          padding: 12px 50px;
          cursor: pointer;
          transition: 0.5s;
        }
        .ContactForm__Button:hover {
          background: black;
          color: white;
          border-style: solid;
          border-color: white;
          border-width: 1px;
        }
        .FormElement {
          p {
            color: white;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
