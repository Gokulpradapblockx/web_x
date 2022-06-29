import React from 'react'
import { GoLocation } from 'react-icons/go';
import { BiPhoneCall } from 'react-icons/bi';
import { IoIosMail } from 'react-icons/io';
import hi from "../Assets/hi.jpg";
import "./css/newcontact.css"
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as yup from "yup";
const NewContact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_upn6mjd",
        "template_v6deeyf",
        e.target,
        "63hjkYtjTOCyYqllo"
      )
      .then((res) => {
        console.log(res);
        alert("Thanks for connecting With Us");
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry Contact us Via contact@blockxtechnologies.com");
      });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
      select: "",
      checkbox: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name is required")
        .strict()
        .trim()
        .min(5, "Minimun 3 charecters required")
        .max(15, "Maximun 15 charecters only"),
        
      email: yup
        .string()
        .required("Email is required")
        .email()
        .strict()
        .trim()
        .lowercase(),
      number: yup
        .number()
        .positive()
        .integer()
        .required("number is required")
        .min(10, "Enter the valid number"),

      message: yup
        .string()
        .required("Message is required")
        .strict()
        .trim()
        .min(20, "Minimun 20 charecters required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="row">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        <div className="row contact-section">
          <div className="col-lg-6">
            <div className="row contact-first">
              <div className="col-lg-12 text-center">
              <img src={hi} alt="" />
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-1"><i><GoLocation/></i></div>
              <div className="col-lg-1"></div>
              <div className="col-lg-9"> <p> No:726,4th street, <br />
Cross Cut Raod,Tatabad,<br />
Coimbatore,</p></div>
<div className="col-lg-1"></div>
<div className="col-lg-1 input-mail"><i><BiPhoneCall/></i></div>
<div className="col-lg-1"></div>
              <div className="col-lg-9 input-mail">  <p>  +91-8531824727</p></div>
              <div className="col-lg-1"></div>
              <div className="col-lg-1 "> <i><IoIosMail/></i></div>
              <div className="col-lg-1"></div>
              <div className="col-lg-9">  <p> contact@blockxtechnologies.com</p></div>
            </div>
           
           
           
           
          </div>
          <div className="col-lg-6">
          <form autoComplete="off" onSubmit={formik.handleSubmit || sendEmail}>
            <div className="row">            
               <div className="col-lg-11">
               <p className="Top-text">
               "Feel free to send us a message in the contact form"
                    </p>
                    <p></p>
               </div>
               <div className="col-lg-1"></div>
                  <div className="col-lg-11">
                    <div className="">
                      <div className="top-card"></div>
                      <input
                        type="text"
                        name="name"
                        className={`input-area arera mt-5 ${
                          formik.errors.email && "invalid"
                        }`}
                        placeholder="&#xf007;  Enter your name*"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      {formik.errors.name ? (
                        <div
                          className="error"
                          style={{ color: "red", marginTop: "-2rem" }}
                        >
                          {formik.errors.name}
                        </div>
                      ) : null}

                      <input
                      
                        type="email"
                        name="email"
                        className={`input-area ${
                          formik.errors.email && "invalid"
                        }`}
                        placeholder="&#xf0e0;  Enter your email*"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.errors.email ? (
                        <div
                          className="error"
                          style={{ color: "red", marginTop: "-2rem" }}
                        >
                          {formik.errors.email}
                        </div>
                      ) : null}

                      <textarea 
                        name="message"
                        className={`input-area text ${
                          formik.errors.email && "invalid"
                        }`}
                        placeholder="&#xf27a;  Enter your message*"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                      ></textarea>
                      {formik.errors.message ? (
                        <div
                          className="error"
                          style={{ color: "red", marginTop: "-2rem" }}
                        >
                          {formik.errors.message}
                        </div>
                      ) : null}

                      <div className="">
                        <input
                          className="btn-submit"
                          type="Submit"
                          value="Submit"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-1"></div>
                </div>
              
          </form>
          </div>
          
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  )
}

export default NewContact;