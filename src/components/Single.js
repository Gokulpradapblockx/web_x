/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../single.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { BsMedium } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as yup from "yup";

const Single = () => {
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
    <>
      <div className="contact_heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>
                Have A <span>Project in Mind?</span>
              </h1>
              <h2>Get In Touch With Us!</h2>
              <div className="contact__address">
                <div>
                  <p>Mail: contact@blockxsolutions.io</p>
                </div>
                <div className="contact__address-name">

                  <p>
                    No:726,4th street, <br />
                    Cross Cut Raod,Tatabad, <br />
                    Coimbatore,
                    <br />
                    Tamil nadu- 641012,
                  </p>
                </div>
                <div>
                  <p>Mobile: +91-8531824727</p>
                </div>
              </div>
              <div className="social__icons">
                <a target="_blank" href="https://www.facebook.com/blockxtechnologies/" rel="noreferrer"><FaFacebookF/></a>
                <a target="_blank" href="https://www.instagram.com/blockxtechnologies" rel="noreferrer"><IoLogoInstagram/></a>
                <a target="_blank" href="https://mobile.twitter.com/@BlockXTechInc" rel="noreferrer"><FaTwitter/></a>
                <a target="_blank" href="https://www.linkedin.com/company/blockx-technologies-inc" rel="noreferrer"><FaLinkedinIn/></a>
                <a target="_blank" href="https://medium.com/@socialmedia.blockxtech" rel="noreferrer"><BsMedium/></a>
                <a target="_blank" href="https://discord.gg/JvFkxP9Qa8" rel="noreferrer"><FaDiscord/></a>
              </div>
            </div>
            <div className="col-lg-5 contact__form-box">
              <form
                autoComplete="off"
                onSubmit={formik.handleSubmit || sendEmail}
                className="contact__form"
              >
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
                  className={`input-area ${formik.errors.email && "invalid"}`}
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

                <input className="btn-submit" type="Submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
