import React from "react";
import {
  AppBar,
  Box,
  Grid,
  SvgIcon,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#3187ED",
    height: "3rem",
    boxShadow: "none",
  },
  seperator: {
    background: "#E8F2FF",
    borderRadius: "22px",
    height: "10px",
    width: "1px",
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item >
            <div style={{ display: "flex" }}>
              <SvgIcon>
                <path
                  d="M18.3952 13.1277C17.1707 13.1277 15.9684 12.9362 14.8291 12.5597C14.2708 12.3693 13.5845 12.544 13.2438 12.8939L10.995 14.5915C8.38701 13.1994 6.78056 11.5934 5.40743 9.00505L7.05509 6.81484C7.48316 6.38734 7.6367 5.76286 7.45274 5.17693C7.07462 4.03161 6.88253 2.8299 6.88253 1.6049C6.88259 0.719948 6.16264 0 5.27775 0H1.60484C0.719946 0 0 0.719948 0 1.60484C0 11.7481 8.25196 20 18.3952 20C19.2801 20 20 19.2801 20 18.3952V14.7325C19.9999 13.8477 19.28 13.1277 18.3952 13.1277Z"
                  fill="white"
                />
              </SvgIcon>
              <Typography>+221 33 66 22</Typography>
            </div>
            <div style={{ display: "flex" }}>
              <SvgIcon>
                <path
                  d="M21.5832 6.4999C21.7508 6.35459 22 6.49053 22 6.72021V16.3062C22 17.5483 21.0762 18.5562 19.9375 18.5562H2.0625C0.923828 18.5562 0 17.5483 0 16.3062V6.7249C0 6.49053 0.244922 6.35928 0.416797 6.50459C1.3793 7.32021 2.65547 8.35615 7.03828 11.8296C7.94492 12.5515 9.47461 14.0702 11 14.0608C12.534 14.0749 14.0937 12.5233 14.966 11.8296C19.3488 8.35615 20.6207 7.31553 21.5832 6.4999ZM11 12.5562C11.9969 12.5749 13.432 11.1874 14.1539 10.6155C19.8559 6.10147 20.2898 5.70771 21.6047 4.58271C21.8539 4.37178 22 4.04365 22 3.69678V2.80615C22 1.56396 21.0762 0.556152 19.9375 0.556152H2.0625C0.923828 0.556152 0 1.56396 0 2.80615V3.69678C0 4.04365 0.146094 4.36709 0.395312 4.58271C1.71016 5.70303 2.14414 6.10147 7.84609 10.6155C8.56797 11.1874 10.0031 12.5749 11 12.5562Z"
                  fill="white"
                />
              </SvgIcon>
              <Typography>support@elextra.io</Typography>
            </div>
          </Grid>

          <Grid item>
            <div style={{ display: "flex", borderRight: "5px solid #E8F2FF" }}>
              <SvgIcon>
                <path
                  d="M8.07506 22.536C1.26422 13.0737 0 12.1025 0 8.625C0 3.86153 4.02942 0 9 0C13.9706 0 18 3.86153 18 8.625C18 12.1025 16.7358 13.0737 9.92494 22.536C9.47798 23.1547 8.52197 23.1547 8.07506 22.536ZM9 12.2187C11.0711 12.2187 12.75 10.6098 12.75 8.625C12.75 6.64022 11.0711 5.03125 9 5.03125C6.92892 5.03125 5.25 6.64022 5.25 8.625C5.25 10.6098 6.92892 12.2187 9 12.2187Z"
                  fill="white"
                />
              </SvgIcon>
              <Typography>Locations</Typography>
            </div>
            <div>
              <Typography>
                $ Dollar (US)
                <SvgIcon>
                  <path
                    d="M0 0.192383H7.09619H14.1924L7.09619 7.28857L0 0.192383Z"
                    fill="white"
                  />
                </SvgIcon>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
