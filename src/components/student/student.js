import React from 'react'
import '../../styles/main.scss'
import { observer, inject } from 'mobx-react';

@inject('Database')
@observer
export default class Student extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data: (<tbody><tr><td>Loading</td></tr></tbody>)
        }
    }

    componentDidMount(){
        const db = this.props.Database.db.query("select * from student where id = "+this.props.match.params.id)
        
        this.setState({data: this.populateTable(db)})
    }

    populateTable(data){
            return (
                <tbody>
                    <tr>
                        <td className="title">First Name</td>
                        <td>{data.firstName}</td>
                    </tr>
                        <tr>
                        <td className="title">Second Name</td>
                        <td>{data.secondName}</td>
                    </tr>
                    <tr>
                        <td className="title">Street Name</td>
                        <td>{data.streetName}</td>
                    </tr>
                    <tr>
                        <td className="title">Street Number</td>
                        <td>{data.streetNumber}</td>
                    </tr>
                    <tr>
                        <td className="title">Phone Number</td>
                        <td>{data.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td className="title">GPA</td>
                        <td>{data.gpa}</td>
                    </tr>
                </tbody>
            )
    }

    render(){
        return (
            <div className="student">
                <div className="photo"></div>
                <div>
                    <table>
                        {this.state.data}
                    </table>
                </div>
            </div>
        )
    }
}