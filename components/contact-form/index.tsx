import { FC } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface ContactFormProps {}

type FormValues = {
  ContactForm__FirstName: string;
  ContactForm__LastName: string;
  ContactForm__Email: string;
};

const ContactForm: FC<ContactFormProps> = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  return (
    <div className="ContactForm__Container">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="ContactForm"
        action=""
      >
        <div className="ContactForm__MessageBox">
          <label htmlFor="ContactForm__MessageBox">Message:</label>
          <textarea
            className="ContactForm__TextArea"
            id="ContactForm__TextArea"
          ></textarea>
        </div>

        <div className="ContactForm__Details">
          <label htmlFor="ContactForm__FirstName">First Name:</label>
          <input
            {...register("ContactForm__FirstName")}
            id="ContactForm__FirstName"
            type="text"
            name=""
            className="ContactForm__InputArea"
          />
          <label htmlFor="ContactForm__LastName">Last Name:</label>
          <input
            {...register("ContactForm__LastName")}
            id="ContactForm__LastName"
            type="text"
            name=""
            className="ContactForm__InputArea"
          />
          <label htmlFor="ContactForm__Email">Email:</label>
          <input
            {...register("ContactForm__Email")}
            id="ContactForm__Email"
            type="email"
            name=""
            className="ContactForm__InputArea"
          />
          <button className="ContactForm__SubmitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
      <style jsx>{`
        .ContactForm__Container {
          background: black;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ContactForm {
          border-radius: 25px;
          padding: 1.9rem;
          max-width: 650px;
          background-color: #a9a9a9;
        }
        .ContactForm__MessageBox {
          display: flex;
          flex-direction: column;
          order: 2;
        }
        .ContactForm__TextArea {
          flex: 1;
          min-width: 18rem;
          background: transparent;
          color: #fff;
          padding: 15px;
        }
        .ContactForm__Details {
          flex: 1;
          order: 1;
          margin-right: 2rem;
        }
        .ContactForm__InputArea {
          width: 100%;
          background: transparent;
          color: #fff;
          border-radius: 40px;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
        }
        .ContactForm__SubmitButton {
          padding: 1 rem;
          margin-bottom: 1rem;
          background: tomato;
          color: #fff;
          border: 0;
          padding: 15px 50px;
          border-radius: 40px;
          font-size: 16px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
