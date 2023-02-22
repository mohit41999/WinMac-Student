import Button from "@mui/material/Button";
import "./Events.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";

const Events = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    list();
  }, []);

  function list(){
    axios.get("http://localhost:5000/winmac/eventList").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }
  
  function book(id) {
    console.log("id: "+id+" type: "+typeof(id));
    axios
      .post("http://localhost:5000/winmac/eventBook/book", {"username": "chauha45", "eventBooked": id})
      .then((response) => {
        console.log("cancel success",response.data);
        list();
      })
      .catch((error) => {
        console.error("Error canceling booking:", error);
      });
  }

  console.log("data: ", data.data);
  
  return (
    <div>
      <br/>
      {data.length > 0 &&
        data.data.map((item, index) => (
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
                <br />
                Event Description: {item.Desc}
              </Typography>
            </CardContent>{" "}
            {
              <div>
                <Button
                  onClick={() => book(item.event_id)}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Book
                </Button>{" "}
              </div>
            }
          </Card>
        ))}
    </div>
  );
};

export default Events;