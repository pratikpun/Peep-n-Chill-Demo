// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import PeepModel from "../utils/Peep.model";
// import PeepForm from "../PeepForm";

// const AddPeepForm = ({ submitAction, data }) => {
//   const [peep, setPeep] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const navigate = useNavigate();
//   const { _id } = useParams();

//   useEffect(() => {
//     if (!_id) return setPeep({});
//     const peepData = data?.find((currentTodo) => currentTodo._id === _id);
//     if (peepData) return setPeep(peepData);
//     setPeep({ error: `Peep could not be found` });
//   }, [_id, data]);

//   useEffect(() => {
//     if (submitted) navigate("/");
//   }, [submitted, navigate]);

//   const submitPeepForm = (userHandle, peepTitle, peepContent) => {
//     const PeepToSubmit = new PeepModel(userHandle, peepTitle, peepContent, _id);
//     submitAction(PeepToSubmit);
//     setSubmitted(true);
//   };

//   return (
//     <div>
//       <PeepForm submitAction={submitPeepForm} peep={peep?.error ? {} : peep} />
//     </div>
//   );
// };

// export default AddPeepForm;
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PeepModel from "../utils/Peep.model";
import PeepForm from "../PeepForm";

const AddPeepForm = ({ submitAction, data }) => {
  // const [userHandle, setUserHandle] = useState("");
  // const [peepTitle, setPeepTitle] = useState("");
  // const [peepContent, setPeepContent] = useState("");
  const [peep, setPeep] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { _id } = useParams();
  // const getUserHandle = () => {
  //   peep.map((userHandle) => setUserHandle(userHandle.userHandle));
  // };

  useEffect(() => {
    // console.log("HELLO");
    if (!_id) return setPeep({});
    const todoToEdit = data?.find((currentTodo) => currentTodo._id === _id);
    if (todoToEdit) return setPeep(todoToEdit);
    setPeep({ error: `Peep could not be found` });
  }, [_id, data]);

  useEffect(() => {
    if (submitted) navigate("/");
  }, [submitted, navigate]);

  const submitPeepForm = (userHandle, peepTitle, peepContent) => {
    const todoToSubmit = new PeepModel(userHandle, peepTitle, peepContent, _id);
    console.log(todoToSubmit);
    submitAction(todoToSubmit);
    setSubmitted(true);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const peep = { userHandle, peepTitle, peepContent };

  //   const response = await axios.post("/add", {
  //     method: "POST",
  //     body: JSON.stringify(peep),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();

  //   if (!response.ok) {
  //     setError(json.error);
  //   }
  //   if (response.ok) {
  //     setPeepTitle("");
  //     setPeepContent("");
  //     setError(null);
  //     console.log("New workout added, json");
  //   }
  // };
  return (
    <div>
      <div className="addEditTodo row"></div>
      <PeepForm submitAction={submitPeepForm} peep={peep?.error ? {} : peep} />
      {/* <form >
        <h3>Make a new Peep!</h3>
        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => {
            setPeepTitle(e.target.value);
          }}
          value={peepTitle}
        />
        <label>Content:</label>
        <input
          type="text"
          placeholder="chit chat . . . "
          onChange={(e) => {
            setPeepContent(e.target.value);
          }}
          value={peepContent}
        />
        <button>PEEP!</button>
        {error && <div>Error</div>}
      </form> */}
    </div>
  );
};

export default AddPeepForm;
