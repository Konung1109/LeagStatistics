import StatisticTab from "./StatisticTab"
import React, { useEffect, useState} from "react";


function aggregateTeamData(players) {
    const teamData = {};

    players.forEach((player) => {
        if (!teamData[player.team]) {
            teamData[player.team] = {
                team: player.fteam,
                g: 0,
                ab: 0,
                r: 0,
                h: 0,
                secb: 0,
                thirtb: 0,
                hr: 0,
                rbi: 0,
                bb: 0,
                k: 0,
                avgg: 0,
                obp: 0,
                barsp: 0,
            };
        } 
        teamData[player.team].g = 20;
        teamData[player.team].ab += player.ab;
        teamData[player.team].r += player.r;
        teamData[player.team].h += player.h;
        teamData[player.team].secb += player.secb;
        teamData[player.team].thirtb += player.thirtb;
        teamData[player.team].hr += player.hr;
        teamData[player.team].rbi += player.rbi;
        teamData[player.team].bb += player.bb;
        teamData[player.team].k += player.k;
        teamData[player.team].avgg += player.avgg * player.ab;
        teamData[player.team].obp += player.obp * player.ab;
        teamData[player.team].barsp += player.barsp * player.ab;
    });
    Object.keys(teamData).forEach((team) => {
        const ab = teamData[team].ab;
        teamData[team].avgg = (teamData[team].avgg / ab).toFixed(3);
        teamData[team].obp = (teamData[team].obp / ab).toFixed(3);
        teamData[team].barsp = (teamData[team].barsp / ab).toFixed(3);
    });

    return Object.values(teamData);
}
export default function Stats({switcher, filter}) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:5000/statistics/2023'
        if (filter[0] === '2021') {
            url = 'http://localhost:5000/statistics/2021';
        } else if (filter[0] === '2022') {
            url = 'http://localhost:5000/statistics/2022';
        }

        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filter]);
   useEffect(() => {
    let selectedData = data;
            if (filter[1] && filter[1] !== 'All Teams') {
                selectedData = selectedData.filter((item) => item.fteam === filter[1]);
            }   
            if (filter[2] && filter[2] !== 'All Positions') {
                selectedData = selectedData.filter((item) => item.pos === filter[2]);
            }
            if (switcher === 'team') {
                selectedData = aggregateTeamData(selectedData);
            }
            setFilteredData(selectedData)
   }, [data, switcher, filter]);
    return (
        <section key={switcher} id="stats" >
            <ul key={filteredData}>
                {filteredData.map((item) => <StatisticTab select = {switcher} key = {switcher === "player" ? item.id : item.fteam} {...item}  />)}      
            </ul>
        </section>
    )
}