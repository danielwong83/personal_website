import React, { Component } from 'react';
import {Statistics,
        Online,
        Offline,
        } from '../styles/ChessStats.style'




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

            <div>
                {
                    <div>

                        
                        <Statistics>LiChess Blitz Rating: {statistics.perfs.blitz.rating} </Statistics>

                        <Statistics>Puzzle Rating: {statistics.perfs.puzzle.rating} </Statistics>

                        {statistics.online === true? <Online> Currently Online </Online>
                        : <Offline>Last Seen: (Date{statistics.seenAt})</Offline>}

                        


                    </div>
                }
            </div>
            )
        );
    }
}

export default ChessStats;
