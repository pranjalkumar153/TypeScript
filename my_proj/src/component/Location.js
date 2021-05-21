import React, { Component } from 'react';
import axios from 'axios'


class Location extends Component {
    constructor() {
        super();
        this.state = {
            response: [],
            errorMsg: ""
        }
    }
    componentDidMount() {
        axios.get("http://ip-api.com/json/").then(res => {
            console.log("From get", res);
            this.setState({ response: res.data })
        }).catch(error => {
            console.log(error)
            this.setState({errorMsg: error})
        })
    }
    render() {
        //this.componentDidMount()
        const res = this.state.response;
        // if (res.response.status == 200) {
            return (
                <div>
                    <h1>Your Location is as follows: </h1>
                    <h2>Location: {res.country}</h2>
                    <h2>State: {res.regionName}</h2>
                    <h2>City: {res.city}</h2>
                    <h2>Longitude: {res.lon}</h2>
                    <h2>Latitude: {res.lat}</h2>
                </div>
            )
        //}
        //else {
            
               }
                    }

export default Location