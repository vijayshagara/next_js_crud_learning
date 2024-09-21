"use client"; 
import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";


const TopicList = () => {
  const [allData, setAllData] = useState([]);
  const getdata = async () => {
    const response = await fetch("/api/topics");
    const data = await response.json();
    if (data.length) {
      setAllData(data);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

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
