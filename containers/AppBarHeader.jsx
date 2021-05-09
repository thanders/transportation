import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: 0,
    marginBottom: 100, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    width:'100%',
    flexFlow: 'row',
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginRight: 30
  },
  rightEnd: {
    alignItems: 'flex-start',
    alignSelf: 'center',
    marginRight: 0
  },
  spacer: {
    flex: '1 1 auto'
  },
}));

const AppBarHeader = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5" noWrap>
            <Link href={'/'}>
              Title
            </Link>
          </Typography>
          <div className={classes.spacer}/>
          <Typography className={classes.title} variant="h5" noWrap edge="end">
            Tickets
          </Typography>
          <Typography className={classes.title} variant="h5" noWrap edge="end">
            Insurance
          </Typography>
          <IconButton className={classes.rightEnd} aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    </React.Fragment>
    )
}

export default AppBarHeader