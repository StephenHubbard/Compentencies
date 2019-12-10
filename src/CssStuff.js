import React, {Component} from 'react';
import './CssStuff.css';

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
    }

    componentDidUpdate() {
        console.log("component updated")

    }

    render() {
        return(
            <div>
                <h3>{this.state.time}</h3>
            </div>
        )
    }
}

