// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data
// app.use(bodyParser.json());

// // POST Route to Handle Form Submission
// app.post("/send-email", async (req, res) => {
//     const { name, email, message } = req.body;

//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "harshnorath@gmail.com", // Replace with your Gmail
//             pass: "harshkirat13*", // Use an App Password for security
//         },
//     });

//     let mailOptions = {
//         from: email,
//         to: "akashkarkhal.23@gmail.com", // Replace with recipient email
//         subject: "New Contact Form Submission",
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.json({ success: true, message: "Email sent successfully!" });
//     } catch (error) {
//         res.json({ success: false, message: "Failed to send email", error });
//     }
// });

// // Start Server
// app.listen(5000, () => {
//     console.log("Server running on port 5000");
// });
// /