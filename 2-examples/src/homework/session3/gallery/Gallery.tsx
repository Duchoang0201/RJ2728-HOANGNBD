import React, { useEffect, useState } from 'react'
type Props = {}

function Gallery(props: Props) {
    const [tabs, setTabs] = useState([
        {
            id: 1,
            title: require('./IMG/GALLERY1.jpg'),
        },
        {
            id: 2,
            title: require('./IMG/GALLERY2.jpg'),
        },
        {
            id: 3,
            title: require('./IMG/GALLERY3.jpg'),
        },

    ])

    const [tab, setTab] = useState<number>(0)
    const MoveStraight = () => {
        if (tab <= 1) {
            setTab(tab + 1)
        } else {
            setTab(0)
        }
        console.log(tab);

    }
    const MoveBack = () => {
        if (tab >= 1) {
            setTab(tab - 1)
        }
        else {
            setTab(2)
        }
    }
    const [activeTab, setActiveTab] = useState<number>()
    
    return (
        <>
            {/* <div className="container">
                <div className="warraper">
                    <div className="row">
                        <button onClick={MoveBack}>&lt;</button>
                        {<img src={tabs[tab].title} />}
                        <button onClick={MoveStraight}>&gt;</button>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="warraper">
                    <div className="row">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={tab} className={`${tab === 0 && "active"}`} aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={tab} className={`${tab === 1 && "active"}`} aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={tab} className={`${tab === 2 && "active"}`} aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {<img className="d-block w-100" src={tabs[tab].title} />}
                                </div>
                            </div>
                            <button onClick={MoveBack} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="false" ></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button onClick={MoveStraight} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery