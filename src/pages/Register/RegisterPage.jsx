import { useState, useCallback, useEffect } from "react";

//assets
import photo from "../../assets/reg-image.png";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
//style
import "./RegisterPage.css";
import Input from "../../components/input/Input";
import { Selection } from "../../components/Selection/Selection";
import axios from "axios";
import { data } from "../../constants";

const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [privacy_poclicy_accepted, setAccepted] = useState(false);
  const [category, setCategoryPick] = useState(null);
  const [group_size, setGroupSize] = useState(null);
  const [selectOptions, setSelectOptions] = useState([""]);

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      await axios
        .get("https://backend.getlinked.ai/hackathon/categories-list")
        .then((res) => {
          let result = res.data;
          result.map((user) => {
            return arr.push({ value: user.name, label: user.name });
          });
          setSelectOptions(arr);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  const [regInform, setRegInform] = useState({
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    errors: false,
  });
  const { team_name, email, errors, phone_number, project_topic } = regInform;

  const handleChange = useCallback(({ target: { name, value } }) => {
    setRegInform((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = !email || !phone_number;
    setRegInform((prevState) => ({
      ...prevState,
      errors,
    }));

    
    if (!errors) {
      let cat = category.value;
      let grp = category.value;
      let data = {team_name,
        email,
        phone_number,
        project_topic,
        category: cat,
        group_size:grp,
        privacy_poclicy_accepted}

        axios
        .post("https://backend.getlinked.ai/hackathon/registration", {data})
        .then((res) => console.log(res))
        .catch((err) => console.timeLog(err));

        
    }
  };

  return (
    <main className="app_wrapper section_padding">
      <div className="app_wrapper-img">
        <img src={photo} alt="reg photo" />
      </div>

      <form className="app_register-form" onSubmit={handleSubmit}>
        <h1 className="headtext">Register</h1>

        <p className="p_montserrat-14">Be part of this movement!</p>

        <h2>CREATE YOUR ACCOUNT</h2>

        <div className="app_register-form-input">
          <div className="app_register-form-input-container">
            <label className="p_montserrat-14">Team’s Name</label>
            <br />
            <Input
              required
              type="text"
              name="team_name"
              placeholder="Enter the name of your group"
              value={team_name}
              errors={errors}
              onChange={handleChange}
            />
          </div>

          <div className="app_register-form-input-container">
            <label className="p_montserrat-14">Phone</label>
            <br />
            <Input
              required
              icon="phone"
              type="tel"
              name="phone_number"
              placeholder="Enter your phone number"
              value={phone_number}
              errors={errors}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="app_register-form-input">
          <div className="app_register-form-input-container">
            <label className="p_montserrat-14">Email </label>
            <br />
            <Input
              required
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              errors={errors}
              onChange={handleChange}
            />
          </div>

          <div className="app_register-form-input-container">
            <label className="p_montserrat-14">Project Topic</label>
            <br />
            <Input
              required
              type="text"
              name="project_topic"
              placeholder="What is your group project topic"
              value={project_topic}
              errors={errors}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="app_register-form-input">
          <div className="app_register-form-input-container">
            <label className="p_montserrat-14">Category</label>
            <Selection
              value={category}
              selectOptions={selectOptions}
              placeholder="Category"
              handleChange={setCategoryPick}
            />
          </div>

          <div className="app_register-form-input-container">
            <label className="p_montserrat-14">Phone</label>
            <Selection
              value={group_size}
              selectOptions={data.groupSize}
              placeholder="Group Size"
              handleChange={setGroupSize}
            />
          </div>
        </div>

        <span>Please review your registration details before submitting</span>

        <div className="app_register-form-check">
          <input
            type="checkbox"
            name=""
            id="terms"
            onChange={() => !setAccepted}
          />
          <label className="p_montserrat-14" htmlFor="terms">
            I agreed with the event terms and conditions and privacy policy
          </label>
        </div>

        <Button className="app_register-form-btn">Register Now</Button>
      </form>

      {showModal && <Modal />}
    </main>
  );
};

export default RegisterPage;
