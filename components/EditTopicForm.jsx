import React from "react";

const EditTopicForm = ({ data, setFormData,handleSubmit}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        value={data.title}
        name="title"
        onChange={handleChange}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        value={data.description}
        name="description"
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6"
      >
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
