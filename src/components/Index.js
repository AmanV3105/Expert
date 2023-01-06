// For data cards where I randomly choosed some Api of Github Users and fetched it
import React, { useEffect, useState } from 'react'

const Index = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
        <>
            <div className="details">
                <h1 style={{
                    display: 'inline-block', marginTop: '77px',
                    marginLeft: '170px'
                }}>Our Experts</h1>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search Experts Available" aria-label="Search" style={{ display: 'inline-block' }} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            <div className="container" id="card">

                {
                    users.map((curElem) => {
                        return (

                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                                    <img src={curElem.avatar_url} alt="" />
                                    <div className="userName">{curElem.login}</div>
                                    <div className="userUrl">{curElem.url}</div>
                                    <div className="detail-box">

                                        <div className="gitDetail"><span>Articles</span>23</div>
                                        <div className="gitDetail"><span>Following</span>45</div>
                                        <div className="gitDetail"><span>Followers</span>11</div>
                                    </div>
                                    <button className="seeMore">See More</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </>


    )
}

export default Index;