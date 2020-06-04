import React from 'react'
import '../../../styles/main.scss'

class Footer extends React.Component{
  constructor(props){
      super(props)
      this.state = {check: this.props}
  }

  render(){
      return(
        <footer>
          <p>&copy; Copyright 2020</p>
        </footer>
      )
  }
}

export default Footer