import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Avatar from "./assets/avatar.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
function Profile(props) {
  return (
    <div>
      <div className="user_info">
        <Grid className="user_info-box1">
          <img src={Avatar} alt="" className="avatar_profile" />
          <Typography className="user_info-box1_name">
            {props.Username}
          </Typography>
          <Typography className="user_info-box1_name">
            {props.CreatedAt.slice(0, 10)}
          </Typography>
        </Grid>
        <Grid className="user_info-box2">
          <ListItem className="detail">
            <Typography variant="p" className="detail_head">
              Full Name
            </Typography>
            <Typography variant="p" className="detail_text">
              {`${props.FirstName}` + " " + `${props.LastName}`}
            </Typography>
          </ListItem>
          <ListItem className="detail">
            <Typography variant="p" className="detail_head">
              Job Title
            </Typography>
            <Typography variant="p" className="detail_text">
              {props.JobTitle}
            </Typography>
          </ListItem>
          <ListItem className="detail">
            <Typography variant="p" className="detail_head">
              Email
            </Typography>
            <Typography variant="p" className="detail_text">
              {" "}
              {props.Email}
            </Typography>
          </ListItem>
        </Grid>
      </div>
      <Container className="user_about">
        <Typography variant="p" className="detail_head">
          Bio
        </Typography>
        <Typography className="user_about-text">{props.Bio}</Typography>
      </Container>
    </div>
  );
}
function ListTemp(props) {
  return (
    <ListItem className="user_listItem" onClick={props.Clicked}>
      <img src={Avatar} className="avatar_list" />
      <Typography className="user_listItem-name">{props.name}</Typography>
    </ListItem>
  );
}
export default function User() {
  const Dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((responseData) => {
        const loadedTask = responseData.data;
        setUserList(loadedTask);
      });
  }, []);
  console.log(userList);
  const listUser = userList.map((user) => {
    return (
      <ListTemp
        name={user.profile.firstName}
        Clicked={() => {
          Dispatch({
            type: "updateData",
            bio: user.Bio,
            avt: user.avatar,
            createdAt: user.createdAt,
            id: user.id,
            jobTitle: user.jobTitle,
            email: user.profile.email,
            firstName: user.profile.firstName,
            lastName: user.profile.lastName,
            usr: user.profile.username,
          });
        }}
      />
    );
  });
  const { status, Bio, id, createdAt, jobTitle, profile } = useSelector(
    (state) => state.custom
  );
  const { email, firstName, lastName, username } = profile;

  return (
    <Container className="user">
      <Grid Container spacing={3} className="user_con">
        <Grid item className="user_list">
          <Typography
            variant="h5"
            className="heading_tertiary heading_tertiary1"
          >
            users list
          </Typography>
          <div className="user_list-sub">{listUser}</div>
        </Grid>
        <Grid item className="user_profile">
          <Typography
            variant="h5"
            className="heading_tertiary heading_tertiary1"
          >
            user profile
          </Typography>
          <Container className="user_profile-main">
            {status ? (
              <Profile
                Username={username}
                FirstName={firstName}
                LastName={lastName}
                JobTitle={jobTitle}
                Bio={Bio}
                CreatedAt={createdAt}
                Email={email}
              />
            ) : (
              <div className="blank">
                No user selected!
                <br />
                Select the user to get his/her info.
              </div>
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
