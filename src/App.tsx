import React from "react"
import { Container } from "react-bootstrap"
import { Content } from "./components/Content"
import Header from "./components/Header"
import { Selection } from "./components/Selection"
// import { mydata } from "./data/Data"
import { catalog } from "./data/ExportCatalog"
import "./index.css"

const App: React.FC = () => {
    const [selectedData, setSelectedData] = React.useState([{}])
    // console.log(selectedData)
    // console.log(Object.keys(selectedData[0]).length)
    return (
        <div>
            <Container>
                <Header />
                <Selection
                    catalog={catalog}
                    selectedData={selectedData}
                    setSelectedData={setSelectedData}
                />
                {Object.keys(selectedData[0]).length > 0 && (
                    <Content selectedData={selectedData} />
                )}
            </Container>
        </div>
    )
}

export default App
