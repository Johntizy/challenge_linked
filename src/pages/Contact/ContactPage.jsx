import { useState, useCallback, useEffect } from "react";

import Modal from "../../components/Modal";

//style
import "./ContactPage.css";
import Input from "../../components/input/Input";
import axios from "axios";
import { Slide } from "react-awesome-reveal";
import { useMutation } from "react-query";

import { images } from "../../constants";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [showModal, setShowmodal] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
  });

  const { first_name, email, message } = formData;

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) =>
      axios.post("https://backend.getlinked.ai/hackathon/contact-form", data),
    onSuccess() {
      setShowmodal(true);
    },
    onError(e) {
      toast.error("Something Went Wrong!");
    },
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};

    if (first_name === "") {
      err.first_name = "Name required!";
    }
    if (email === "") {
      err.email = "Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        err.email = "Email not valid!";
      }
    }

    if (message === "") {
      err.message = "Message required!";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    let isValid = validateForm();

    if (isValid) {
      mutate(formData);
    } else {
      toast("In-Valid Form");
    }
    console.log(isValid);
  };
  return (
    <div className="app_wrapper section_padding">
      <div className="app_wrapper_img">
        <div className="app_contact_text">
          <h1 className="headtext">
            <span>Get in touch</span>
          </h1>
          <Slide direction="up" delay={100}>
            <p className="p_montserrat">
              Contact <br />
              Information
            </p>
          </Slide>
          <Slide direction="up" delay={200}>
            <p className="p_montserrat">
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
          </Slide>{" "}
          <Slide direction="up" delay={300}>
            <p className="p_montserrat">Call Us : 07067981819</p>
          </Slide>
          <Slide direction="up" delay={400}>
            <p className="p_montserrat">
              we are open from Monday-Friday <br />
              08:00am - 05:00pm
            </p>
          </Slide>
        </div>
      </div>
      <div className="app_wrapper_info">
        <form className="app_register-form" onSubmit={onSubmitHandler}>
          <Slide direction="up" delay={100}>
            <h1 className="headtext">Register</h1>
          </Slide>

          <div className="app_register-form-input">
            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Team’s Name</label>
              <br />
              <Slide direction="up" delay={300}>
                <Input
                  required
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={first_name}
                  errors={formError.first_name}
                  onChange={onChangeHandler}
                />
              </Slide>
            </div>
          </div>

          <div className="app_register-form-input">
            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Project Topic</label>
              <br />
              <Slide direction="up" delay={300}>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="Mail"
                  value={email}
                  errors={formError.email}
                  onChange={onChangeHandler}
                />
              </Slide>
            </div>
          </div>

          <div className="app_register-form-input">
            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Project Topic</label>
              <br />
              <Slide direction="up" delay={300}>
                <textarea
                  value={message}
                  onChange={onChangeHandler}
                  name="message"
                  rows="4"
                  cols="50"
                ></textarea>
                <span>{formError.message}</span>
              </Slide>
            </div>
          </div>

          <Slide direction="up" delay={500}>
            <button className="custom_button app_register-form-btn">
              Register Now
            </button>
          </Slide>
        </form>
      </div>
      <img src={images.starpu} alt="gradient-top" className="absolute_star_top stars" />
      <img src={images.satagra} alt="gradient-top" className="absolute_star_middle stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_right stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_bottom stars" />
      {showModal && <Modal />}
    </div>
  );
}

export default Contact;
