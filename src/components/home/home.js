import React from 'react'
import '../../styles/main.scss'
export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="container">
                    <div className="title">
                        Students
                        <br/>
                        App
                    </div>
                    <div className="counter">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div className="credits">
                        <p>By Eric Saúl López Barragán</p>
                        <p>Web Design</p>
                    </div>
                </div>
            </div>
        )
    }
}