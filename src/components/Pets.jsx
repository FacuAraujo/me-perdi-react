import React from 'react'

// Import components
import Filter from './Filter'
import PetsList from './PetsList'

export default function Pets() {
    return (
        <main>
            <Filter></Filter>
            <PetsList></PetsList>
        </main>
    )
}
