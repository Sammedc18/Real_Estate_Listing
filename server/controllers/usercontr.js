import asyncHandler from 'express-async-handler';
import prisma from '../config/prismaconfig.js'; // ✅ Correct import

export const createUser = asyncHandler(async (req, res) => {
    console.log("creating a user");
    let { email } = req.body;
     const userExists = await prisma.user.findUnique({where:{email:email}})
    // console.log(email);
      if(!userExists){
        const user = await prisma.user.create({data: req.body});
        res.send({
            message: "User Registered Successfully",
            user: user,
        });
      }
       else res.send(201).json({message:'user already registered'})
    });
