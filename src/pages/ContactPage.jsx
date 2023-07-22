import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const ContactPage = () => {
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setLoading(true);
    if (
      formValues.email.length > 5 &&
      formValues.fullname.length > 8 &&
      formValues.message.length > 25 &&
      send(
        "service_7mchr7e", // Service ID
        "template_yp3goo4", // Template ID
        formValues,
        "5oPDlSSd6cA1i45VI" // Public Key - https://dashboard.emailjs.com/admin/account
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          formSuccess();
          setLoading(false);
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setLoading(false);
        })
    );
  };
  const formSuccess = () => {
    toast("Thanks for Contacting, I will get back to you shortly.");

    // Resetting Form
    document.getElementById("queryForm").reset();
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.fullname) {
      errors.fullname = "Fullname is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if (!values.message) {
      errors.message = "Message  is required";
    } else if (!values.fullname.length < 25) {
      errors.message = "Minimum 25 character required ";
    }

    return errors;
  };
  return (
    <div>
      <div>
        <h2 className="text-4xl text-white font-semibold mt-4 pb-4">Contact</h2>
        <p className="border-b-4 w-1/12 border-vegas-gold rounded-md"></p>
      </div>

      <p className="font-semibold text-2xl text-white my-5">Contact Form</p>
      <div className="w-full">
        {/* loader Start  */}
        <ToastContainer theme="dark" />

        {/* loader End  */}
        <form id="queryForm" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-full">
              <input
                type="text"
                name="fullname"
                value={formValues.fullname}
                className="w-full rounded-xl h-[50px] bg-eerie-black-1 p-3 border border-gray-700 text-white outline-none focus:border-red-900 focus: "
                placeholder="Full Name*"
                onChange={handleChange}
              />
              <p className=" px-4 text-red-500 text-xs">
                {formErrors.fullname}
              </p>
            </div>

            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formValues.email}
                className="w-full rounded-xl h-[50px] bg-eerie-black-1 p-3 border border-gray-700 text-white  focus:border-red-900 outline-none"
                placeholder="Email*"
                onChange={handleChange}
              />

              <p className=" px-4 text-red-500 text-xs">{formErrors.email}</p>
            </div>
          </div>

          <textarea
            className="w-full rounded-2xl   mt-5 bg-eerie-black-1 p-3 border border-gray-700 text-white outline-none  focus:border-red-900 text-area"
            placeholder="Message*"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            cols="30"
            rows="5"
          ></textarea>
          <p className=" px-4 text-red-500 text-xs">{formErrors.message}</p>

          <div className="flex my-2 justify-end ">
            <button
              className="form-btn "
              type="submit"
              value="submit"
              data-form-btn
            >
              {!loading && <ion-icon name="paper-plane"></ion-icon>}

              <span className="flex gap-2">
                Send Message{" "}
                {loading && (
                  <RotatingLines
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="18"
                    visible={true}
                    strokeColor="yellow"
                  />
                )}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
