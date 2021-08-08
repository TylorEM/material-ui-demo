import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon fontSize="large" />
          <Typography variant="h6"> Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default App;
