import { useState, useEffect, useRef } from "react";
import { db } from "../../appwrite/database";
import { textReducer } from "../textReducer";
import { Query } from "appwrite";
import { addImage } from "../reusable";
import { deleteImageFile } from "../reusable";
import ErrorContainer from "../ErrorContainer";
import AdminHeader from "./AdminHeader";
import SubmitButton from "./SubmitButton";


const EventSection = () => {
  // EVENT COMPONENT STATES
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isUpdateEvent, setIsUpdateEvent] = useState(false)
  const [eventForm, setEventForm] = useState({
    eventTitle: "",
    eventDate: "",
    eventDescription: "",
    eventId: "",
  })

  const formDisabled =
    !Object.values(eventForm).every((input) => input !== "") || loading;

  const timeoutIdRef = useRef(null)

  const idOfEventToUpdate = useRef(null);

  const handleEventFormChange = (e) => {
    const { name, value } = e.target;
    setEventForm({ ...eventForm, [name]: value })
  }

  // GET THE NAME  OF THE IMAGE ADMIN WANTS TO UPLOAD
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // GET ALL EVENTS FROM THE DATABASE AND SET THE ORDER ACCORIDING TO THE TIME THEY WERE UPDATED
  const init = async () => {
    const eventResponse = await db.events.list([Query.orderDesc("$updatedAt")]);
    setEvents(eventResponse.documents);
  };

  const resetFormInfo = () => {
    setEventForm({
      eventTitle: "",
      eventDate: "",
      eventDescription: "",
      // eventId: "",
    });
    setFileName(null);
  }

  const closeAndResetForm = () => {
    setIsEventFormOpen(false);
    setIsUpdateEvent(false);
    resetFormInfo();
  }

  const clearErrorMsg = () => {
    // Clear the previous timeout if any, before setting a new one
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    // Set a new timeout to clear the error message after 3 seconds
    timeoutIdRef.current = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
  }

  const updateEvent = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let newImageResult;

      if (e.target.image.files[0]) {
        // ADD NEW FILE
        newImageResult = await addImage(e.target.image.files[0]);
        // DELETE PREV IMAGE
        await deleteImageFile(
          events.find((event) => event.$id === idOfEventToUpdate.current).image
        );
      }

      const body = {
        title: eventForm.eventTitle,
        description: eventForm.eventDescription,
        date: eventForm.eventDate,
        // UPDATE THE IMAGE ID
        ...(newImageResult && { image: newImageResult.$id }),
      };
      const updatedEventResponse = await db.events.update(
        idOfEventToUpdate.current,
        body,
      );
      const currentEventToUpdateId = idOfEventToUpdate.current;
      setEvents((prevEvents) => {
        const updatedPrevEvents = prevEvents.filter(
          (event) => event.$id !== currentEventToUpdateId,
        );
        return [updatedEventResponse, ...updatedPrevEvents];
      });
      setIsEventFormOpen(false);
      // RESET FORM DATA
      resetFormInfo();
      idOfEventToUpdate.current = null;
    }
    catch (err) {
      if (err.message === "File size not allowed") {
        setErrorMessage("File size should not exceed 2MB");
        setFileName("");
      } else {
        setErrorMessage(err.message);
      }
      clearErrorMsg();
    }
    finally {
      setLoading(false);
    }
  }

  // SETUP UPDATE EVENT BY DISPLAYING EVENT FORM,  POPULATING INPUT FIELDS WITH THE RIGHT DATA.
  const setupEventUpdate = (e) => {
    setIsUpdateEvent(true);
    const event = events.find((event) => event.$id === e.target.dataset.id);
    idOfEventToUpdate.current = e.target.dataset.id;
    setIsEventFormOpen(true);
    setEventForm({
      eventTitle: event.title,
      eventDate: event.date.split("T")[0],
      eventDescription: event.description,
    });
  };

  // DELETE EVENTS FROM DATABSE
  const deleteEvent = async (e) => {
    const deletedEventImageId = events.find(event => event.$id === e.target.dataset.id).image
    await db.events.delete(e.target.dataset.id);
    deleteImageFile(deletedEventImageId)
    setEvents((prevEvents) => {
      return prevEvents.filter((item) => item.$id !== e.target.dataset.id);
    });
  };

  // ADD NEW EVENTS
  const addEvent = async (e) => {
    e.preventDefault();

    if (!e.target.image.files[0]) {
      setErrorMessage("Upload Event Image");
      window.scrollTo(0, 0);
      return;
    }

    setLoading(true);

    try {
      // save the image inside of bucket first
      const eventImage = await addImage(e.target.image.files[0]);
      // 
      const body = {
        title: eventForm.eventTitle,
        description: eventForm.eventDescription,
        date: eventForm.eventDate,
        image: eventImage.$id,
      };

      const eventResponse = await db.events.create(body);
      setEvents((prevEvents) => [eventResponse, ...prevEvents]);
      setIsEventFormOpen(false);
      // RESET FORM DATA
      resetFormInfo();


    } catch (err) {
      if (err.message === "File size not allowed") {
        setErrorMessage("File size should not exceed 2MB");
        setFileName("");
      } else {
        setErrorMessage(err.message);
      }
      clearErrorMsg()
    } finally {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    // INIT FUNCTION TO GET ALL THE EVENTS FROM THE DB IMMEDIATELY THE COMPONENT MOUNTS
    init();
  }, []);


  return (
    <>
      <AdminHeader
        isFormOpen={isEventFormOpen}
        openForm={setIsEventFormOpen}
        resetForm={closeAndResetForm}
        text={"Add new Event"}
      />

      <section className={`tableContainer ${isEventFormOpen ? "hidden" : ""}`}>
        {events?.length === 0 ? (
          <div>
            <h2 className="emptyList">NO EVENT</h2>
          </div>
        ) : (
          <table>
            <thead>
              <tr className="bg-gray-100">
                <th className="tableItem">Event Id</th>
                <th className="tableItem">Event Title</th>
                <th className="tableItem">Event Description</th>
                <th className="tableItem">Update</th>
                <th className="tableItem">Delete</th>
              </tr>
            </thead>
            <tbody>
              {events?.map((event, index) => (
                <tr
                  key={event.$id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="tableItem">{index + 1}</td>
                  <td className="tableItem">{event.title}</td>
                  <td className="tableItem text-nowrap">
                    {textReducer(event.description, 10)}
                  </td>
                  <td className="tableItem text-center">
                    <i
                      onClick={setupEventUpdate}
                      data-id={event.$id}
                      className="bi bi-pen text-softBlue"
                    ></i>
                  </td>
                  <td className="tableItem text-center">
                    <i
                      onClick={deleteEvent}
                      data-id={event.$id}
                      className="bi bi-trash text-red-500"
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
      {/* EVENT FORM SECTION*/}
      <form
        onSubmit={!isUpdateEvent ? addEvent : updateEvent}
        className={`adminForm ${!isEventFormOpen ? "hidden" : "flex"}`}
      >
        {errorMessage && (
          <ErrorContainer
            errorMessage={errorMessage}
            clearErrorMessage={setErrorMessage}
          />
        )}
        <div>
          <label className="formLabel" htmlFor="eventTitle">
            Event Title
          </label>
          <input
            onChange={handleEventFormChange}
            name="eventTitle"
            className="formInput"
            id="eventTitle"
            type="text"
            placeholder="Event Title"
            required
            value={eventForm.eventTitle}
          />
        </div>
        <div>
          <label className="formLabel" htmlFor="eventDate">
            Event Date
          </label>
          <input
            value={eventForm.eventDate}
            onChange={handleEventFormChange}
            name="eventDate"
            className="formInput"
            id="eventDate"
            type="date"
            required
          />
        </div>
        <div>
          <label className="formLabel" htmlFor="eventDescription">
            Event Description
          </label>
          <textarea
            value={eventForm.eventDescription}
            onChange={handleEventFormChange}
            name="eventDescription"
            className="formTextarea"
            id="eventDescription"
            placeholder="Event Description"
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
          <label
            className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400"
            htmlFor="eventPhoto"
          >
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
          isUpdate={isUpdateEvent}
          text={"Event"}
        />
      </form>
    </>
  );
};

export default EventSection;
