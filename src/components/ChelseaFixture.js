import React, { Component } from 'react';
import {Fixture} from '../styles/ChelseaFixture.style'

import moment from 'moment'


class ChelseaFixture extends Component {


    constructor(){

        super();
        this.state={
            data:[],
            time:[],
        }
    }

    componentDidMount()
    {
        const Token = '4c0717bf919645bc80055ad0f039fbeb',
        URL = "https://api.football-data.org/v2/teams/61/matches?status=SCHEDULED"

        fetch(URL, { headers: { 'X-Auth-Token': Token } })
            .then((response) => response.json())
            .then((response) => 


            {
                console.log(([response.matches[0]]))
                this.setState({
                    data:[response.matches[0]],
                    time:[response.matches[0].utcDate]
                })
            })

    }
    
    render() {

        return (
            this.state.data.map((fixtures) =>

            <div>
                {
                    <div>

                        {fixtures.homeTeam.name === "Chelsea FC"? <Fixture>Next Fixture: {fixtures.awayTeam.name} (Home)</Fixture>
                        : <Fixture>Next Fixture: {fixtures.homeTeam.name} (Away)</Fixture>}

                        <Fixture>Game Time: {moment(fixtures.utcDate).format('MMMM Do YYYY, h:mm a')} - {' '}{moment(fixtures.utcDate).endOf('hour').fromNow()}</Fixture>
                    </div>
                }
            </div>
            )
        );
    }
}

export default ChelseaFixture;
