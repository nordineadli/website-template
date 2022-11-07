const paginate = (array) => {
    let newArray = []
    let tempArray = {}
    const subdiv = Math.floor(array.length / 10);
    for (let i = 1; i <= subdiv; i++) {
        if (i == subdiv) {
            tempArray = [ ...array.slice(((i - 1) * 10)) ]
            newArray = [...newArray, tempArray]
        }
        else {
            tempArray = [ ...array.slice(((i - 1) * 10), i * 10) ]
            newArray = [...newArray, tempArray]
            tempArray = {}
        }
    }
    return newArray

}

export default paginate
