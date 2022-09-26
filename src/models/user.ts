import { Schema, model} from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
    {
        user: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        roll:{
            type: String,
            enum: ["cliente" , "admin"],
        },
        phone: {
            type: Number,
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        secondSurname: {
            type: String,
        },
        gender: {
            type: String,
            enum: ["femenino" , "masculino"],
        },
        birthDate: {
            type: String,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("users", UserSchema);
export default UserModel;