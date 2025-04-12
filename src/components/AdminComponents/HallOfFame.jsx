import { useState, useEffect, useRef } from "react";
import { db } from "../../appwrite/database";
import { Query } from "appwrite";
import ErrorContainer from "../ErrorContainer";
import { addImage, deleteImageFile } from "../reusable";
import { textReducer } from "../textReducer";
import AdminHeader from "./AdminHeader";
import SubmitButton from "./SubmitButton";

const HallOfFame = () => {
  // EXECUTIVES COMPONENT STATES
  const [hall0fFamers, setHall0fFamers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUpdateHall0fFamers, setIsUpdateHall0fFamers] = useState(false);
  const [fileName, setFileName] = useState("");
  const [isHall0fFamersFormOpen, setIsHall0fFamersFormOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [hall0fFamerForm, setHall0fFamersForm] = useState({
    name: "",
    bio: "",
  });

  const formDisabled = !Object.values(hall0fFamerForm).every(input => input !== "") || loading;

  // EXECUTIVE COMPONENT REF
  const timeoutIdRef = useRef(null);

  const idOfHallOfFamerToUpdate = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleInputChange = (e) => {
    setHall0fFamersForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const clearErrorMessage = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    } else {
      timeoutIdRef.current = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const resetFormInfo = () => {
    setHall0fFamersForm({
      name: "",
      bio: "",
    });
    setFileName(null);
  };

  const closeAndResetForm = () => {
    setIsHall0fFamersFormOpen(false);
    setIsUpdateHall0fFamers(false);
    resetFormInfo();
  }

  // GET ALL HALL OF FAMERS FROM THE DB
  const init = async () => {
    const hallOfFamers = await db.hall0fFamers.list([
      Query.orderDesc("$updatedAt"),
    ]);
    setHall0fFamers(hallOfFamers.documents);

  };

  const addHallOfFamer = async (e) => {
    e.preventDefault();
    //
    if (!e.target.image.files[0]) {
      setErrorMessage("Upload Image of Hall Of Famer");
      clearErrorMessage();
      window.scrollTo(0, 0);
      return;
    }
    //
    setLoading(true);
    //
    try {
      const file = await addImage(e.target.image.files[0]);
      //
      const body = {
        name: hall0fFamerForm.name,
        bio: hall0fFamerForm.bio,
        image: file.$id,
      };
      const newHallOfFamer = await db.hall0fFamers.create(body);
      //
      setHall0fFamers((prev) => [newHallOfFamer, ...prev]);
      setIsHall0fFamersFormOpen(false);
      resetFormInfo();
    } catch (error) {
      setErrorMessage(error.message);
      clearErrorMessage();
    } finally {
      setLoading(false);
    }
  };

  const updateHallOfFamer = async (e) => {
    e.preventDefault();
    //
    setLoading(true);
    //
    try {
      let newImageResult;

      if (e.target.image.files[0]) {
        // ADD NEW FILE
        newImageResult = await addImage(e.target.image.files[0]);
        // DELETE PREV IMAGE
        await deleteImageFile(
          hall0fFamers.find(
            (hallOfFamer) =>
              hallOfFamer.$id === idOfHallOfFamerToUpdate.current,
          ).image,
        );
      }
      //
      const body = {
        name: hall0fFamerForm.name,
        bio: hall0fFamerForm.bio,
        ...(newImageResult && { image: newImageResult.$id }),
      };
      const hallOfFamerId = idOfHallOfFamerToUpdate.current;
      const updatedHallOfFamerInfo = await db.hall0fFamers.update(
        hallOfFamerId,
        body,
      );
      setHall0fFamers((prevhallOfFamers) => {
        const updatedPrevHallOfFamers = prevhallOfFamers.filter(
          (person) => person.$id !== hallOfFamerId,
        );
        return [updatedHallOfFamerInfo, ...updatedPrevHallOfFamers];
      });
      idOfHallOfFamerToUpdate.current = null;
      setIsHall0fFamersFormOpen(false);
    } catch (error) {
      setErrorMessage(error.message);
      clearErrorMessage();
    } finally {
      setLoading(false);
    }
  };

  const deleteHallOfFamer = async (e, id) => {
    // get image id for the halloffamer we want to delete, delete the image and then delete the hallfamer
    const deletedHallOfFamerImageId = hall0fFamers.find(
      (hall0fFamer) => hall0fFamer.$id === e.target.dataset.id,
    ).image;
    deleteImageFile(deletedHallOfFamerImageId);
    await db.hall0fFamers.delete(id);
    setHall0fFamers((prevHallOfFamers) =>
      prevHallOfFamers.filter((hall0fFamer) => hall0fFamer.$id !== id),
    );
  };

  const setupHallOfFamerUpdate = (e) => {
    setIsUpdateHall0fFamers(true);
    setIsHall0fFamersFormOpen(true);
    // get the information of the halloffamer we want to update and populate the form
    const hallOfFamerToUpdate = hall0fFamers.find(
      (hallOfFamer) => hallOfFamer.$id === e.target.dataset.id,
    );
    idOfHallOfFamerToUpdate.current = e.target.dataset.id;
    setHall0fFamersForm({
      name: hallOfFamerToUpdate.name,
      bio: hallOfFamerToUpdate.bio,
    });
  };

  //   RUN THE INIT FUNCTION ONCE WHEN THIS COMPONENT MOUNTS
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <AdminHeader
        isFormOpen={isHall0fFamersFormOpen}
        openForm={setIsHall0fFamersFormOpen}
        resetForm={closeAndResetForm}
        text={"Add new Hall Of Famer"}
      />
      <section
        className={`tableContainer ${isHall0fFamersFormOpen ? "hidden" : ""}`}
      >
        {hall0fFamers?.length === 0 ? (
          <div>
            <h2 className="emptyList">NO HALL OF FAMER</h2>
          </div>
        ) : (
          <table>
            <thead>
              <tr className="bg-gray-100">
                <th className="tableItem">ID</th>
                <th className="tableItem">Hall Of Famer</th>
                <th className="tableItem">Name</th>
                <th className="tableItem">Bio</th>
                <th className="tableItem">Update</th>
                <th className="tableItem">Delete</th>
              </tr>
            </thead>
            <tbody>
              {hall0fFamers?.map((hall0fFamer, index) => (
                <tr
                  key={hall0fFamer.$id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="tableItem">{index + 1}</td>
                  <td className="tableItem">
                    <img
                      className="imgItem"
                      src={`https://cloud.appwrite.io/v1/storage/buckets/${import.meta.env.VITE_BUCKET_ID}/files/${hall0fFamer.image}/view?project=${import.meta.env.VITE_PROJECT_ID}`}
                      alt=""
                    />
                  </td>
                  <td className="tableItem">{hall0fFamer.name}</td>
                  <td className="tableItem">
                    {textReducer(hall0fFamer.bio, 10)}
                  </td>
                  <td className="tableItem">
                    <i
                      onClick={setupHallOfFamerUpdate}
                      data-id={hall0fFamer.$id}
                      className="bi bi-pen text-softBlue"
                    ></i>
                  </td>
                  <td className="tableItem">
                    <i
                      onClick={(e) => deleteHallOfFamer(e, hall0fFamer.$id)}
                      data-id={hall0fFamer.$id}
                      className="bi bi-trash text-red-500"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      <form
        onSubmit={
          !isUpdateHall0fFamers ? addHallOfFamer : (e) => updateHallOfFamer(e)
        }
        className={`adminForm ${!isHall0fFamersFormOpen ? "hidden" : "flex"}`}
      >
        {errorMessage && (
          <ErrorContainer
            errorMessage={errorMessage}
            clearErrorMessage={setErrorMessage}
          />
        )}
        <div>
          <label className="formLabel" htmlFor="hallOfFamerName">
            Executive Name
          </label>
          <input
            onChange={handleInputChange}
            name="name"
            className="formInput"
            id="hallOfFamerName"
            type="text"
            placeholder="Name oF Hall Of Famer"
            required
            value={hall0fFamerForm.name}
          />
        </div>
        <div>
          <label className="formLabel" htmlFor="hallOfFamerBio">
            Executive Position
          </label>
          <textarea
            className="formTextarea"
            placeholder="Bio"
            value={hall0fFamerForm.bio}
            onChange={handleInputChange}
            name="bio"
            id="hallOfFamerBio"
            type="text"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <input
            onChange={handleFileChange}
            className="hidden"
            name="image"
            id="eventPhoto"
            accept=".jpg, .jpeg, .png"
            type="file"
          />
          <label className="imageInputContainer" htmlFor="eventPhoto">
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <div>
                <i className="bi bi-upload"></i>
              </div>
              {fileName ? (
                <p className="mt-2 text-sm text-green-600">
                  File selected:{" "}
                  <span className="font-semibold">{fileName}</span>
                </p>
              ) : (
                <div>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-center text-xs text-gray-500">PNG, JPG</p>
                </div>
              )}
            </div>
          </label>
        </div>
        <SubmitButton
          formDisabled={formDisabled}
          loading={loading}
          isUpdate={isUpdateHall0fFamers}
          text={"Hall Of Famer"}
        />
      </form>
    </>
  );
};

export default HallOfFame;
