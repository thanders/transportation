import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { posts } from '../../getAllPosts';
import Paper from '@material-ui/core/Paper';
import PlaceIcon from '@material-ui/icons/Place';
import EventIcon from '@material-ui/icons/Event';
import WcIcon from '@material-ui/icons/Wc';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import AccessibleIcon from '@material-ui/icons/Accessible';
import WifiIcon from '@material-ui/icons/Wifi';
import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    backgroundColor: theme.palette.infoBoard.main,
    color: theme.palette.common.white,
    padding: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: theme.spacing(4),
    width: 600,
    float: 'right'
  },
  containerCenter: {
    position: 'relative',
    backgroundColor: theme.palette.infoBoard.main,
    color: theme.palette.common.white,
    padding: 25,
    margin: 0,
    marginBottom: theme.spacing(4),
  },
  infoRowContainer: {
    display: 'flex',
    border: 'inset black',
    padding: 10,
    backgroundColor: '#0066cc',
    justifyContent: 'center',
  },
  infoRow: {
    display: 'flex',
    backgroundColor: theme.palette.infoBoard.main,
    padding: 10,
    color: 'white',
  },
  infoRowCentered: {
    display: 'flex',
    backgroundColor: theme.palette.infoBoard.main,
    padding: 10,
    color: 'white',
    justifyContent: 'center',
  },
  infoRowSpaced: {
    display: 'flex',
    backgroundColor: theme.palette.infoBoard.main,
    padding: 10,
    color: 'white',
    justifyContent: 'space-between',
    height: 36
  },
  infoRowRed: {
    display: 'flex',
    backgroundColor: '#C60018',
    padding: 10,
    color: 'white',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  infoRowName: {
    display: 'flex',
    backgroundColor: theme.palette.infoBoard.main,
    padding: 10,
    color: 'white',
    justifyContent: 'space-between',
    letterSpacing: '.3rem',
  },


  infoConstructed: {
    display: 'flex',
    backgroundColor: theme.palette.infoBoard.main,
    padding: 10,
    color: 'yellow',
  },
  
  mainPostText: {
    flex: 1,
  },
  mainPostImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: 50,
    width: 600,
    backgroundColor: theme.palette.primary.dark,
  },

  section: {
    marginTop: 10,
  },
}))

const InfoBoard = (stationInfo) => {
  const classes = useStyles();
  const mainPost = posts.find(post => post.module.meta.postId === 1);

  const commonGridProps = {
    direction:"row",
    justify:"space-evenly",
    alignItems:"center",
    spacing: 1,
    height: 60
  }
  const station = stationInfo.stationInfo;
  const nameToolTip = 'Station name';
  const ownerToolTip = 'Station owner';
  const mapToolTip = 'Station map';
  const wikiToolTip = 'Station\'s wikipedia page';
  const ibnrToolTip = 'Station identifier (Internationale Bahnhofsnummer)'

  const matches = useMediaQuery(theme => theme.breakpoints.up('md'));

  const infoBoardComponent = (
    <div className={classes.infoRowContainer}>
    <Grid
      container
      xs= {12}
      lg= {12}
      {...commonGridProps}
    >
      <Grid
        container
        xs={12}
        md= {6}
        {...commonGridProps}
      >
        <Grid item xs={4}>
          <Paper className={classes.infoRow}>Test</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.infoConstructed} title='Station opening date'>
            <EventIcon fontSize='small' style={{ marginRight: 8 }} />  {station.history.opened}
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <CardActionArea component="a" href={station.name.link} target='blank' title={nameToolTip} >
            < Paper className={classes.infoRowName}>
              {station.name.title}
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={12}>
          < Paper className={classes.infoRow}> {station.locationName} </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.infoRow}> - </Paper>
        </Grid>
      </Grid>
      
      <Grid
        container
        xs={12}
        md= {6}
        {...commonGridProps}
        className={matches ? '' : classes.section}
      >
          <Grid item xs={3} md= {3}>
          < Paper className={classes.infoRow}>Test</Paper>
          </Grid>
        <Grid item xs={9} md= {9}>
          <CardActionArea component="a" href={station.owner.link} target='blank' title={ownerToolTip} >
            < Paper className={classes.infoRowRed}>
              {station.owner.title}
            </Paper>
          </CardActionArea>
        </Grid>
        <Grid item xs={6} md= {6}>
          <Paper className={classes.infoRow} title={ibnrToolTip}>
          {station.ibnr.title}
          </Paper>
        </Grid>
        <Grid item xs={3}>
        <Link href={station.map.link} passHref={true}>
          <CardActionArea component="a" target='blank' title={mapToolTip} >
            <Paper className={classes.infoRowCentered}>
              <PlaceIcon fontSize='small'/>
            </Paper>
          </CardActionArea>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link href={station.wiki.link} passHref={true}>
            <CardActionArea component="a"  target='blank' title={wikiToolTip} >
              <Paper className={classes.infoRowCentered} >
                Wiki
              </Paper>
              </CardActionArea>
            </Link>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.infoRow}>Platforms - {station.capacity.platforms} </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.infoRow}>Tracks - {station.capacity.tracks} </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.infoRowSpaced}>
            <span title='Bathrooms available'> <WcIcon fontSize='small' title='testing' /> </span>
            <span title='Wheelchair accessible'> <AccessibleIcon fontSize='small'/> </span>
            <span title='Bike parking'> <DirectionsBikeIcon fontSize='small'/> </span>
            <span title='Free wifi'> <WifiIcon fontSize='small'/> </span>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );

  if (matches) {
    return (
      <Card className={classes.container} raised={true}>
        {infoBoardComponent}
      </Card>
    )
  }
  return(
    <Card className={classes.containerCenter} raised={true}>
      {infoBoardComponent}
    </Card>
  )

}

export default InfoBoard