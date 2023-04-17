import "./allPeeps.css";
const AllPeeps = ({ peeps }) => {
  const allPeeps = peeps.map((singlePeep) => {
    const formattedTime = new Date(singlePeep.createdAt).toLocaleDateString();
    if (!peeps) return <div>Loading peeps . . .</div>;
    return (
      <div className="peep-card" key={singlePeep._id}>
        <div>
          <h5>
            <strong>{singlePeep.peepTitle}</strong>
          </h5>
          <p>{singlePeep.peepContent}</p>
        </div>
        <div>
          Posted by: {singlePeep.userHandle.name}
          <span className="date"> , {formattedTime}</span>
        </div>
      </div>
    );
  });

  // const { peep } = peeps;
  // if (peep) {
  //   const displayPeep = peep.map((currentPeep) => {
  //     <div className="peep-card" key={currentPeep._id}>
  //       <Peep peep={currentPeep} />
  //       <h5>
  //         {console.log(currentPeep)}
  //         {currentPeep.userHandle}
  //         <strong>{currentPeep.peepTitle}</strong>
  //         {currentPeep._id}
  //       </h5>
  //       <p>{currentPeep.peepContent}</p>
  //       <span>{currentPeep.createdAt}</span>
  //     </div>;
  //     return displayPeep;
  //   });
  // }

  return <div className="container">{allPeeps}</div>;
};

export default AllPeeps;
