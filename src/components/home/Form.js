import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExerciseForm = ({ closeModal, fetchData }) => {
    const [ username, setUserName ] = useState('');
    const [ activityType, setActivity ] = useState('');
    const [ duration, setDuration ] = useState('');
    const [ date, setDate ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/info/save', {username, activityType, duration, date, description})
        .then( (response) => {
            if (response.status === 200){
                const ExcInfoObj = response.data.data.posts;
                console.log('post call\n', ExcInfoObj)
                fetchData();
                closeModal();
            }
            // console.log(response.data.data.message)
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Name</label>
                    <input 
                    type="text" 
                    class="form-control"
                    value={username}
                    onChange={ (e) => {setUserName(e.target.value)} } 
                    id="inputName" />
                </div>
                <div class="mb-3">
                    <label for="inputDate" class="form-label">Date</label>
                    <input 
                    type="date" 
                    class="form-control" 
                    value={ date } 
                    onChange={ (e) => {setDate(e.target.value)} } 
                    id="inputDate" />
                </div>
                <div>
                    <label for='activityType' class='form-label'>
                        Activity type:
                    </label>
                    <select 
                    id='activityType' 
                    name='activityType'
                    value={ activityType } 
                    onChange={ (e) => {setActivity(e.target.value)} }>
                        <option selected>Choose an Activity</option>
                        <option value="Run">Run</option>
                        <option value="Bicycle-ride">Bicycle-ride</option>
                        <option value="Swim">Swim</option>
                        <option value="Walk">Walk</option>
                        <option value="Hike">Hike</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="inputDuration" class="form-label"> Activity Duration</label>
                    <input 
                    type="number" 
                    class="form-control" 
                    value={ duration }
                    onChange={ (e) => {setDuration(e.target.value)} } 
                    id="inputDuration" />
                </div>
                
                <div class="mb-3">
                    <label for="inputDescription" class="form-label">Activity Description</label>
                    <textarea 
                    rows="3" 
                    cols="50" 
                    class="form-control" 
                    value={ description }
                    onChange={ (e) => {setDescription(e.target.value)} } 
                    id="inputDescription"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" >Submit Activity</button>
                </form>  
        </div>          
    )
}
export default ExerciseForm;