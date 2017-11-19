import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { Grid } from 'semantic-ui-react'

import Searchbar from '../components/searchbar'
import RestaurantsContainer from '../containers/restaurantsContainer'

export default class DiscoveryPage extends Component {

  render () {
    return (
      <DocumentTitle title='ZYDA | Discover'>
        <Grid container>
          <Grid.Column>
            
            {/* Searchbar */}
            <Grid.Row>
              
                <Searchbar />
              
            </Grid.Row>
            
            {/* Container */}
            <Grid.Row style={{marginTop:75}}>
              
                <RestaurantsContainer />
              
            </Grid.Row>

          </Grid.Column>
        </Grid>
      </DocumentTitle>
    )
  }
}
