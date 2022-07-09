import { useState } from "react";
import "./BioPage.css";

function BioPage() {
  const [data, setdata] = useState({
    name: "",
    gender: "male",
    location: "",
    school: "",
    major: "",
    occupation: "",
    religious: "",
    reason: "",
  });

  const handleInput = (e) => {
    // console.log(e)
    const { id, value } = e.target;
    // console.log(id, value)

    setdata({ ...data, [id]: value });

    // console.log(data)
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    // console.log(id, value)
    setdata({ ...data, [id]: value });
    // console.log(data)
  };

  return (

    <>
            <div className="head">
              <b>Bio Generator</b>
            </div>
    
      <div id="mainBox">
          <div>
            <div className="middle">
              <div className="options">
                <h1>Options</h1>
              </div>
              <div className="option">
                <span>
                  <span>
                    {" "}
                    Name
                    <input
                      type="text"
                      id="name"
                      value={data.name}
                      onInput={handleInput}
                    ></input>
                  </span>
                  <span>
                    Gender
                    <select id="gender" onChange={handleChange}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </span>
                  <span>
                    <button className="random">Random Name</button>
                  </span>
                </span>
              </div>
              <div className="option">
                <span>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>
                    Location
                    <input
                      type="text"
                      id="location"
                      value={data.location}
                      onInput={handleInput}
                    ></input>{" "}
                  </span>
                  <span>
                    <button className="random">Random location</button>
                  </span>
                </span>
              </div>
              <div className="option">
                <span>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>
                    School
                    <input
                      type="text"
                      id="school"
                      value={data.school}
                      onInput={handleInput}
                    ></input>{" "}
                  </span>
                  <span>
                    <button className="random">Random School</button>
                  </span>
                </span>
                <span>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <br></br>
                  <span>
                    Major
                    <input
                      type="text"
                      id="major"
                      value={data.major}
                      onInput={handleInput}
                    ></input>{" "}
                  </span>
                  <span>
                    <button className="random">Random Major</button>
                  </span>
                </span>
              </div>
              <div className="option">
                <span>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>
                    Occupation
                    <input
                      type="text"
                      id="occupation"
                      value={data.occupation}
                      onInput={handleInput}
                    ></input>{" "}
                  </span>
                  <span>
                    <button className="random">Random Occu.</button>
                  </span>
                </span>
              </div>
              <div className="roption">
                <span>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>
                    Religious Background
                    <textarea
                      rows="5"
                      cols="60"
                      name="description"
                      type="text"
                      id="religious"
                      value={data.religious}
                      onInput={handleInput}
                    ></textarea>{" "}
                  </span>
                  <span>
                    <button className="random">Random Religion</button>
                  </span>
                </span>
              </div>
              <div className="roption">
                <span>
                  <span>
                    <input type="checkbox"></input>
                  </span>
                  <span>
                    Reason for meeting with Missionaries
                    <textarea
                      placeholder=""
                      rows="5"
                      cols="60"
                      name="description"
                      id="reason"
                      value={data.reason}
                      type="text"
                      onInput={handleInput}
                    ></textarea>{" "}
                  </span>
                  <span>
                    <button className="random">Random Reason</button>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div>
                <h1 className="result">Result</h1>

                <div className="resultBox">
                  <p className="dataShow">
                  {data.name} is from {data.location}. {(data.gender) == 'male' ? 'He' : 'She'} is studying {data.major} at {data.school} . {(data.gender) == 'male' ? 'He' : 'She'} currently works as a {data.occupation}. {(data.gender) == 'male' ? 'He' : 'She'} was raised {data.religious} . {(data.gender) == 'male' ? 'He' : 'She'} {data.reason} .
                  </p>
                </div>
          </div>

      </div>

    </>


  );
}

export default BioPage;
