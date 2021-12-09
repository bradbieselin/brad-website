import { FC } from "react";

export interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
  function ValidateEmail(event, inputText) {
    event.preventDefault();
  }
  return (
    <div className="ContactForm" id="contact">
      <div className="ContactForm__Header">Contact Me</div>
      <div className="ContactForm__Border"></div>
      <form className="ContactForm__Details" action="">
        <input
          type="text"
          className="ContactForm__Text"
          placeholder="Name"
        ></input>
        <input
          type="email"
          className="ContactForm__Text"
          placeholder="Email"
        ></input>
        <input
          type="text"
          className="ContactForm__Text"
          placeholder="Phone Number"
        ></input>
        <textarea
          className="ContactForm__MessageText"
          placeholder="Your message here"
        ></textarea>
        <input
          type="submit"
          className="ContactForm__Button"
          value="Send Email"
          onClick={ValidateEmail}
        ></input>
      </form>
      <style jsx>{`
        .ContactForm {
          background: black;
          width: 100%;
          height: 100vh;
          position: relative;
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
          border: 0;
          padding: 12px 50px;
          cursor: pointer;
          transition: 0.5s;
        }
        .ContactForm__Button:hover {
          background: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
