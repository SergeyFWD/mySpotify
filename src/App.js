import Nav from '../src/modules/nav'
import Centerblock from '../src/modules/centerBlock'
import Sidebar from '../src/modules/sideBar'
import Bar from '../src/modules/bar'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <Centerblock />
          <Sidebar />
          <Bar />
        </main>
      </div>
    </div>
  )
}

export default App
