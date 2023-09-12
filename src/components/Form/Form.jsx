import React, {useState} from 'react'

function Form() {
    const [formData, setFormData] = useState({firstName: "", lastName: ""})
    const [finalData, setFinalData] = useState([])
    const [showData, setShowData] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        // setFormData(event.target.firstName.value)
        if(formData.firstName === "" ){
            setError("First Name is required")
        }else if(formData.lastName === ""){
            setError("Last Name is required")
        }else{
            setFinalData(finalData => [...finalData, formData])
            setError('')
            setShowData(true)
        }
    }

    const handleChange = (event) => {
        const val = event.target.value
        console.log(event.target.value)
        setFormData({...formData, [event.target.name]: val})
    }
    const checkboxHanlding = (event) => {}
  return (
    <div>

    <form onSubmit={handleSubmit}>
        <label name='firstName'>First Name: </label>
        <input type="text" name="firstName" id="" onChange={handleChange}/>
        <label name='firstName'>Last Name: </label>
        <input type="text" name="lastName" id="" onChange={handleChange}/>
        <label name='tag'>Tags: </label>
        <input type="checkbox" value='Testing' name="tag" id="" onChange={checkboxHanlding}/>
        <input type="submit" value="Submit" />
    </form>
    <h1 style={{color: 'red'}}>{error}</h1>
    <hr />
    <hr />
    {setShowData &&finalData.map((dataItem) => 
    <div>

        <h1>First Name: {dataItem.firstName}</h1>
        <h1>Last Name: {dataItem.lastName}</h1>
    </div>
    )}
    </div>
  )
}

export default Form