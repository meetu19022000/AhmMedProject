import { Schema, model } from "mongoose";

export interface User{
  id: string;
  email: string;
  address: string;
  name: string;
  password: string;
  isAdmin:boolean;
}

export const UserSchema = new Schema<User>(
    {
        name: {type:String, required: true},
        email: {type:String, required: true, unique: true},
        password: {type:String, required: true},
        address : {type:String, required: true},
        isAdmin: {type:Boolean, required: true},
    },{
        toJSON:{ //when api gives data to mongoose then set id to _id of mongoose
            virtuals:true
        },
        toObject:{ // when mongoose send data to api , set _id to id product object
            virtuals: true
        },
        timestamps:true
    }
);

export const UserModel = model<User>('user',UserSchema);
