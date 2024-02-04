import './App.css'
import {useState} from 'react';

function App() {

  const [details, setDetails] = useState({
    name : '',
    description : '',
    interests : ['', '', ''],
  });

  const handleNameChange = (e) => {
    setDetails((prevDetails) => ({...prevDetails, name : e.target.value}));
  };

  const handleDescriptionChange = (e) => {
    setDetails((prevDetails) => ({...prevDetails, description : e.target.value}));
  };

  const handleInterestChange = (e, index) => {
    const spread = [...details.interests];
    spread[index] = e.target.value;
    setDetails((prevDetails) => ({...prevDetails, interests : spread}))
  }

  return (
    <div>
      <label>Name :</label>
      <input type="text" value={details.name} onChange={handleNameChange}></input>
      <br/>

      <label>Description :</label>
      <input type="text" value={details.description} onChange={handleDescriptionChange}></input>
      <br/>

      <label>Interest 1 :</label>
      <input type="text" value={details.interests[0]} onChange={ (e) => handleInterestChange(e,0)}></input>
      <br/>

      <label>Interest 2 :</label>
      <input type="text" value={details.interests[1]} onChange={ (e) => handleInterestChange(e,1)}></input>
      <br/>

      <label>Interest 3 :</label>
      <input type="text" value={details.interests[2]} onChange={ (e) => handleInterestChange(e,2)}></input>
      <br/>

      <BusinessCard details={details}></BusinessCard>
    </div>
  )
}

function BusinessCard({details}){
  return (
    <div>
    <h1>{details.name}</h1>
    <p>{details.description}</p>
    <h3>Interest</h3>
    <ul> 
      {details.interests.map((interest,index) => (
      <li key={index}>{interest}</li>
    ))}
    </ul>
    <a>LinkedIn</a>
    <a>Twitter</a>
  </div>
  );
}

export default App