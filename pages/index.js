import Stats from '../components/Stats'
import CountrySelector from '../components/CountrySelector'

export default function indexPage() {
    return <div>
        <h1>Coronavirus Stats</h1>
        <Stats url='https://covid19.mathdro.id/api' />
        <CountrySelector />
    </div>
}