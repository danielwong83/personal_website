import React, { Component } from 'react';
import {Statistics,
        } from '../styles/ChessBlitzHistory.style'

import moment from 'moment'


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

            this.state.data.map(statistics =>

                <div>
                    {statistics.points.map(dates => (

                        <div>
                        {dates[1] <= 9 &&

                            <div>
                                {dates[2] < 10 &&
                                    <Statistics>Date: {moment((String(dates[0]) + "0" + String(dates[1] + 1)) + "0" + 
                                    String(dates[2])).format("MMM Do YY")}; Rating: {dates[3]}</Statistics>
                                }
                                {dates[2] >= 10 &&
                                    <Statistics>Date: {moment((String(dates[0]) + "0" + String(dates[1] + 1)) + 
                                    String(dates[2])).format("MMM Do YY")}; Rating: {dates[3]}</Statistics>
                                    
                                }
                            </div>

                            
                        }

                        {dates[1] > 9 &&

                            <div>
                                {dates[2] < 10 &&
                                    <Statistics>Date: {moment((String(dates[0]) + String(dates[1] + 1)) + "0" + 
                                    String(dates[2])).format("MMM Do YY")}; Rating: {dates[3]}</Statistics>
                                }
                                {dates[2] >= 10 &&
                                    <Statistics>Date: {moment((String(dates[0]) + String(dates[1] + 1)) + 
                                    String(dates[2])).format("MMM Do YY")}; Rating: {dates[3]}</Statistics>
                                }
                            </div>
                        }

                        </div>

                        
                    ))}
                </div>
                    
            )
        );
    }
}

export default BlitzHistory;
