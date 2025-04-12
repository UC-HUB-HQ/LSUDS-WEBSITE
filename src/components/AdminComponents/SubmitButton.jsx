import Loader from "../Loader";

const SubmitButton = ({ formDisabled, loading, isUpdate, text }) => {

    const buttonText = loading ? <Loader /> : isUpdate ? `Update ${text}` : `Add ${text}`;

    return (
        <div className="submitBtnContainer">
            <button className="submitBtn" type="submit" disabled={formDisabled}>
                {buttonText}
            </button>
        </div>
    );
};

export default SubmitButton;
