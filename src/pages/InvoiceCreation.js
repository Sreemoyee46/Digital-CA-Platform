import React, { useState } from 'react';

function InvoiceCreation() {
  const [invoiceData, setInvoiceData] = useState({
    clientName: '',
    invoiceNumber: '',
    date: '',
    items: [{ description: '', quantity: 1, price: 0 }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...invoiceData.items];
    newItems[index][name] = name === 'quantity' || name === 'price' ? Number(value) : value;
    setInvoiceData((prev) => ({ ...prev, items: newItems }));
  };

  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, { description: '', quantity: 1, price: 0 }],
    }));
  };

  const removeItem = (index) => {
    const newItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData((prev) => ({ ...prev, items: newItems }));
  };

  const totalAmount = invoiceData.items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Invoice created! (This is a prototype with no backend)');
  };

  return (
    <div className="invoice-creation-container">
      <h2 style={{ color: '#0056b3', marginBottom: 18 }}>Invoice Creation</h2>
      <form onSubmit={handleSubmit} className="invoice-form">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 18 }}>
          <label>
            Client Name
            <input
              type="text"
              name="clientName"
              value={invoiceData.clientName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Invoice Number
            <input
              type="text"
              name="invoiceNumber"
              value={invoiceData.invoiceNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date
            <input
              type="date"
              name="date"
              value={invoiceData.date}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <hr style={{ border: 'none', borderTop: '1.5px solid #d1e3fa', margin: '18px 0' }} />
        <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend style={{ color: '#0056b3', fontWeight: 600, fontSize: '1.01rem', marginBottom: 8 }}>Items</legend>
          {invoiceData.items.map((item, index) => (
            <div key={index} className="invoice-item">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
              <input
                type="number"
                name="quantity"
                min="1"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                value={item.price}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
              <button type="button" onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addItem} style={{ marginTop: 8, marginBottom: 8, background: '#e3f0ff', color: '#0056b3', borderRadius: 6, border: 'none', fontWeight: 600, padding: '7px 16px', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}>
            Add Item
          </button>
        </fieldset>
        <div className="total-amount">Total: ₹{totalAmount.toFixed(2)}</div>
        <button type="submit" className="btn-primary">
          Create Invoice
        </button>
      </form>
    </div>
  );
}

export default InvoiceCreation;
