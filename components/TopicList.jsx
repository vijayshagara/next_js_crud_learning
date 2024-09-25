"use client"; 
import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";


const TopicList = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);  // Added loading state
  const [error, setError] = useState(null);      // Added error state

  const getdata = async () => {
    try {
      const response = await fetch("/api/topics");
      
      // Simulating a delay (you can adjust or remove this for production)
      await new Promise((resolve) => setTimeout(resolve, 2000)); 

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      if (data.length) {
        setAllData(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading once data is fetched or error occurs
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  if (loading) {
    return <p>Loading topics...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {allData.length &&
        allData.map((d) => (
          <div
          key={d._id}
            className="p-4 border border-slate-300 my-3 
            flex justify-between gap-5 items-start"
          >
            <div>
              <h2 className="font-bold text-2xl">{d.title}</h2>
              <div>{d.description}</div>
            </div>
            <div>
              <RemoveBtn id={d._id}/>
              <Link href={`/editTopic/${d._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default TopicList;
