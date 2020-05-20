import './App.css'
import 'typeface-roboto';

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Card from './Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    const borders = [
      {
        type: 'border',
        title: 'Endless ocean',
        description: 'The ocean spans the horizon as far as you can see with no land in sight.',
        image: 'http://pre00.deviantart.net/c28c/th/pre/f/2013/134/a/5/endless_ocean_by_regus_ttef-d65aaez.jpg'
      },
      {
        type: 'border',
        title: 'Steep mountains',
        description: 'The slopes of this mountain range are rising steaply into the skies piercing them leaving no hope to get across.',
        image: 'http://www.fleagor.com/wp-content/uploads/landscaping/Mountain-Landscape-Painting-scenes-painting-watercolor-hawaii-dermatology-best-landscape-paintings-images-on-pinterest-best-Snowy-Mountain-Landscape-Painting-landscape-paintings-images.jpg'
      },
      {
        type: 'border',
        title: 'Vast desert',
        description: 'The sand dunes stretch as far as you can see. Plantless, deserted.',
        image: 'http://www.dualshockers.com/wp-content/uploads/2013/08/MonsterHunterOnline-6.jpg'
      },
      {
        type: 'border',
        title: 'Impassable forest',
        description: 'The vines and bushes grow thinker as you delve deeper into the forest, it`s sturdy branches becomming a match to your machette.',
        image: 'http://i.pinimg.com/originals/f5/30/4b/f5304be68831679f4d80133d2a76f89f.jpg'
      },
    ];

    const regionFeatures = [
      {
        type: 'region',
        title: 'Plains',
        description: 'The rich soil of these rather flat fields is a heaven for all sorts of nutritios plants inviting packs of wild animals to snack upon them.',
        image: 'http://i.pinimg.com/originals/a2/5a/18/a25a18d01326fb2d38f18109173e8e60.jpg',
        effects: {
          food: 2
        }
      },
      {
        type: 'region',
        title: 'Hills',
        description: 'These hills contain a many of nature`s secrets just waiting to be unearthed by pick or hoe.',
        image: 'http://blogs.unity3d.com/wp-content/uploads/2015/04/RockyHillsTerrainPack_A.jpg',
        effects: {
          food: 1,
          minerals: 1,
        }
      },
      {
        type: 'region',
        title: 'River',
        description: 'The river runs swiftly through surrounging landscape quenching the thirst of it`s thriving nature',
        image: 'http://www.fine-art.com/members/26933/imagesBig/Dawn_of_the_River.jpg',
        effects: {
          food: 1
        }
      }
    ];

    return <div className={classes.root}>
      <Typography type="headline" component="h2">Borders</Typography>
      <Grid container>
        { borders.map( (card) => (<Grid item >
          <Card {...card} />
        </Grid>) ) }
      </Grid>
      <Typography type="headline" component="h2">Region features</Typography>
      <Grid container>
        { regionFeatures.map( (card) => (<Grid item >
          <Card {...card} />
        </Grid>) ) }
      </Grid>
    </div>
  }
}

export default withStyles(styles)(App);
