import React, { Component } from 'react';
import {Statistics,
    Online,
    Offline,
    } from '../styles/ChessStats.style'


class BlitzHistory extends Component {


    constructor(){

        super();
        this.state={
            data:[],
            time:[],
        }
    }

    componentDidMount()
    {
        let URL = "https://lichess.org/api/user/danielwong4/rating-history"

        fetch(URL)
            .then((response) => response.json())
            .then((response) => 


            {
                console.log(([response[1]]))
                this.setState({
                    data:[response[1]],
                })
            })

    }
    
    render() {

        return (
            this.state.data.map((statistics) =>

            <div>
                {
                    <div>
                        
                        <Statistics>{statistics.points[0][0]} </Statistics>

                    </div>
                }
            </div>
            )
        );
    }
}

export default BlitzHistory;
