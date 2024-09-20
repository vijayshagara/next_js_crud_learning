"use client"; 

import React, { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { useRouter } from "next/navigation";


const TopicList = () => {
  const [allData, setAllData] = useState([]);
  const router = useRouter()
  const getdata = async () => {
    const response = await fetch("http://localhost:3000/api/topics");
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
