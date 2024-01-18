import React, { useState } from 'react';
import Navbar from './Navbar';

const Yield = () => {
  const [genotypeInput, setGenotypeInput] = useState('');
  const [predictionResult, setPredictionResult] = useState(Array(6).fill(''));

  const submitGenotype = async () => {
    // Validate input length
    if (genotypeInput.length !== 48) {
      alert("Please enter exactly 48 characters.");
      return;
    }

    // Validate input characters
    const validCharacters = /^[ATGCatgc]*$/;
    if (!validCharacters.test(genotypeInput)) {
      alert("Invalid characters. Please use only A, T, G, C.");
      return;
    }

    // Map genotype to numbers
    const genoMap = {
      AA: 1,
      AT: 2,
      AG: 3,
      AC: 4,
      TT: 5,
      TG: 6,
      TC: 7,
      GG: 8,
      CG: 9,
      CC: 10,
    };

    // Convert genotype to numbers
    const numericGenotype = [];
    for (let i = 0; i < genotypeInput.length; i += 2) {
      const pair = genotypeInput.slice(i, i + 2).toUpperCase();
      numericGenotype.push(genoMap[pair]);
    }

    try {
      // Send the numeric genotype array to the backend
      const response = await fetch("https://mvproject678.pythonanywhere.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ip: numericGenotype }),
      });

      if (response.ok) {
        const data = await response.json();

        // Check if the "preds" key exists
        if (data && data.preds) {
          setPredictionResult(data.preds);
        } else {
          console.error("Invalid response format. Missing 'preds' key.");
        }
      } else {
        console.error("Error fetching predictions:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  const handleInputChange = (e) => {
    setGenotypeInput(e.target.value);
  };

  const traits = [
    'Grain Weight per Spike (GWPS)',
    'Plant Height (PH)',
    'Grain Yield (GY)',
    'Days to Heading (DH)',
    'Grain Filling Duration (GFD)',
    'Grain Number Per Spike (GNPS)'
  ];

  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1></h1>
        <label htmlFor="genotypeInput">Enter Genotype (48 characters): </label>
        <input
          type="text"
          id="genotypeInput"
          value={genotypeInput}
          onChange={handleInputChange}
          maxLength={48}
          pattern="[ATGCatgc]*"
          required
        />
        <button onClick={submitGenotype}>Submit</button>
      </div>
      {predictionResult.length > 0 && (
        <div id="predi">
          <h2 id="pre">Prediction Results</h2>
          <table>
            <thead>
              <tr>
                <th>Trait Name</th>
                <th>Predicted Value</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <tr key={index}>
                  <td>{traits[index - 1]}</td>
                  <td>{predictionResult[index - 1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Yield;
