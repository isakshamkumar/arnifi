import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "../../components/Button"
import Card from "../../components/Card";
import Projects1 from "../../images/Projects-1.png";
import Projects2 from "../../images/Projects-2.png";
import Projects3 from "../../images/Projects-3.png";
import Projects4 from "../../images/Projects-4.png";

const Projects = () => {
  interface Src {
    src: string;
  }

  const ImageSrc = [
    { src: Projects1 },
    { src: Projects2 },
    { src: Projects3 },
    { src: Projects4 },
  ];

  return (
    <section style={{ marginTop: "100px", padding: "30px 50px" }}>
      <Typography
        marginBottom={"100px"}
        padding={"0px 90px"}
        variant="h6"
        fontWeight={"500"}
        fontSize={"16px"}
        color={"#F3F3F3"}
      >
        Flagship Projects
      </Typography>
      <Grid
        container
        style={{
          marginTop: 20,
          position: "relative",
        }}
        justifyContent="center"
        spacing={5}
      >
        {ImageSrc.map((src: Src, index: number) => (
          <Grid
            key={index}
            item
            xs={12}
            lg={6}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card src={src.src} index={index} />
          </Grid>
        ))}
        <Button externalStyles={{ position: 'absolute', bottom: '60px', left: '125px' }}>
          View All
        </Button>
      </Grid>
    </section>
  );
};

export default Projects;
