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
          <List>
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

    </Container>
  )
}
