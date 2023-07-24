import { Container, Grid, ImageList, ImageListItem, List, ListItem, ListItemText, Typography } from "@mui/material";

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
    </Container>
  )
}
