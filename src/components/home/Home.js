import React, { useEffect, useState }  from 'react';
import { Button, Form } from 'react-bootstrap';
import ExerciseCard from './Cards';
import Footer from './Footer';
import Header from './Header';
import FormModal from './FormModal';
import axios from 'axios';


const Home = () => {
    const [ data, setData ] = useState([]);

    //get call
    const fetchDataFromAPI = async () => {
        try {
          const response = await axios.get('http://localhost:9000/info/get');
          setData(response.data.data.posts);
          console.log('get call');
        } catch (error) {
          console.log("fetchDataFromAPI is not working.");
        }
      };

    //delete call
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
              `http://localhost:9000/info/delete/${id}`
            );
            if (response.status === 200) {
              const newData = data.filter((item) => item._id !== id);
              setData(newData);
              console.log('delete call');
            }
        } catch (error) {
            console.log('handleDelete is not working.');
        }
    };   

    useEffect(() => {
        fetchDataFromAPI();
    },[]);


    return(
        <div>
            <Header />

            <div >
                <FormModal fetchData = {fetchDataFromAPI}/>

                <Form className="d-inline-flex justify-content-end">
                    <Form.Control
                    type="search"
                    placeholder="Search by Date"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
            {
                data?.map((item) => (
                    <ExerciseCard 
                    name={item.username} 
                    description={item.description} 
                    activityType={item.activityType}
                    duration={item.duration} 
                    date={item.date.split('T')[0]}
                    id = {item._id} 
                    handleDelete = { handleDelete }
                    />
                    
                ))
            }
            
            <Footer />
        </div>
    )
}
export default Home;