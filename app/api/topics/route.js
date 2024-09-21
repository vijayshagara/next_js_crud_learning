import connectMongoDb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDb();
    await Topic.create({
      title,
      description,
    });
    return NextResponse.json(
      {
        msg: "Topic Created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("=======", error);
  }
}

export const GET = async () => {
  try {
    // Ensure the database is connected
    await connectMongoDb();
    
    // Fetch topics from MongoDB
    const topics = await Topic.find();

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 8000)); // Adjust the timeout (80 seconds is too long)

    // Return the fetched topics
    return NextResponse.json(topics);
  } catch (error) {
    console.error("Error fetching topics:", error);
    
    // Return an error response
    return NextResponse.json({ error: 'Failed to fetch topics' }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDb();
    const res = await Topic.findByIdAndDelete(id);
    return NextResponse.json(
      {
        msg: "Topics deleted successfully",
      },
      {
        status: 200,
      }
    );
    
  } catch (error) {
    console.log("=======", error);
  }
};


// export const GET = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/api/all-product');
//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
//   }
// };
