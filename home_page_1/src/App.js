import './App.css'
import Header from './containers/Header'
import Offer from './containers/Offer'
import Brand from './containers/Brand'
import Portafolio from './containers/Portafolio'
import Testimon from './containers/Testimon'
function App() {
    return (
        <div className="App">
            <Header />
            <Offer></Offer>
            <Brand></Brand>
            <Portafolio></Portafolio>
            <Testimon></Testimon>
        </div>
    )
}
export default App
