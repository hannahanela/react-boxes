import React, { useState } from "react";

/** Form for creating a new box
 * Prop:
 *  - submitItem -- on submission, sends data to parent
 *
 * Has state for backgroundColor, height, width;
 *
 * BoxList -> NewBoxForm
 */
function NewBoxForm({ submitBox }) {
  const initialState = {
    backgroundColor: "",
    height: "",
    width: "",
  };
  const [formData, setFormData] = useState(initialState);

  /** Send BackgroundColor, height, width to parent and clear form */
  function handleSubmit(evt) {
    evt.preventDefault();
    submitBox(formData);
    setFormData(initialState);
  }

  /**Update form state with updated inputs */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }
  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}
export default NewBoxForm;
