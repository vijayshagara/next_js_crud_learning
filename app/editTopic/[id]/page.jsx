"use client";
import React, { useState, useEffect } from "react";
import EditTopicForm from "@/components/EditTopicForm";

const EditTopic = ({ params }) => {
  const { id } = params;
  const [singleData, setsingleData] = useState({
    title: "",
    description: "",
  });

  const getdata = async () => {
    try {
      if (id) {
        const response = await fetch(`/api/topics/${id}`);
        const data = await response.json();
        console.log("🚀 ~ getdata ~ data:", data);
        if (data) {
          setsingleData({
            title: data.title || "",
            description: data.description || "",
          });
        }
      }
    } catch (error) {
      console.log("🚀 ~ getdata ~ error:", error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        body: JSON.stringify(singleData),
      });
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getdata();
  }, [id]);

  return (
    <div>
      <EditTopicForm data={singleData} setFormData={setsingleData} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default EditTopic;
