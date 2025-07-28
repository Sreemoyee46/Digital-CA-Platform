import React, { useState } from 'react';

function DocumentUpload() {
  const [files, setFiles] = useState({
    pan: null,
    gst: null,
    itReturn: null,
  });

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0],
    }));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    alert('Files uploaded! (This is a prototype with no backend)');
  };

  return (
    <section className="document-upload">
      <h3>Upload Documents</h3>
      <form onSubmit={handleUpload}>
        <label>
          PAN Document:
          <input type="file" name="pan" onChange={handleFileChange} />
          {files.pan && <span>{files.pan.name}</span>}
        </label>
        <label>
          GST Document:
          <input type="file" name="gst" onChange={handleFileChange} />
          {files.gst && <span>{files.gst.name}</span>}
        </label>
        <label>
          IT Return Document:
          <input type="file" name="itReturn" onChange={handleFileChange} />
          {files.itReturn && <span>{files.itReturn.name}</span>}
        </label>
        <button type="submit" className="btn-primary">Upload</button>
      </form>
    </section>
  );
}

export default DocumentUpload;
