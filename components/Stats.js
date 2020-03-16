import useStats from '../utils/useStats'

export default function Stats({ url }) {
    const stats = useStats(url);
    console.log(stats)
    if (!stats) return <p>Loading...</p>
    return (
        <div>
            <h3>Confirmed:</h3> <span>{stats.confirmed.value}</span>
            <h3>Recovered:</h3> <span>{stats.recovered.value}</span>
            <h3>Deaths: </h3><span>{stats.deaths.value}</span>
        </div>
    )
}
