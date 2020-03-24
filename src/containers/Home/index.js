import React from 'react'
import { tmdbApi } from 'utils/tmdbApi'
import { ItemList } from '../../components/Item/ItemList'

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trending: []
    }
  }

  async componentDidMount() {
    const trending = await tmdbApi.getTrending()
    this.setState({ 
      trending: trending.results
    })
    console.log(this.state.trending)
  }

  render() {
    return (
      <ItemList items={this.state.trending} />
    )
  }
}
