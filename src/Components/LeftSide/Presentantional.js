import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Details, Title} from "../../Styles";
import {Button} from "antd";


const LeftSide = () => {

    return (
        <div style={{width: window.innerWidth / 2}}>
            <Carousel showStatus={false} autoPlay showThumbs={false}
                      style={{backgroundColor: 'red', height: window.innerHeight / 2, borderRadius: '20px'}}>
                <div style={{position: "relative", width: '100%'}}>
                    <img
                        src={'https://images.unsplash.com/photo-1477061261587-eb9a05c18762?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}
                        height={window.innerHeight} width={window.innerWidth / 2} style={{borderRadius: '50px'}}/>
                    <div style={{
                        position: 'absolute',
                        width: window.innerWidth / 2,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Title style={{
                            position: "absolute",
                            bottom: window.innerHeight / 2.2,
                            width: '100%',
                            marginLeft: '10px'
                        }}>Get ready for your life time journey!</Title>
                        <Details style={{
                            position: "absolute",
                            bottom: window.innerHeight / 3,
                            width: '50%',
                            marginLeft: '10px'
                        }}>Collection of the most beautiful places, experiences and unusual housing in the
                            world</Details>
                        <Button shape="round" style={{
                            position: "absolute",
                            bottom: window.innerHeight / 4,
                            backgroundColor: '#D02D17',
                            borderColor: '#D02D17',
                            color: 'white',
                            width: '20%'
                        }}> Get started</Button>

                    </div>
                </div>
                <img
                    src={'https://images.unsplash.com/photo-1486604028229-1b239b521631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                    height={window.innerHeight} width={window.innerWidth / 2} style={{borderRadius: '50px'}}/>
            </Carousel>
        </div>

    );

};

export default LeftSide;
