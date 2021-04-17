import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import UserTable from '../../Component/UserTable'

export default function Api() {

    const [totalUsers, setTotalUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [name, setName] = useState('')
    const recordsPerPage = 50;



    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=500')
            .then((res) => {
                console.log("res:", res);
                setLoading(false);
                setTotalUsers(res.data.results);

            }).catch((err) => {
                console.log("err:", err)
            })
    }, [])  // componentDidMount


    const changePageNumber = useCallback(
        (e) => {
            setCurrentPage(e.target.id);
        },
        [currentPage],
    )

    // const lastIndex = currentPage * recordsPerPage;


    const lastIndex = useMemo(() => {
        console.log("last index calculated");
        return currentPage * recordsPerPage
    }, [currentPage, recordsPerPage])

    const firstIndex = useMemo(() => lastIndex - recordsPerPage, [lastIndex])

    const userToDisplay = useMemo(() => totalUsers.slice(firstIndex, lastIndex), [firstIndex, lastIndex, totalUsers]);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers.length / recordsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log("pages:", pageNumbers)
    if (loading) {
        return <div style={{ width: '100vw', height: '100vh', background: "#5C5454" }} className="text-center ">
            <Spinner animation="border" variant="primary" className="my-auto" />
        </div>
    }
    return (
        <Container>
            <Row >
                <Col> <h6 className="text-danger text-center">Api Calling</h6></Col>
            </Row>
            <Row>
                <Col>
                    <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Col>
                <Col>
                    <p>{name}</p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <UserTable user={userToDisplay} start={firstIndex} />
                </Col>
            </Row>
            <Row>
                <Col>

                    <ul>
                        <li className="bg-danger">{firstIndex}</li>
                        {pageNumbers.map(page => {
                            return <li id={page} onClick={changePageNumber}>{page}</li>
                        })}
                        <li className="bg-danger">{lastIndex}</li>
                    </ul>
                </Col>
            </Row>

        </Container>
    )
}

