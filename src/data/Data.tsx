let exportedData = {}
export const LoadData = (data, group, selectedData, setSelectedData) => {
    // console.log(data)
    import(`../data/${group}/${data}.json`).then((importedData) => {
        console.log(importedData.default.properties)
        exportedData = importedData.default.properties
        setSelectedData(exportedData)
        console.log(selectedData)
    })
}

// export const mydata = data.allOf[1].properties
// export const mydata = exportedData
export default LoadData
// export const size = Object.keys(DR).length
