import React, { useState } from 'react';
import './style.css';
import Result from '../result/result';

function MyForm() {
  const [formData, setFormData] = useState({
    myName: '',
    babeName: '',
    myState: '',
    babeState: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.myName === '' || formData.babeName === '' || formData.myState === '' || formData.babeState === '') {
      alert('That is why they will cheat on you, fill the form complete, pay attention to details.');
      return;
    }
    setShowModal(true);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          My Name:
          <input type="name" name="myName" value={formData.myName} onChange={handleChange} />
        </label>
        <label>
          Partner's Name:
          <input type="name" name="babeName" value={formData.babeName} onChange={handleChange} />
        </label>
        <label>
          My State:
          <input type="text" name="myState" value={formData.myState} onChange={handleChange} />
        </label>
        <label>
          Partner's State:
          <input type="text" name="babeState" value={formData.babeState} onChange={handleChange} />
        </label>
        <button type="submit">Check Loyalty</button>
      </form>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p style={{textAlign: "right", color: "#ffffff"}} onClick={() => setShowModal(false)}>&times;</p>
            <Result formData={formData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyForm;
