import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";


function DashboardForm () {

    const [memoryDate, setMemoryDate] = useState(new Date());
    const [memoryInput, setMemoryInput] = useState('');


    const handleDateChange = date => setMemoryDate (date);
    const handleMemoryChange = (e) => { setMemoryInput (e.target.value)  };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log (memoryDate, memoryInput);
    }

    


  
    return(

        
        <div className = 'dashboard-form'>

        <h2>Create a Memory</h2>

        <form>
                    <label>Date :</label>
                   <DatePicker className= "dateField"  selected = {memoryDate} onChange = {handleDateChange} dateFormat = "dd/MM/yyyy" />

               <label>Memory :</label>
                    <input onChange = {handleMemoryChange}
                       name =  "memoryInput"
                    value = {memoryInput}
                   />
                   

                   <input onClick = {handleSubmit}   type = "Submit"   value = "Create Memory" />

               
          
        </form>
        </div>


    )
    
    
}
export default DashboardForm;