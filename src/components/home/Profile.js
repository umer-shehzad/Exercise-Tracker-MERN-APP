import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ExerciseCard from './Cards';
import Footer from './Footer';
import Header from './Header';
import FormModal from './FormModal';
import axios from 'axios';


const Profile = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    // Display 4 cards per page
    const cardsPerPage = 4;
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Function to move to the next page
    const handleNextPage = () => {
        if (startIndex + cardsPerPage < data.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to move to the previous page
    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

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
    }, []);


    return (
        <div>
            {/* <div>
                <Header />
            </div> */}

            <div className="d-flex justify-content-between">
                <div className='p-2'>
                    <FormModal fetchData={fetchDataFromAPI} />
                </div>
                <div className="p-2">
                    <Form className="d-inline-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search by Date"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
            </div>

            <div>
                {
                    data?.slice(startIndex, endIndex).map((item) => (
                        <ExerciseCard
                            name={item.username}
                            description={item.description}
                            activityType={item.activityType}
                            duration={item.duration}
                            date={item.date.split('T')[0]}
                            id={item._id}
                            handleDelete={handleDelete}
                        />
                    ))
                }

                {/* Next and Previous buttons */}
                {data.length > cardsPerPage && (
                    <div className="d-flex justify-content-between mt-3">
                        <Button
                            variant="outline-primary"
                            disabled={currentPage === 0}
                            onClick={handlePreviousPage}
                            className='preBtn'
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline-primary"
                            disabled={endIndex >= data.length}
                            onClick={handleNextPage}
                            className="ms-2 nextBtn"
                        >
                            Next
                        </Button>
                    </div>
                )}

            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default Profile;