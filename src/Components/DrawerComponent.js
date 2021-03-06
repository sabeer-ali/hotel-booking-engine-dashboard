import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer, Link as RouterLink } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HotelIcon from "@material-ui/icons/Hotel";
import Collapse from "@material-ui/core/Collapse";
import MeetingRoomTwoToneIcon from "@material-ui/icons/MeetingRoomTwoTone";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import HouseIcon from "@material-ui/icons/House";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SignIn from "../Pages/LoginPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  TextRotateUp,
} from "@material-ui/icons";

import {
  HotelsRoomTypes,
  HotelRoom,
  RatePage,
  CurrenciesPage,
  AvailabilityPage,
  OffersPage,
  ExtrasPage,
  RegisterPage,
  HotelListingPage,
} from "../Pages";

import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(true);

  const [SidebarList, setSidebarList] = React.useState([
    {
      name: "Dashboard",
      icon: () => <DashboardIcon />,
      link: "/dashboard",
      haveChild: false,
    },
    {
      name: "Hotel Info",
      icon: () => <HouseIcon />,
      link: "/hotels",
      isExpand: false,
      haveChild: true,
      section: [
        {
          name: "Room Types",
          link: "/room-types",
          icon: () => <HomeWorkIcon />,
        },
        {
          name: "Rooms",
          link: "/hotels/room",
          icon: () => <HotelIcon />,
        },
      ],
    },
    {
      name: "Rates",
      icon: () => <HotelIcon />,
      isExpand: false,
      haveChild: true,
      section: [
        {
          name: "Rate List",
          link: "/rates/rateList",
          icon: () => <TrendingUpIcon />,
        },
        {
          name: "Currencies",
          link: "/rates/currencies",
          icon: () => <EuroSymbolIcon />,
        },
      ],
    },
    {
      name: "Availability",
      icon: () => <EventAvailableIcon />,
      isExpand: false,
      haveChild: false,
      link: "/availability",
    },
    {
      name: "Offers",
      icon: () => <EventAvailableIcon />,
      isExpand: false,
      haveChild: false,
      link: "/offers",
    },
    {
      name: "Extras",
      icon: () => <EventAvailableIcon />,
      isExpand: false,
      haveChild: false,
      link: "/extras",
    },
  ]);

  const [open1, setOpen1] = React.useState(true);

  const handleExpand = (mainIndex) => {
    let tmpData = [...SidebarList];
    let mainList = tmpData[mainIndex];
    console.log(mainIndex, mainList);
    mainList.isExpand = !mainList.isExpand;
    setSidebarList(tmpData);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const location = useLocation();

  console.log("location ==>", location);
  const firstLetterCapitalize = (value) => {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (location.pathname === "/hotel-list" || location.pathname === "/") {
      setShowHeader(false);
    } else setShowHeader(true);
  }, []);

  const headerName =
    firstLetterCapitalize(location.pathname.replace("/", "").split("-")[0]) +
    " " +
    firstLetterCapitalize(location.pathname.replace("/", "").split("-")[1]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {showHeader ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography variant="h6" noWrap>
            {headerName}
          </Typography>
        </Toolbar>
      </AppBar>
      {showHeader ? (
        <>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {SidebarList.map((item, index) => (
                <>
                  <ListItem
                    button
                    onClick={() => handleExpand(index)}
                    key={item.name}
                    component={Link}
                    to={!item.haveChild && item.link}
                  >
                    <ListItemIcon>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                    {item.haveChild ? (
                      item.isExpand ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>

                  <Collapse in={item.isExpand} timeout="auto" unmountOnExit>
                    {item.haveChild && item.section.length
                      ? item.section.map((subItem, index) => (
                          <List
                            component="div"
                            disablePadding
                            key={subItem.name}
                            component={Link}
                            to={subItem.link}
                            className="text-decoration-none"
                          >
                            <ListItem button className={classes.nested}>
                              <ListItemIcon>
                                {subItem.icon ? <subItem.icon /> : null}
                              </ListItemIcon>
                              <ListItemText primary={subItem.name} />
                            </ListItem>
                          </List>
                        ))
                      : null}
                  </Collapse>
                </>
              ))}
            </List>
            <Divider />
          </Drawer>
        </>
      ) : null}

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {showHeader && <div className={classes.drawerHeader} />}
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/hotel-list">
            <HotelListingPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/room-types">
            <HotelsRoomTypes />
          </Route>
          <Route path="/hotels/room">
            <HotelRoom />
          </Route>
          <Route path="/rates/rateList">
            <RatePage />
          </Route>
          <Route path="/rates/currencies">
            <CurrenciesPage />
          </Route>
          <Route path="/availability">
            <AvailabilityPage />
          </Route>
          <Route path="/offers">
            <OffersPage />
          </Route>
          <Route path="/extras">
            <ExtrasPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
