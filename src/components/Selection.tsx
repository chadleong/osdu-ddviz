import React, { useState } from "react"
import { Dropdown } from "react-bootstrap"
// import { LoadData } from "../data/Data"
interface Props {
    catalog: object
    selectedData: object
    setSelectedData: React.Dispatch<React.SetStateAction<{}[]>>
}

export const Selection: React.FC<Props> = ({
    catalog,
    selectedData,
    setSelectedData,
}) => {
    // console.log(data["data"])
    // console.log(catalog)
    const [title, setTitle] = React.useState("Select Schema")

    const handleChange = (e) => {
        // console.log(e)
        // console.log(catalog[e.split("#")[1]]["group"])
        // console.log(catalog)
        setTitle(e.split("#")[1])
        // setSelectedData(catalog[e.split("#")[1]]["group"])
        // LoadData(
        //     e.split("#")[1],
        //     catalog[e.split("#")[1]]["group"],
        //     selectedData,
        //     setSelectedData
        // )
        import(
            `../data/${catalog[e.split("#")[1]]["group"]}/${
                e.split("#")[1]
            }.json`
        ).then((importedData) => {
            console.log(importedData.default)
            console.log(importedData.default.hasOwnProperty("allOf"))
            if (importedData.default.hasOwnProperty("allOf")) {
                console.log(importedData.default.allOf[1].properties)
                setSelectedData([importedData.default.allOf])
            } else if (importedData.default.hasOwnProperty("properties")) {
                console.log(importedData.default.properties)
                setSelectedData([importedData.default.properties])
            }

            // console.log(selectedData)
            // exportedData = importedData.default.properties
        })

        // console.log(selectedData)
    }

    return (
        <div>
            <Dropdown onSelect={(e) => handleChange(e)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {title}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {Object.keys(catalog).map((key, i) =>
                        //if key does not contain "*"
                        !key.includes("*") ? (
                            <Dropdown.Item href={`#${key}`} key={i}>
                                {key}

                                {/* {console.log(key)} */}
                            </Dropdown.Item>
                        ) : null
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Selection
