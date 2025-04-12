const AdminHeader = ({isFormOpen, openForm, resetForm, text}) => {
    return (
      <div className="mb-4 flex justify-end">
        {!isFormOpen ? (
          <>
            <button
              onClick={() => openForm(true)}
              className="addBtn block mobile:hidden"
            >
              {text}
              <i className="bi bi-plus font-bold"></i>
            </button>
            <button
              onClick={() => openForm(true)}
              className="addBtn hidden mobile:block"
            >
              <i className="bi bi-plus text-xl font-black"></i>
            </button>
          </>
        ) : (
          <button onClick={resetForm} className="closeFormBtn" type="button">
            <i className="bi bi-arrow-left mr-2"></i>
            Go Back
          </button>
        )}
      </div>
    );
}

export default AdminHeader;