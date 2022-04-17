import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 128,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: theme.spacing(9),
    },
  },
  toolbarTitle: {
    letterSpacing: 1.25,
    fontWeight: "bold",
  },
  menuButtons: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [activeBtn, setActiveBtn] = useState("destinations");

  return (
    <Container>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          Masažai.net
        </Typography>
        <Box className={classes.menuButtons}>
          {[].map(
            (
              item // "Masažai", "Informacija", "Kainininkas", "Masažuotoja", "Kontaktai"
            ) => (
              <Link
                component="button"
                variant="body2"
                onClick={() => setActiveBtn(item)}
                color={activeBtn === item ? "textPrimary" : "textSecondary"}
                className={classes.item}
                key={item}
              >
                {item.toUpperCase()}
              </Link>
            )
          )}
        </Box>
      </Toolbar>
    </Container>
  );
}
