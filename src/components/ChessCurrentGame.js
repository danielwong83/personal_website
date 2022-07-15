import React, { Component } from 'react';

import {CurrentGameText,
        CurrentGame,
        Content,
        NoGameText} from '../styles/ChessCurrentGame.style'



class ChessCurrentGame extends Component {

    
    

    constructor(){

        super();
        this.state={
            data:[],
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

                        {statistics.count.playing === 1 &&

                        <Content>
                            <CurrentGameText>Currently playing with the {String(statistics.playing).split("/")[4]} pieces. </CurrentGameText>
                            <CurrentGame src={`https://lichess.org/embed/${String(statistics.playing).split("/")[3]}?theme=blue&bg=light`}></CurrentGame>
                        </Content>

                        }

                        {statistics.count.playing === 0 &&
                        
                        <Content>
                            <NoGameText>Currently not in game.</NoGameText>
                        </Content>
                        }

                    </div>

            )
        );
    }
}


export default ChessCurrentGame;
