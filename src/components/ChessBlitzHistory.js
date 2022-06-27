import React, { Component } from 'react';
import {Statistics,
        DateDivider} from '../styles/ChessBlitzHistory.style'

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

                    // <DateDivider>

                    // {statistics.points.map(dates => (
                    //     <Statistics>Date: {moment((String(dates[0])+ "0" + String(dates[1] + 1)) + 
                    //     String(dates[2])).format("MMM Do YY")}; Rating: {dates[3]}</Statistics>
                            
                    // ))}

                    //     <Statistics>Date: {moment((String(statistics.points[0][0])+ "0" + String(statistics.points[0][1] + 1)) + 
                    //     String(statistics.points[0][2])).format("MMM Do YY")}; Rating: {statistics.points[0][3]}</Statistics>

                    //     <Statistics>^does not work for september onwards... need fixing</Statistics>

                    // </DateDivider>

                    // <DateDivider>


                    // {statistics.points.map(dates => (

                    //     <div>

                    //     <Statistics>Date: {moment((String(dates[0])+ "0" + String(dates[1] + 1)) + 
                    //     String(dates[2])).format("MMM Do YY")}; Rating: {dates[3]}</Statistics>

                    //     <Statistics>yes</Statistics>

                    //     </div>
                            
                    // ))}

                    // </DateDivider>

                    <Statistics>Currently Broken and fixing</Statistics>

                        


                    
            )
        );
    }
}

export default BlitzHistory;
