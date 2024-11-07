import TabFilter from './TabFilter'
import FilterConcept from './FilterConcept'
import { FILTERS_DATA,YEARS, TEAMS, POSITIONS } from './StatisticsData'
import React, {useEffect, useState} from 'react'
export default function Filters({switcher, onFilterChange}) {
    const [filterChoice, setFilterChoice] = useState({
        year: YEARS[0],     
        team: 'All Teams',  
        position: 'All Positions',
    });
    const [isOpen, setIsOpen] = useState(false)
    const toggleFilter = (filterName) => {
        setIsOpen(prev => (prev === filterName ? null : filterName));
    };
    useEffect(() => {
        onFilterChange(Object.values(filterChoice));
    }, [filterChoice]);
    function filtersChoiceHandler(filterType, filterChoice) {
        setFilterChoice((prev) => ({
            ...prev, [filterType]: filterChoice
        }))
    }
    return (<section >
                <div id="filters_pos">
                    <div >                 
                        <TabFilter isOpen = {isOpen === 'year'} onToggle = {() => toggleFilter('year')} data = {YEARS} filterSelect = {(choice) => filtersChoiceHandler('year', choice)} >{YEARS[0]}</TabFilter>                    
                    </div>
                    <div >
                        <div>
                        <TabFilter isOpen = {isOpen === 'teams'} onToggle = {() => toggleFilter('teams')} data={TEAMS} filterSelect = {(choice) => filtersChoiceHandler('team', choice)} >{TEAMS[0]}</TabFilter>
                        </div>
                    </div>
                    <div >
                        <div>
                        <TabFilter isOpen = {isOpen === 'positions'} onToggle = {() => toggleFilter('positions')} data={POSITIONS} filterSelect = {(choice) => filtersChoiceHandler('position', choice)} >{POSITIONS[0]}</TabFilter>
                        </div>
                    </div>
                </div>
               <FilterConcept text = {FILTERS_DATA} select = {switcher}></FilterConcept>
            </section>
            
)}