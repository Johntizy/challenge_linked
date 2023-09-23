import { useNavigate } from "react-router-dom";

//assets
import pics1 from "../assets/successfully-done.png";
import pics2 from "../assets/successful-man.png";

//style
import "./Modal.css";
import Button from "./Button";

const Modal = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-img">
          <img src={pics1} alt="successfully done" className="modal-one" />
          <img src={pics2} alt="sucessfull man" className="modal-two" />
        </div>

        <h2>
          Congratulations <br /> you have successfully Registered!
        </h2>
        <p>
          Yes, it was easy and you did it! <br /> check your mail box for next
          step😇
        </p>

        <button className="custom_button modal-btn" onClick={handleNavigate}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Modal;
