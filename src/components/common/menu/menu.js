import React from 'react'
import '../../../styles/main.scss'
import {Link} from 'react-router-dom'

export default class Menu extends React.Component{

    render(){
        return (
            <div className="menu" role="menu">
                <div className="burger"></div>
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/register">Student Registration</Link></li>
                    <li><Link to="/consult">Student Consult</Link></li>
                </ul>
            </div>
        )
    }
}