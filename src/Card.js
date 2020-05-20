import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
console.log('React', React);

import shinyApple from '../public/icons/shiny-apple.svg';
console.log('shinyApple', shinyApple);
const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});


class FeatureCard extends Component {
  render() {
    const { classes, type, title, description, image } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return <Card className={classes.card}>
      <CardMedia
          className={classes.media}
          image={image}
          title={title}
      />
      <CardContent>
        <Typography type="body1" className={classes.title}>{type}</Typography>
        <Typography type="headline" component="h2">{title}</Typography>
        <Typography type="body1" className={classes.pos}>{description}</Typography>
      </CardContent>
      <img src={shinyApple} />
    </Card>
  }
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureCard);
