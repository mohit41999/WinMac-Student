import Button from "@mui/material/Button";
import "./Events.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import React, { useState, useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";


const Events = (props) => {
  const username = localStorage.getItem('username');

  console.log("username",username)

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
          <Card sx={{ maxWidth: 345, mx: "auto" }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
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
          </CardContent>
          <CardActions disableSpacing>
            <Button
              onClick={() => book(item.event_id)}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, marginLeft: 15 }}
            >
              Book
            </Button>{" "}
          </CardActions>
        </Card>
        ))}
    </div>
  );
};

export default Events;
