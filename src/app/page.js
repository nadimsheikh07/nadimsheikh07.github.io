import { Container, Grid, ImageList, ImageListItem, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";

const title = "Nadim Sheikh";
const image = "https://nadimsheikh07.github.io/image/myimage.jpg";
const heading = "Sr. Software Engineer | Laravel | ReactJs | ReactNative | NextJs | NodeJs";

export default function Home() {
  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={4}>
          <ImageList>
            <ImageListItem>
              <img
                src={`${image}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={"Nadim Sheikh"}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3" gutterBottom>{title}</Typography>
          <Typography variant="h5" gutterBottom>{heading}</Typography>
          <Typography variant="h6" gutterBottom>Nadim.Sheikh.07@gmail.com</Typography>
          <Typography variant="h6" gutterBottom>(+91)7737033665</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Summary</Typography>
          <Typography variant="p" gutterBottom>Experienced full-stack engineer looking for a challenging and rewarding opportunity while using open-sourced materials to design Web-based solutions.</Typography>
          <Typography variant="p" gutterBottom>Comfortable collaborating with Front End developers project manager’s designers and database administrators in the administration of software architecture. I want to work with a well-reputed firm at a good designation.</Typography>
          <Typography variant="p" gutterBottom>Building a long-term relationship with an organization that offers me learning and growth and at the same time utilizes my potential and skills in the field I am working in.</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Highlights</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="9+ years of accumulated talent and professional experience in web programming." />
            </ListItem>
            <ListItem>
              <ListItemText primary="5+ year experience in Laravel (PHP MVC framework)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="3+ year experience in AdonisJs, ExpressJs (NodeJs MVC framework.)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="9+ year experience in MySql, MsSql, PostgreSql." />
            </ListItem>
            <ListItem>
              <ListItemText primary="5+ year proficient experience in ReactJs, NextJs and Redux  (JavaScript Frameworks)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="3+ years experience on heroku, vercel, aws, cpanel." />
            </ListItem>
          </List>
        </Grid>
      </Grid>


      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Role & Responsibility </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Managed and maintained development of PHP backend for dynamic database driven websites." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Working on React for front end development." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Created a variety of different custom Web applications from conception to implementation phase." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Collected requirements from clients and communicated ideas back to the team." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Provided technical support in the assurance of quality systems and system changes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Designed, coded , developed debugged and tested system specifications for conversion and development projects." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Worked on improving application performance and bug fixes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reviewed programming projects and reported statuses to programming managers." />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Work Experience </Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Full Stack Engineer" secondary="Quarks Technosoft Pvt Ltd - July 2021 to Present" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Full Stack Engineer" secondary="Intelloger Software Trading LLC - July 2020 to July 2021" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Full Stack Engineer" secondary="GKMIT PVT LTD - February 2019 to May 31 2020" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Full Stack Engineer & Technical Lead" secondary="MuskOwl LLP - July 2017 to January 2019" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Full Stack Engineer" secondary="Pegasus Technologies - July 2015 to June 2017" />
            </ListItem>
          </List>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Academic Qualification</Typography>

          <TableContainer component={Paper}>
            <Table size="small" >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Degree</TableCell>
                  <TableCell align="right">University</TableCell>
                  <TableCell align="right">Year</TableCell>
                  <TableCell align="right">%</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell align="left">MCA</TableCell>
                  <TableCell align="right">JRNRV University Rajasthan</TableCell>
                  <TableCell align="right">2014</TableCell>
                  <TableCell align="right">69%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">BCA</TableCell>
                  <TableCell align="right">JRNRV University Rajasthan</TableCell>
                  <TableCell align="right">2011</TableCell>
                  <TableCell align="right">63%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">12th</TableCell>
                  <TableCell align="right">Ajmer Rajasthan Board</TableCell>
                  <TableCell align="right">2007</TableCell>
                  <TableCell align="right">46%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">10th</TableCell>
                  <TableCell align="right">Ajmer Rajasthan Board</TableCell>
                  <TableCell align="right">2005</TableCell>
                  <TableCell align="right">45%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>


      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Strength</Typography>
          <List dense>
            <ListItem>
              <ListItemText primary="Hardworking, devoted and eager to learn new things about technology." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ability to quickly adapt to new responsibilities." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Excellence in working with team and individual." />
            </ListItem>
          </List>
        </Grid>
      </Grid>


      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Personal Profile</Typography>

          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell align="left">Father Name</TableCell>
                  <TableCell align="left">Mr. Late. Khalil Ahmad</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Mother Name</TableCell>
                  <TableCell align="left">Mrs. Mehrun Nisha.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Date of Birth</TableCell>
                  <TableCell align="left">17 July 1989</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Gender</TableCell>
                  <TableCell align="left">Male</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Marital Status</TableCell>
                  <TableCell align="left">Married</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Nationality</TableCell>
                  <TableCell align="left">Indian</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Language known</TableCell>
                  <TableCell align="left">Hindi, English.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>



      <Grid container spacing={2} mt={2}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>Projects</Typography>
          <List dense>

            <ListItem>
              <ListItemText primary={
                <React.Fragment>
                  <a href="https://assettrackforcloud.com/">
                    Asset Track For Cloud
                  </a>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                  <Typography>
                    Feb 2022 – Present
                  </Typography>
                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                  >
                    This is an Asset Tracking application. based on laravel & nextJs. My Role in this project is Full Stack Developer Technology used by Laravel, Next.Js, React.js, Redux.js, React Bootstrap, And Material Ui.
                  </Typography>

                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                    mt={2}
                  >
                    Roles & Responsibilities
                  </Typography>

                  <ul>
                    <li>lead project & maintain team tasks.</li>
                    <li>db design & manage all backend api’s.</li>
                    <li>implement frontend ui for project requirements.</li>
                  </ul>
                </React.Fragment>
              } />
            </ListItem>


            <ListItem>
              <ListItemText primary={
                <React.Fragment>
                  <a href="https://www.firstpost.com/">
                    Firstpost
                  </a>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                  <Typography>
                    Feb 2022 – Present
                  </Typography>
                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                  >
                    This is a News application. My Role in this project is Front End Developer Technology used by Express.Js, React.js, Redux.js, React Bootstrap, And Material Ui.
                  </Typography>

                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                    mt={2}
                  >
                    Roles & Responsibilities
                  </Typography>

                  <ul>
                    <li>implement frontend ui for project requirements. </li>
                    <li>fixing bugs & optimizing according to the seo team.</li>
                    <li>working with an analytics team for analyzing website data & performance.</li>
                  </ul>
                </React.Fragment>
              } />
            </ListItem>


            <ListItem>
              <ListItemText primary={
                <React.Fragment>
                  <a href="https://www.sedarglobal.com/">
                    Sedar Global
                  </a>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                  <Typography>
                    Jan 2023 – Apr 2023
                  </Typography>
                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                  >
                    This is an e-commerce application. My Role in this project is Front End Developer Technology used by React.js, Redux.js, and React Bootstrap. The requirement for the project was to convert react js to the next js SSR. We migrate a react application to the next JS SSR.
                  </Typography>

                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                    mt={2}
                  >
                    Roles & Responsibilities
                  </Typography>

                  <ul>
                    <li>fixing bugs & optimizing according to the seo team.</li>
                    <li>converting react js code to the next js SSR.</li>
                  </ul>
                </React.Fragment>
              } />
            </ListItem>


            <ListItem>
              <ListItemText primary={
                <React.Fragment>
                  <a href="https://mulberri.io/">
                    Mulberri
                  </a>
                </React.Fragment>
              } secondary={
                <React.Fragment>
                  <Typography>
                    July 2021 – Jan 2022
                  </Typography>
                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                  >
                    This is an insurance application. My Role in this project is Front End Developer Technology used by React.js, Redux.js, React Bootstrap, And Material Ui.
                  </Typography>

                  <Typography
                    component="h6"
                    variant="body2"
                    color="text.primary"
                    mt={2}
                  >
                    Roles & Responsibilities
                  </Typography>

                  <ul>
                    <li>implement frontend ui for project requirement’s. </li>
                    <li>fixing bugs & optimised code.</li>
                  </ul>
                </React.Fragment>
              } />
            </ListItem>

          </List>
        </Grid>
      </Grid>
    </Container>
  )
}
