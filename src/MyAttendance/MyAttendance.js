import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';



function MyAttendance() {
  const username = localStorage.getItem('username');

  console.log("username",username)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/QRScanner');
  }
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // First API call to get event IDs
    fetch("https://acservices-winmac.onrender.com/winmac/eventAttend/myAttendance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data.Data: " + data.data);
        console.log("Data.Data.length: " + data.data.length);
        // Array to store all the API call promises
        const promises = [];
        // Loop over the event IDs and make API calls for each one
        data.data.forEach((eventId) => {
          console.log("eventID: " + eventId);
          const promise = fetch(
            "https://acservices-winmac.onrender.com/winmac/eventList/eventDetails",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ event_id: eventId }),
            }
          )
            .then((response) => response.json())
            .then((data) => {
              return data.data[0];
            })
            .catch((error) => {
              console.error(
                `Error fetching data for event ${eventId}:`,
                error
              );
              return null;
            });
          promises.push(promise);
        });
        // Wait for all the API calls to complete
        Promise.all(promises).then((eventDetails) => {
          // Remove null values from the array
          const filteredDetails = eventDetails.filter((detail) => detail);
          // Update the details state with the new data
          setDetails(filteredDetails);
        });
      })
      .catch((error) => {
        console.error("Error fetching event IDs:", error);
      });
  },[]);

  console.log("deatils length: " + details.length);

  return (
    <div>
      <div>
                <Button
                  onClick={handleClick}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Scan
                </Button>
              </div>
      <br/>
      {details.length > 0 &&
        details.map((item, index) => (
          <Card sx={{ maxWidth: 700 }} className="event" key={index}>
            <CardHeader
              title={item.title}
              subheader={"By: " + item.Presenter}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Date of Event: {item.date}
                <br />
                Time of Event: {item.time}
                <br />
                Location of Event: {item.location}
              </Typography>
            </CardContent>{" "}
          </Card>
        ))}
    </div>
  );

}

export default MyAttendance;
             
