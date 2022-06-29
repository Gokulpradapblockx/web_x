import React from "react";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as yup from "yup";
import "./home.css";

import NewContact from "../components/NewContact";
function Contactus() {
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
      select: yup.string().required("select is required"),
      checkbox: yup
        .boolean()
        .required("You must accept the terms and conditions"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="About About-contact">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="why">
              <h1>
                <span>Get In</span> <br />
                <strong>Touch !!!</strong>
              </h1>
            </div>
          </div>
          <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="container mb-5">
          <NewContact/>
          {/* <form autoComplete="off" onSubmit={formik.handleSubmit || sendEmail}>
            <div className="row">
              
              <div className="col-lg-12 form ">
                <div className="row">
                  <div className="col-lg-6 image-section text-center">
                    <p className="Top-text ">
                      "Whether you have a question, want to start a project or
                      simply want to connect."
                    </p>
                    <p>"Feel free to send me a message in the contact form"</p>

                    <img src={cartoon} alt="" />
                  </div>
                  <div className="col-lg-6">
                    <div className="">
                      <div className="top-card"></div>
                      <input
                        type="text"
                        name="name"
                        className={`input-area arera mt-5 ${
                          formik.errors.email && "invalid"
                        }`}
                        placeholder="Enter your name*"
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
                        placeholder="Enter your email*"
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
                        placeholder="Enter your message*"
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
                </div>
              </div>
              
            </div>
          </form> */}
          {/* <form autoComplete = "off" onSubmit={formik.handleSubmit || sendEmail} >
          
          <div className="container contact">
            <div className="row">
              <div className="col-lg-6 col-sm-12 mt-2">
               
                <input
                type="text"
                name="name"
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                 {formik.errors.name ? <div style={{color: "red"}}>{formik.errors.name}</div> : null}
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
               
                <input
                  type="email"
                  name="email"
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                 {formik.errors.email ? <div style={{color: "red"}}>{formik.errors.email}</div> : null}
              </div>
              <div className="col-lg-6 col-sm-12 mt-2">
               
                <input
                 type="number"
                 name="number"
                  className=" col-xs-12 col-lg-12 col-md-12 col-sm-12 input-area mb-2"
                  placeholder="Enter your Mobile Number"
                  onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                  onChange={formik.handleChange}
                  value={formik.values.number}
                />
                  {formik.errors.number ? <div style={{color: "red"}}>{formik.errors.number}</div> : null}
              </div>
              <div className="col-lg-12 mt-2">
                <div className="text-style">
                  <textarea 
                  name="message"                   
                    className="col-lg-12 text"
                    placeholder="Enter your message"
                    onChange={formik.handleChange}
                  value={formik.values.message}
                  ></textarea> 
                   {formik.errors.message ? <div style={{color: "red"}}>{formik.errors.message}</div> : null}                  
                </div>
               
              </div>
              <div className="radio-btn">
                <label className="mt-2">Your interest</label>
                <div className="radio-input col-lg-8">
                  <div>
                    <input
                    className="m-2"
                      type="radio"
                      id="Blockchain Development"
                      name="fav_language"
                      value="Blockchain Development"
                      
                    />
                    <label for="Blockchain Development">
                      Blockchain Development
                    </label>
                  </div>
                  <div>
                    <input
                     className="m-2"
                      type="radio"
                      id="Marketing"
                      name="fav_language"
                      value="Marketing"
                    />
                    <label for="Marketing">Marketing</label>
                  </div>
                  <div>
                    <input
                     className="m-2"
                      type="radio"
                      id="Join our Team"
                      name="fav_language"
                      value="Join our Team"
                    />
                    <label for="Join our Team">Join our Team</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mt-2">
                  <p>How Did You Hear About Us?</p>
                  <select
                    type="select"
                    name="select"          
                    class="form-select"
                    aria-label="Default select example"
                    onChange={formik.handleChange}
                    value={formik.values.select}
                   
                  >
                    <option selected>Choose your answer</option>
                    <option value="Search engines">Search engines</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                    <option value="Dribble/Behance">Dribble/Behance</option>
                    <option value="Listings(Clutch, GoodFirms etc.)">Listings(Clutch, GoodFirms etc.)</option>
                  </select>
                  {formik.errors.select ? <div style={{color: "red"}}>{formik.errors.select}</div> : null}
                </div>
              </div>
              <div className="check mr-3 mt-2">
                  <input type="checkbox"
                  name="checkbox"   onChange={formik.handleChange}
                  value={formik.values.checkbox}/> I agree to BlockX Technology <a href="#">Privacy Policy</a>
                   {formik.errors.checkbox ? <div style={{color: "red"}}>{formik.errors.checkbox}</div> : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" mt-3">
                <input className="btn-submit" type="Submit" value="Submit"/>
              </div>
            </div>
          </div>
          </form>         */}
        </div>
      </div>
    </>
  );
}

export default Contactus;
