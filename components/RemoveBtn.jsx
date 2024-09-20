"use client"
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from 'next/navigation';

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure?");
    try {
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
        
        if (res.ok) {
          window.location.reload();
        } else {
          console.error('Failed to delete the topic');
        }
      }
    } catch (error) {
      console.error("An error occurred while deleting:", error);
    }
  };

  return (
    <button className="text-red-400">
      <HiOutlineTrash onClick={handleDelete} size={24} />
    </button>
  );
};

export default RemoveBtn;
