import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
<<<<<<< HEAD
import "./complaint.css";
=======
import './complaint.css';
>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useRef } from "react";
=======
import { useRef } from 'react';

>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41

export default function Complaints() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getComplsints();
  }, []);

  const complaintRef = useRef(null);
<<<<<<< HEAD
  const [complaint, setComplaint] = useState("");

  function getComplsints() {
    fetch("http://localhost:5000/winmac/support/myTickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "chauha45" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Length send by server: " + data.data.length);
        setDetails(data.data);
      })
      .catch((error) => {
        console.error(`Error fetching data for event ${"chauha45"}:`, error);
=======
  const [complaint, setComplaint] = useState('');

  function getComplsints() {
    fetch(
      "http://localhost:5000/winmac/support/myTickets",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "username": "chauha45" }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Length send by server: "+data.data.length);
        setDetails(data.data);
      })
      .catch((error) => {
        console.error(
          `Error fetching data for event ${"chauha45"}:`,
          error
        );
>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41
        return null;
      });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
<<<<<<< HEAD
    const complaintField = document.querySelector("#complaint-field");
    const complaintMessage = complaintField.value;
    console.log(complaintMessage);
    setComplaint("");
    axios
      .post("http://localhost:5000/winmac/support/newTicket", {
        username: "chauha45",
        message: complaintMessage,
      })
      .then((response) => {
        console.log("complaint adding success", response.data);
=======
    const complaintField = document.querySelector('#complaint-field');
    const complaintMessage = complaintField.value;
    console.log(complaintMessage);
    setComplaint('');
    axios
      .post("http://localhost:5000/winmac/support/newTicket", {'username': "chauha45", "message": complaintMessage })
      .then((response) => {
        console.log("complaint adding success",response.data);
>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41
        getComplsints();
      })
      .catch((error) => {
        console.error("Error adding complaint:", error);
      });
  }

  function deleteComplaint(id) {
<<<<<<< HEAD
    console.log("id: " + id);
    axios
      .post("http://localhost:5000/winmac/support/deleteTicket", {
        event_id: id,
      })
      .then((response) => {
        console.log("cancel success", response.data);
=======
    console.log("id: "+id);
    axios
      .post("http://localhost:5000/winmac/support/deleteTicket", {'event_id': id})
      .then((response) => {
        console.log("cancel success",response.data);
>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41
        getComplsints();
      })
      .catch((error) => {
        console.error("Error canceling booking:", error);
      });
  }

<<<<<<< HEAD
  console.log("length: " + details.length);
  console.log("Details: " + details);

  return (
    <div>
      <br />
      <form className="form" onSubmit={handleFormSubmit}>
        <TextField
          ref={complaintRef}
          id="complaint-field"
          label="Complaint"
          value={complaint}
          onChange={(event) => setComplaint(event.target.value)}
          multiline
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{backgroundColor : "black"}}>
          Submit
        </Button>
      </form>
      <br />
      <br />
      {details.length > 0 &&
        details.map((item, index) => (
          <Card sx={{ maxWidth: 700 }} className="event" key={index}>
            <CardHeader subheader={"Ticket No.: " + item._id} />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {"Complaint: " + item.message}
              </Typography>
            </CardContent>{" "}
            <div>
              <Button
                onClick={() => deleteComplaint(item._id)}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Cancel
              </Button>
            </div>
          </Card>
        ))}
    </div>
  );
}
=======
  
  console.log("length: "+details.length);
  console.log("Details: "+details);

  return (
    <div>
      <br/>
      <form className="form" onSubmit={handleFormSubmit}>
          <TextField
            ref={complaintRef}
            id="complaint-field"
            label="Complaint"
            value={complaint}
            onChange={(event) => setComplaint(event.target.value)}
            multiline
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      <br/>
      <br/>
    {details.length > 0 &&
      details.map((item, index) => (
        <Card sx={{ maxWidth: 700 }} className="event" key={index}>
          <CardHeader 
            subheader={"Ticket No.: "+item._id}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {"Complaint: "+item.message}
            </Typography>
          </CardContent>{" "}
          
            <div>
            <Button
              onClick={() => deleteComplaint(item._id)}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cancel
            </Button>
            </div>
          
        </Card>
      ))}
    </div>
  );
}
             
>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41
