import React, { useState } from 'react';

function DataInputForm() {
  const [formData, setFormData] = useState({
    gstNumber: '',
    panNumber: '',
    tdsAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Data submitted! (This is a prototype with no backend)');
  };

  return (
    <section className="data-input-form">
      <h3>Input GST, PAN, TDS Data</h3>
      <form onSubmit={handleSubmit}>
        <label>
          GST Number:
          <input
            type="text"
            name="gstNumber"
            value={formData.gstNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          PAN Number:
          <input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          TDS Amount:
          <input
            type="number"
            name="tdsAmount"
            value={formData.tdsAmount}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </label>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </section>
  );
}

export default DataInputForm;
