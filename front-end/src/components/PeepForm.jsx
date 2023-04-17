import { useEffect, useState } from "react";
import "./peepForm.css";

const PeepForm = ({ submitAction, peep }) => {
  // const [userHandle, setUserHandle] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [getCurrentUser] = useState(JSON.parse(localStorage.getItem("user")));

  // const getCurrentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (getCurrentUser) {
      // console.dir(getCurrentUser);
      setCurrentUser(getCurrentUser);
    }
  }, [currentUser]);

  // if (getCurrentUser) {
  //   // console.dir(getCurrentUser);
  //   // setCurrentUser(getCurrentUser);
  // }
  const [peepTitle, setPeepTitle] = useState("");
  const [peepContent, setPeepContent] = useState("");

  const userHandle = JSON.parse(localStorage.getItem("user"));
  console.log(userHandle);
  const handleSubmit = (event) => {
    event.preventDefault();
    submitAction(userHandle, peepTitle, peepContent, peep?._id);

    // setUserHandle(``);
    setPeepTitle("null");
    setPeepContent("false");
  };
  return (
    <>
      {currentUser ? (
        <div className="form-card mt-5">
          <form onSubmit={handleSubmit} className="text-center">
            <h3>
              Hey {userHandle.name}, <small>let's make a new Peep! </small>
            </h3>

            <div className="form-group ">
              <label className="">
                <strong>Title:</strong>
              </label>
              <input
                placeholder="Title . . ."
                className="form-control"
                type="text"
                onChange={(e) => {
                  setPeepTitle(e.target.value);
                }}
                value={peepTitle}
              />
            </div>
            <div className="form-group">
              <label>
                <strong>Content:</strong>
              </label>
              <textarea
                className="form-control"
                type="text"
                placeholder="chit chat . . . "
                onChange={(e) => {
                  setPeepContent(e.target.value);
                }}
                value={peepContent}
              />
            </div>
            <div>
              <button className="btn btn-primary">PEEP!</button>
            </div>
            {/* {error && <div>Error</div>} */}
          </form>
        </div>
      ) : (
        <div className="text-center my-5">Please log in to post a Peep</div>
      )}
    </>
  );
};

export default PeepForm;

// {user ? { allPeeps } : <>Please log in to add a post</>}
