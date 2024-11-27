import mongoose from "mongoose";

const ConnectDB = (url) => {
    mongoose.set("strictQuery", true);

    mongoose.connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
    
}

export default ConnectDB