import { useNavigate } from "react-router-dom";

//helpers
import { images } from '../../constants';

//style
import "./Modal.css";

const Modal = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="app_modal-backdrop">
      <div className="app_modal">
        <div className="app_modal-img">
          <img src={images.modalsuc} alt="successfully-done" />
        </div>

        <h2 className="app_modal-head">
          Congratulations <br /> you have successfully Registered!
        </h2>
        <p className="p_montserrat-14">
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
