import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Avatar from "./assets/avatar.svg";
export default function User() {
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
          <List>
            <ListItem className="user_listItem">
              <img src={Avatar} className="avatar_list" />
              <Typography>name</Typography>
            </ListItem>
            <ListItem className="user_listItem">
              <img src={Avatar} className="avatar_list" />
              <Typography>name</Typography>
            </ListItem>
            <ListItem className="user_listItem">
              <img src={Avatar} className="avatar_list" />
              <Typography>name</Typography>
            </ListItem>
            <ListItem className="user_listItem">
              <img src={Avatar} className="avatar_list" />
              <Typography>name</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item className="user_profile">
          <Typography
            variant="h5"
            className="heading_tertiary heading_tertiary1"
          >
            user profile
          </Typography>
          <Container className="user_profile-main">
            <div className="user_info">
              <Grid className="user_info-box1">
                <img src={Avatar} alt="" className="avatar_profile" />
                <Typography>@kartikey</Typography>
                <Typography>Web developer</Typography>
              </Grid>
              <Grid className="user_info-box2">
                <ListItem className="detail">
                  <Typography variant="p" className="detail_head">
                    Full Name
                  </Typography>
                  <Typography variant="p" className="detail_text">
                    shivam saraswat
                  </Typography>
                </ListItem>
                <ListItem className="detail">
                  <Typography variant="p" className="detail_head">
                    Job Title
                  </Typography>
                  <Typography variant="p" className="detail_text">
                    web developer
                  </Typography>
                </ListItem>
                <ListItem className="detail">
                  <Typography variant="p" className="detail_head">
                    Email
                  </Typography>
                  <Typography variant="p" className="detail_text">
                    {" "}
                    kartikey.saraswat301@gmail.com
                  </Typography>
                </ListItem>
              </Grid>
            </div>
            <Container className="user_about">
              <Typography variant="p" className="detail_head">
                About
              </Typography>
              <Typography className="user_about-text">Lorem I</Typography>
            </Container>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
