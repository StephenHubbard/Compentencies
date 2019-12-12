import React, {Component} from 'react';
import './CssStuff.css';
import axios from 'axios';

export default class CssStuff extends Component {
        state = {
            time: Date,
        }
    
    

    tick() {
        this.setState({
        time: Date()
        });
    }

    componentWillMount() {
        this.tick();
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000);
        this.queryFn() 
    }

    queryFn() {

    }

    componentDidUpdate() {
        console.log("component updated")
    }

    render() {
        return(
            <div>
                <h3>{this.state.time}</h3>
                <div className="this-is-a-class">
                    <div id="this-is-a-id">
                        <h5>Random H5 Tag</h5>
                        <h6>Random H6 Tag #1</h6>
                        <h6 className="className-1 className-2">Random H6 Tag #2</h6>
                    </div>
                </div>
            </div>
        )
    }
}

