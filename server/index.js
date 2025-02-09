const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Add CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000", // or your frontend URL
  })
);

app.use(express.json());

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  debug: true, // Enable debug logging
});

// Verify the connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/api/schedule-appointment", async (req, res) => {
  const { name, email, phone, preferredDate, preferredTime, message } =
    req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "Redlineandbluepressurewashing@gmail.com", // Owner's email
    subject: "New Appointment Request",
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime}</p>
      <p><strong>Additional Information:</strong> ${message}</p>
    `,
  };

  try {
    console.log("Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);
    res.status(200).json({ message: "Appointment request sent successfully" });
  } catch (error) {
    console.error("Detailed error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack,
    });
    res.status(500).json({
      message: "Failed to send appointment request",
      error: error.message,
      details: error.response || error.code,
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
