"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const addTopic = () => {
  const {ORGIN_URL} = process.env
  let [postdata,setPostData] = useState({
      title:"",
      description:""
  })
  const router = useRouter();
  const handleChange = ({e,type})=>{
   if(type=='title'){
    postdata.title = e.target.value
   }
   if(type=='dis'){
    postdata.description = e.target.value
   }
   return postdata
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/topics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ensure the content type is set for JSON data
        },
        body: JSON.stringify(postdata),
      });

      if (response.ok) {
        // If the request is successful, navigate to the home page
        router.push('/');
      } else {
        console.error('Failed to submit the data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
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

     
     <button className="bg-green-600 font-bold text-white py-3 px-6" onClick={() => router.push('/')}>
     {/* <Link href={'/'}> */}
        Add Topic
     {/* </Link>  */}
      </button>
    </form>
  );
};

export default addTopic;
