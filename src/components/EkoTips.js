import { Container, CssBaseline, Grid, withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';
import Background from '../img/no-image.png';
import Article from './Article';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  article: {
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    padding: '12px'
  },
  noImage: {
    height: '80px',
    width: '80px',
    backgroundSize: '80px 80px',
    backgroundImage: `url(${Background})`
  }
});

const articles = [{
  title: 'Artykuł 1',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget metus egestas, molestie tortor et, imperdiet justo.'
}, {
  title: 'Artykuł 2',
  text: 'Proin id diam feugiat, vestibulum velit eu, consequat velit. Pellentesque habitant morbi tristique senectus et netus.'
}, {
  title: 'Artykuł 3',
  text: 'Proin a ante ante. Curabitur consequat tellus odio, sit amet facilisis mi faucibus in. Aliquam venenatis sem ex.'
}, {
  title: 'Artykuł 4',
  text: 'Nam ut viverra lacus. Nunc nec libero id orci molestie semper sed vitae velit. Quisque et libero id orci rhoncus lacinia.'
}, {
  title: 'Artykuł 5',
  text: 'Curabitur eu tellus turpis. Nunc condimentum elementum dapibus. Curabitur quis orci urna. Duis tincidunt.'
}, {
  title: 'Artykuł 6',
  text: 'Maecenas porta ex ac urna sollicitudin, sit amet consectetur nisi condimentum. Nam mattis neque eget metus varius vulputate.'
}];

class EkoTips extends React.Component {

  render() {
    const classes = this.props.classes;

    const articlesEl = articles.map(article => (
      <Grid item>
        <Article title={article.title} text={article.text}/>
      </Grid>
    ));

    return (
      <Container maxWidth="lg">
        <CssBaseline />
        <Grid container direction="column" spacing={3}>
          {articlesEl}
        </Grid>
      </Container>
    );
  }
}

EkoTips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(EkoTips));
