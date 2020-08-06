import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import {Button} from "react-bootstrap";
import history from "./history";


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
                 
                   <DatePicker className= "dateField"  selected = {memoryDate} onChange = {handleDateChange} dateFormat = "dd/MM/yyyy" />

               
                    <textarea onChange = {handleMemoryChange}
                      placeholder = "Write your memory here..."
                       name =  "memoryInput"
                    value = {memoryInput}
                   />
                   

                   <input onClick = {handleSubmit}   type = "Submit"   defaultValue = "Create" />
        
          
        </form>
        <Button className='dashboard-button' variant="Primary" size="lg" onClick = {() => history.push('/login')}>Back to Login</Button>
        </div>


    )
    
    
}
export default DashboardForm;