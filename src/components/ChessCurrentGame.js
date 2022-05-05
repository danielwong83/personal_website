import React, { Component } from 'react';



class ChessCurrentGame extends Component {


    constructor(){

        super();
        this.state={
            data:[],
            time:[],
        }
    }

    componentDidMount()
    {
        let URL = "https://lichess.org/api/user/danielwong4/current-game"

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
                {statistics}
            </div>
            )
        );
    }
}

export default ChessCurrentGame;
