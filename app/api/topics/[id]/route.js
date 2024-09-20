import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json()
    let payload = {
      title:body.title,
      description:body.description
    }
    await connectMongoDb();
    const res = await Topic.findByIdAndUpdate(id,payload);
    return NextResponse.json(
      { msg: "Topic updated" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating topic:", error);
    return NextResponse.json(
      { msg: "Error updating topic" },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    await connectMongoDb();
    const singleData = await Topic.findById(id);
    return NextResponse.json(
      singleData,
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("getById======", error);
  }
}
