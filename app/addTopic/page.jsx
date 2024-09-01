"use client"
import React, { useState } from "react";

const addTopic = () => {
  let [postdata,setPostData] = useState({
      title:"",
      description:""
  })
  const handleChange = ({e,type})=>{
   if(type=='title'){
    postdata.title = e.target.value
   }
   if(type=='dis'){
    postdata.description = e.target.value
   }
   return postdata
  }

  const handleSubmit = (e)=>{
    try {
      e.preventDefault()
      const respponse = fetch('http://localhost:3000/api/topics', {
              method: 'POST',
              body:JSON.stringify(postdata),
          })
          console.log("res",respponse);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        onChange={(e)=>handleChange({e,type:'title'})}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      onChange={(e)=>handleChange({e,type:"dis"})}
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6">
        Add Topic
      </button>
    </form>
  );
};

export default addTopic;
