import React, { Component } from 'react';
import {Statistics,
        Online,
        Offline,
        StatsWrapper,
        IndividualStat,
        Rating
        } from '../styles/ChessStats.style'

import moment from 'moment'

class ChessStats extends Component {


    constructor(){

        super();
        this.state={
            data:[],
            time:[],
        }
    }

    componentDidMount()
    {
        let URL = "https://lichess.org/api/user/danielwong4"

        fetch(URL)
            .then((response) => response.json())
            .then((response) => 


            {
                console.log(([response]))
                this.setState({
                    data:[response],
                })
            })

    }
    
    render() {

        return (
            this.state.data.map((statistics) =>
                        

                    <StatsWrapper>

                        <IndividualStat>
                            <Statistics>Blitz Rating: </Statistics>
                            <Rating>{statistics.perfs.blitz.rating} </Rating>

                        </IndividualStat>

                        <IndividualStat>
                            <Statistics>Puzzle Rating: </Statistics>
                            <Rating>{statistics.perfs.puzzle.rating} </Rating>

                        </IndividualStat>
                        
                        {statistics.online === true? <Online> Currently Online </Online>
                        : <Offline>Last Seen Online: {moment(statistics.seenAt).endOf('second').fromNow()}</Offline>}
                    </StatsWrapper>

            )
        );
    }
}

export default ChessStats;
