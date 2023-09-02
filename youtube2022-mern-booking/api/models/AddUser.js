import mongoose from "mongoose";
import User from "./User";

const user1=new User({
    username: "hisanzehra",
      email: "hisan123@gmail.com",
      country: "India",
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.thenounproject.com%2Fpng%2F4778723-200.png&tbnid=fMShhfFIyBflHM&vet=12ahUKEwig24zsq4uBAxW1pekKHQoxASYQMygIegQIARB7..i&imgrefurl=https%3A%2F%2Fthenounproject.com%2Ficon%2Fthis-small-4778723%2F&docid=aIwUbcOZcNfOrM&w=200&h=200&q=image%20icon%20small&ved=2ahUKEwig24zsq4uBAxW1pekKHQoxASYQMygIegQIARB7",
      city: "Ahmedabad",
      phone: "+91372847283",
      password: "hisan22",
      isAdmin: true,
    
})
