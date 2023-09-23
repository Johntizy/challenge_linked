import { useState, useCallback, useEffect } from "react";

//assets
import photo from "../../assets/reg-image.png";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
//style
import "./RegisterPage.css";
import Input from "../../components/input/Input";
import axios from "axios";
import { data } from "../../constants";
import { Slide } from "react-awesome-reveal";
import { useMutation } from "react-query";
import toast from "react-hot-toast";
import {images} from "../../constants";

function Register() {
  const [selectOptions, setSelectOptions] = useState([]);
  const [showModal, setShowmodal] = useState(false);

  useEffect(() => {
    getData();
    console.log(data.groupSize);
  }, []);

  const getData = async () => {
    await axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((res) => {
        console.log(res.data);
        setSelectOptions(res.data);
      })
      .catch((err) => console.log(err));
  };

  const [formData, setFormData] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    category: "",
    group_size: "",
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
    console.log(event.target.value);
    console.log(event.target.checked);
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
      toast.error("Something Went Wrong!");
    },
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = validateForm();

    if (isValid) {
      mutate(formData)
    } else {
      toast("In-Valid Form");
    }
    console.log(isValid);
  };
  return (
    <div className="app_wrapper section_padding">
      <div className="app_wrapper_img">
        <img src={photo} alt="reg photo" />
      </div>
      <div className="app_wrapper_info">
        <form className="app_register-form" onSubmit={onSubmitHandler}>
          <Slide direction="up" delay={100}>
            <h1 className="headtext">Register</h1>
          </Slide>

          <Slide direction="up" delay={300}>
            <p className="p_montserrat-14">Be part of this movement!</p>
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

          <div className="app_register-form-input">
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
            <Button className="app_register-form-btn">Register Now</Button>
          </Slide>
          
        </form>
      </div>

      {showModal && <Modal />}

      
      <img src={images.starpu} alt="gradient-top" className="absolute_star_top stars" />
      <img src={images.satagra} alt="gradient-top" className="absolute_star_middle stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_right stars" />
      <img src={images.prestar} alt="gradient-top" className="absolute_star_bottom stars" />
    </div>
  );
}

export default Register;
