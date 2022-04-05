import React, { Component } from 'react'
import Dashbord1 from './Componet/Dashbord1'
import Navbar1 from './Componet/Navbar1'
import Sidebar1 from './Componet/Sidebar1'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar1 />
        <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
        <Sidebar1 />
        <Dashbord1 />
        </div>
        </div>
      </div>
    )
  }
}
