import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import { Slide } from "react-awesome-reveal";

//component
import Modal from "../../components/Modal/Modal";
import { data } from "../../constants";
import Input from "../../components/input/Input";
import { images } from "../../constants";

//style
import "./Register.css";

const Register = () => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [showModal, setShowmodal] = useState(false);

  useEffect(() => {
    getData();
    console.log(data.groupSize);
  }, []);

  const getData = async () => {
    const arr = [];
    await axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((res) => {
        setSelectOptions(res.data);
      })
      .catch((err) => console.log(err));
  };

  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: "",
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: false,
  });

  const {
    team_name,
    email,
    phone_number,
    project_topic,
    group_size,
    category,
    privacy_poclicy_accepted,
  } = formData;

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    console.log(formData);
    if (event.target.name === "privacy_poclicy_accepted") {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.checked,
      }));
    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  const validateForm = () => {
    let err = {};

    if (team_name === "") {
      err.team_name = "Username required!";
    }
    if (email === "") {
      err.email = "Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        err.email = "Email not valid!";
      }
    }

    if (project_topic === "") {
      err.project_topic = "Occupation required!";
    }
    if (phone_number === "") {
      err.phone_number = "Occupation required!";
    }
    if (category === "") {
      err.category = "Gender required!";
    }
    if (group_size === "") {
      err.group_size = "Gender required!";
    }
    if (privacy_poclicy_accepted === false) {
      err.privacy_poclicy_accepted = "Any one language required!";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (data) =>
      axios.post("https://backend.getlinked.ai/hackathon/contact-form", data),
    onSuccess() {
      setShowmodal(true);
    },
    onError(e) {
      toast.error(
        <p className="p_montserrat-14" style={{ color: "red" }}>
          Something went wrong. Try Again!
        </p>
      );
    },
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = validateForm();

    if (isValid) {
      mutate(formData);
    } else {
      toast.error(
        <p className="p_montserrat-14" style={{ color: "red" }}>
          Fields required
        </p>
      );
    }
    console.log(isValid);
  };
  return (
    <div className="app_wrapper section_padding">
      <div className="app_wrapper_img">
        <img src={images.regman} alt="reg photo" />
      </div>
      <div className="app_wrapper_info">
        <form className="app_register-form" onSubmit={onSubmitHandler}>
          <Slide direction="up" delay={100}>
            <h1 className="headtext">
              Register <img src={images.regfam} alt="" />
            </h1>
          </Slide>

          <Slide direction="up" delay={300}>
            <p className="p_montserrat-14" style={{ textAlign: "left" }}>
              Be part of this movement!
            </p>
          </Slide>

          <h2>CREATE YOUR ACCOUNT</h2>

          <div className="app_register-form-input">
            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Team’s Name</label>
              <br />
              <Slide direction="up" delay={300}>
                <Input
                  required
                  type="text"
                  name="team_name"
                  placeholder="Enter the name of your group"
                  value={team_name}
                  errors={formError.team_name}
                  onChange={onChangeHandler}
                />
              </Slide>
            </div>

            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Phone</label>
              <br />
              <Slide direction="up" delay={300}>
                <Input
                  required
                  icon="phone"
                  type="tel"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  value={phone_number}
                  errors={formError.phone_number}
                  onChange={onChangeHandler}
                />
              </Slide>
            </div>
          </div>

          <div className="app_register-form-input">
            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Email </label>
              <br />
              <Slide direction="up" delay={300}>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  errors={formError.email}
                  onChange={onChangeHandler}
                />
              </Slide>
            </div>

            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Project Topic</label>
              <br />
              <Slide direction="up" delay={300}>
                <Input
                  required
                  type="text"
                  name="project_topic"
                  placeholder="What is your group project topic"
                  value={project_topic}
                  errors={formError.project_topic}
                  onChange={onChangeHandler}
                />
              </Slide>
            </div>
          </div>

          <div className="app_register-form-select">
            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Category</label>
              <Slide direction="up" delay={300}>
                <select
                  className="form-select"
                  name="category"
                  onChange={onChangeHandler}
                  value={formData.category}
                >
                  <option value=""></option>
                  {selectOptions?.map((opt, index) => (
                    <option key={index} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </Slide>
              <span className="non-valid">{formError.occupation}</span>
            </div>

            <div className="app_register-form-input-container">
              <label className="p_montserrat-14">Group Size</label>
              <Slide direction="up" delay={300}>
                <select
                  className="form-select"
                  name="group_size"
                  onChange={onChangeHandler}
                  value={formData.group_size}
                >
                  <option value=""></option>
                  {data.groupSize?.map((opt, index) => (
                    <option key={index} value={opt.value}>
                      {opt.value}
                    </option>
                  ))}
                </select>
              </Slide>
              <span className="non-valid">{formError.occupation}</span>
            </div>
          </div>

          <span>Please review your registration details before submitting</span>

          <div className="app_register-form-check">
            <input
              type="checkbox"
              name="privacy_poclicy_accepted"
              onChange={onChangeHandler}
            />
            <Slide direction="up" delay={300}>
              <label className="p_montserrat-14" htmlFor="terms">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </Slide>
          </div>

          <Slide direction="up" delay={500}>
            <button className="app_register-form-btn" disabled={isLoading}>
              {isLoading ? (
                <img src={images.loading} className="spinner" />
              ) : (
                "Register Now"
              )}
            </button>
          </Slide>
        </form>
      </div>

      {showModal && <Modal />}

      <div className="gradient_circle_section-top ">
        <img src={images.lens} alt="gradient-top" />
      </div>
      <div className="gradient_circle_section-bottom_right ">
        <img src={images.lens} alt="gradient-top" />
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
    </div>
  );
}

export default Register;
