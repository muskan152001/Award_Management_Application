import React, { useState } from "react";

const Form = ({ onSubmit, onEdit, awardToEdit }) => {
  const [title, setTitle] = useState(awardToEdit ? awardToEdit.title : "");
  const [description, setDescription] = useState(awardToEdit ? awardToEdit.description : "");
  const [requirements, setRequirements] = useState(awardToEdit ? awardToEdit.requirements : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const awardData = { title, description, requirements };
    if (awardToEdit) {
      onEdit({ ...awardToEdit, ...awardData });
    } else {
      onSubmit(awardData);
    }
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setRequirements(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Award Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Award Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Number of Requirements"
        value={requirements}
        onChange={(e) => setRequirements(parseInt(e.target.value))}
        required
      />
      <button type="submit">{awardToEdit ? "Update Award" : "Add Award"}</button>
      <button type="button" onClick={resetForm}>
        Clear
      </button>
    </form>
  );
};

export default Form;