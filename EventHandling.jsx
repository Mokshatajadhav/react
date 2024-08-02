import React, { useEffect } from "react";
import { useState } from "react";

const EventHandling = () => {
  const [name, setName] = useState("initial value");
  const [roll, setroll] = useState("initial value");
  const [batchDetails, setbatchDetails] = useState("initial value");
  function handlerOnChange(event) {
    //   console.log(event.target.value);
    setName(event.target.value);
    console.log(name);
  }
//   return (
//     <div>
//       <input type="text" onChange={handlerOnChange} />
//       <p>{name}</p>
//       <input
//         type="text"
//         onChange={(event) => {
//           setroll(event.target.value);
//         }}
//       />
//       <p>{roll}</p>
//       <input type="text" onChange={handlerOnChange} />
//       <p>{batchDetails}</p>
//     </div>
//   );
};

// export default EventHandling;

// useEffect(()  => {
//     alert("useeffect is running...")
// }, [name]);