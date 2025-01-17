import TabFilter from './TabFilter'
import FilterConcept from './FilterConcept'
import { FILTERS_DATA,YEARS, TEAMS, POSITIONS } from './StatisticsData'
import React, {useEffect, useState} from 'react'
export default function Filters({switcher, onFilterChange}) {
    const [filterChoice, setFilterChoice] = useState({
        year: YEARS[0],     
        team: TEAMS[0],  
        position: POSITIONS[0],
    });
    const [isOpen, setIsOpen] = useState(false)
    const toggleFilter = (filterName) => {
        setIsOpen(prev => (prev === filterName ? null : filterName));
    };
    useEffect(() => {
        setFilterChoice({
          year: YEARS[0],
          team: TEAMS[0],
          position: POSITIONS[0],
        });
      }, [switcher]);
    useEffect(() => {
        onFilterChange(Object.values(filterChoice));
    }, [filterChoice]);
    function filtersChoiceHandler(filterType, filterChoice) {
        setFilterChoice((prev) => ({
            ...prev, [filterType]: filterChoice
        }))
    }
    const isDisabled = switcher === 'team';
    return (<section >
                <div id="filters_pos">
                    <div >                 
                        <TabFilter isOpen = {isOpen === 'year'} onToggle = {() => toggleFilter('year')} selectedValue={filterChoice.year}   data = {YEARS} filterSelect = {(choice) => filtersChoiceHandler('year', choice)}>{filterChoice.year}</TabFilter>                    
                    </div>
                    <div >
                        <div>
                        <TabFilter isOpen = {isOpen === 'teams'} onToggle = {!isDisabled ? () => toggleFilter('teams') : undefined} selectedValue={filterChoice.team} disabled = {isDisabled} data={TEAMS} filterSelect = {(choice) => filtersChoiceHandler('team', choice)} >{filterChoice.team}</TabFilter>
                        </div>
                    </div>
                    <div >
                        <div>
                        <TabFilter isOpen = {isOpen === 'positions'} onToggle = {!isDisabled ? () => toggleFilter('positions') :undefined} selectedValue={filterChoice.position} disabled = {isDisabled} data={POSITIONS} filterSelect = {(choice) => filtersChoiceHandler('position', choice)} >{filterChoice.position}</TabFilter>
                        </div>
                    </div>
                </div>
               <FilterConcept text = {FILTERS_DATA} select = {switcher}></FilterConcept>
            </section>
            
)}