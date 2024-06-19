import bcrypt from "bcrypt";
import connectDB from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import userModel from "@/models/userModel";

export const POST = async (req) => {
  try {
    connectDB()
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const role = formData.get("role");
    const plainPassword = formData.get("password");

    const hashedPassword = await bcrypt.hash(plainPassword, 10);


    const applicationData = {
      name,
      email,
      mobile,
      role,
      password: hashedPassword ,
    };
    await userModel.create(applicationData);
    return NextResponse.json({ msg: 'Application submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ msg: 'Error submitting application', error: error.message }, { status: 500 });
  }
};
