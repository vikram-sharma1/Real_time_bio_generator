import axios from "axios";
import { useState, useEffect } from "react";
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


  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  

  const [location, setlocation] = useState(!false);
  const [school, setSchool] = useState(!false);
  const [major, setMajor] = useState(!false);
  const [occupation, setOccupation] = useState(!false);
  const [religion, setReligion] = useState(!false);
  const [reason, setReason] = useState(!false);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setdata({ ...data, [id]: value });
  };

  const handleCheckbox = (e) => {
    const { id, value } = e.target;

    // console.log(id)
    const checked = e.target.checked;
    if (checked) {
      if (id == "locationCheck") {
        setlocation(false);
      } else if (id == "schoolCheck") {
        setSchool(false);
      } else if (id == "majorCheck") {
        setMajor(false);
      } else if (id == "occupationCheck") {
        setOccupation(false);
      } else if (id == "religionCheck") {
        setReligion(false);
      } else if (id == "reasonCheck") {
        setReason(false);
      }
    } else if (!checked) {
      if (id == "locationCheck") {
        setlocation(true);
      } else if (id == "schoolCheck") {
        setSchool(true);
      } else if (id == "majorCheck") {
        setMajor(true);
      } else if (id == "occupationCheck") {
        setOccupation(true);
      } else if (id == "religionCheck") {
        setReligion(true);
      } else if (id == "reasonCheck") {
        setReason(true);
      }
    }
  };

  const getRandom = (e) => {
    // console.log(e)

    const { name } = e.target;

    var num = Math.floor(Math.random() * 7);

    if (name == "location") {
      axios
        .get(`https://bio-db.herokuapp.com/randomLocation/?id=${num}`)
        .then((res) => {
          setdata({ ...data, location: res.data[0].name });
        });
    } 
    else if (name == "name") {
      axios.get(`https://bio-db.herokuapp.com/randomName/?id=${num}`).then((res) => {
        setdata({
          ...data,
          name: res.data[0].name,
          gender: res.data[0].gender,
        });
      });
    } 
    else if (name == "school") {
      axios.get(`https://bio-db.herokuapp.com/randomSchool/?id=${num}`).then((res) => {
        setdata({ ...data, school: res.data[0].name });
      });
    } 
    else if (name == "major") {
      axios.get(`https://bio-db.herokuapp.com/randomMajor/?id=${num}`).then((res) => {
        setdata({ ...data, major: res.data[0].name });
      });
    } 
    else if (name == "major") {
      axios.get(`https://bio-db.herokuapp.com/randomMajor/?id=${num}`).then((res) => {
        setdata({ ...data, major: res.data[0].name });
      });
    } else if (name == "occupation") {
      axios
        .get(`https://bio-db.herokuapp.com/randomOccupation/?id=${num}`)
        .then((res) => {
          setdata({ ...data, occupation: res.data[0].name });
        });
    } 
    else if (name == "religion") {
      axios
        .get(`https://bio-db.herokuapp.com/randomReligious/?id=${num}`)
        .then((res) => {
          setdata({ ...data, religious: res.data[0].name });
        });
    } 
    else if (name == "reason") {
      axios.get(`https://bio-db.herokuapp.com/randomReason/?id=${num}`).then((res) => {
        setdata({ ...data, reason: res.data[0].name });
      });
    }
  };



  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"


 


    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate', params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => {
      // console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        // console.log(res.data);
        setOptions(res.data);
      });
  }, []);


  // console.log(output)
  
  

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
                  <select id="gender" onChange={handleInput}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </span>
                <span>
                  <button className="random" name="name" onClick={getRandom}>
                    Random Name
                  </button>
                </span>
              </span>
            </div>
            <div className="option">
              <span>
                <span>
                  <input
                    type="checkbox"
                    id="locationCheck"
                    onChange={handleCheckbox}
                  ></input>
                </span>
                <span>
                  Location
                  <input
                    type="text"
                    id="location"
                    value={data.location}
                    onInput={handleInput}
                    disabled={location}
                  ></input>
                </span>
                <span>
                  <button
                    className="random"
                    disabled={location}
                    name="location"
                    onClick={getRandom}
                  >
                    Random location
                  </button>
                </span>
              </span>
            </div>
            <div className="option">
              <span>
                <span>
                  <input
                    type="checkbox"
                    id="schoolCheck"
                    onChange={handleCheckbox}
                  ></input>
                </span>
                <span>
                  School
                  <input
                    type="text"
                    id="school"
                    value={data.school}
                    onInput={handleInput}
                    disabled={school}
                  ></input>
                </span>
                <span>
                  <button
                    className="random"
                    disabled={school}
                    name="school"
                    onClick={getRandom}
                  >
                    Random School
                  </button>
                </span>
              </span>
              <span>
                <br></br>
                <span>
                  <input
                    type="checkbox"
                    id="majorCheck"
                    onChange={handleCheckbox}
                  ></input>
                </span>

                <span>
                  Major
                  <input
                    type="text"
                    id="major"
                    value={data.major}
                    onInput={handleInput}
                    disabled={major}
                  ></input>
                </span>
                <span>
                  <button
                    className="random"
                    disabled={major}
                    name="major"
                    onClick={getRandom}
                  >
                    Random Major
                  </button>
                </span>
              </span>
            </div>
            <div className="option">
              <span>
                <span>
                  <input
                    type="checkbox"
                    id="occupationCheck"
                    onChange={handleCheckbox}
                  ></input>
                </span>
                <span>
                  Occupation
                  <input
                    type="text"
                    id="occupation"
                    value={data.occupation}
                    onInput={handleInput}
                    disabled={occupation}
                  ></input>
                </span>
                <span>
                  <button
                    className="random"
                    disabled={occupation}
                    name="occupation"
                    onClick={getRandom}
                  >
                    Random occu.
                  </button>
                </span>
              </span>
            </div>
            <div className="roption">
              <span>
                <span>
                  <input
                    type="checkbox"
                    id="religionCheck"
                    onChange={handleCheckbox}
                  ></input>
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
                    disabled={religion}
                  ></textarea>
                </span>
                <span>
                  <button
                    className="random"
                    disabled={religion}
                    name="religion"
                    onClick={getRandom}
                  >
                    Random Religion
                  </button>
                </span>
              </span>
            </div>
            <div className="roption">
              <span>
                <span>
                  <input
                    type="checkbox"
                    id="reasonCheck"
                    onChange={handleCheckbox}
                  ></input>
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
                    disabled={reason}
                  ></textarea>
                </span>
                <span>
                  <button
                    className="random"
                    disabled={reason}
                    name="reason"
                    onClick={getRandom}
                  >
                    Random Reason
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="result">Result</h1>

          <div className="resultBox">
            <p className="dataShow" id="finalResult" >
              {data.name} is from {data.location}.{" "}
              {data.gender == "male" ? "He" : "She"} is studying {data.major} at{" "}
              {data.school} . {data.gender == "male" ? "He" : "She"} currently
              works as a {data.occupation}.{" "}
              {data.gender == "male" ? "He" : "She"} was raised {data.religious}{" "}
              . {data.gender == "male" ? "He" : "She"} {data.reason} .
            </p>
          </div>

          {/* Google Translate  */}

          <div className="resultBox">
          <div className="resultBox">
            <b>Copy and paste your bio here and translate in which language you want</b>
            <br></br>
            From ({from}) :
            <select onChange={(e) => setFrom(e.target.value)}>
              {options.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
            To ({to}) :
            <select onChange={(e) => setTo(e.target.value)}>
              {options.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
          <div className="resultBox">

            <textarea
              cols="50"
              rows="8"
              onInput={(e) => setInput(e.target.value)}
            > </textarea>
          </div>
          <div className="resultBox">
            <textarea cols="50" rows="8" value={output}></textarea>
          </div>
          <div>
            <button style={{marginLeft:'40%'}} onClick={e => translate()}>Translate</button>
            {/* <button onClick={inputTrans}>Translate</button> */}
          </div>
          

                




        </div>



        </div>
      </div>
    </>
  );
}

export default BioPage;
