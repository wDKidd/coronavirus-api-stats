import useStats from '../utils/useStats'
import { useState } from 'react';
import Stats from './Stats'


export default function CountrySelector() {
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('USA');

    if (!countries) return <p>Loading...</p>
    return (
        <div>
            <h2>Currently Showing {selectedCountry}</h2>
            <select
                onChange={
                    e => {
                        setSelectedCountry(e.target.value)
                    }
                }>
                {Object.entries(countries.countries).map(([country, code]) => (
                    <option key={country} selected={selectedCountry === countries.iso3[code]} value={countries.iso3[code]}>{country}</option>
                ))}
            </select>
            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />

        </div>
    )
}
