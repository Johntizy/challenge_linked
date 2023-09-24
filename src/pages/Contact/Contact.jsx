import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Slide } from "react-awesome-reveal";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";

// components
import Modal from "../../components/Modal/Modal";
import Input from "../../components/input/Input";
import { images } from "../../constants";

//style
import "./Contact.css";

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

    console.log(formData);
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
            <h1 className="headtext">
              Questions or need assistance? <br />
              Let us know about it!
            </h1>
          </Slide>

          <Slide direction="up" delay={150}>
            <p className="p_montserrat-14 hidden_form-text">
              Email us below to any question related to our event
            </p>
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
            <button className="app_register-form-btn" disabled={isLoading}>
              {isLoading ? (
                <img src={images.loading} className="spinner" />
              ) : (
                "Submit"
              )}
            </button>
          </Slide>
        </form>
      </div>
      <img
        src={images.starpu}
        alt="gradient-top"
        className="absolute_star_top stars"
      />
      <img
        src={images.satagra}
        alt="gradient-top"
        className="absolute_star_middle stars"
      />
      <img
        src={images.prestar}
        alt="gradient-top"
        className="absolute_star_right stars"
      />
      <img
        src={images.prestar}
        alt="gradient-top"
        className="absolute_star_bottom stars"
      />
      {showModal && <Modal />}

      <div className="gradient_circle_section-top ">
        <img src={images.lens} alt="gradient-top" />
      </div>
      <div className="gradient_circle_section-bottom_right ">
        <img src={images.lens} alt="gradient-top" />
      </div>
    </div>
  );
}

export default Contact;
