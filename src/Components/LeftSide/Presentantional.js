import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Details} from "../../Styles";
import {Button} from "antd";
import {layoutGenerator} from "react-break";

const screen = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
});
const OnMobileTablet = screen.isAtMost('phablet');

const OnAtLeastTablet = screen.isAtLeast('tablet');


const LeftSide = () => {

    const leftSideScreen = (topWidth, width, buttonWidth) => {
        return (
            <div style={{width: topWidth}}>

                <Carousel showStatus={false} showThumbs={false}
                          style={{backgroundColor: 'white', height: '100%', borderRadius: '20px'}}>

                    <div style={{height: '100%'}}>
                        <img
                            src={'https://images.unsplash.com/photo-1514499014014-feb5c22fab12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=842&q=80'}
                            style={{borderRadius: '50px'}}/>
                        <OnAtLeastTablet>
                            <div style={{
                                position: 'absolute',
                                width: window.innerWidth / 2,
                                display: 'flex',
                                paddingLeft: '80px'
                            }}>
                                <h1 style={{
                                    fontFamily: `'Montserrat', sans-serif`,
                                    position: "absolute",
                                    bottom: window.innerHeight / 2.5,
                                    width: width,
                                    color: 'white',
                                    textAlign: 'initial',
                                    fontSize: 'xx-large'
                                }}>Get ready for your life time journey!</h1>
                                <Details style={{
                                    position: "absolute",
                                    fontFamily: `'Montserrat', sans-serif`,
                                    bottom: window.innerHeight / 3,
                                    width: width,
                                    float: 'left',
                                    textAlign: 'initial'
                                }}>Collection of the most beautiful places, experiences and unusual housing in the
                                    world</Details>
                                <Button type="default" style={{
                                    position: "absolute",
                                    bottom: window.innerHeight / 3.9,
                                    backgroundColor: '#f75d37',
                                    borderColor: '#f75d37',
                                    color: 'white',
                                    width: buttonWidth,
                                    height: '60px',
                                    borderRadius: '10px'
                                }}> Get started</Button>

                            </div>
                        </OnAtLeastTablet>
                    </div>
                    <img
                        src={'https://images.unsplash.com/photo-1486604028229-1b239b521631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
                        height={'100%'} style={{borderRadius: '50px'}}/>
                </Carousel>
            </div>
        )
    }

    return (
        <div>
            <OnMobileTablet>
                {leftSideScreen(window.innerWidth, '50%', '50%')}
            </OnMobileTablet>
            <OnAtLeastTablet>
                {leftSideScreen(window.innerWidth / 2, '40%', '30%')}
            </OnAtLeastTablet>
        </div>
    );

};

export default LeftSide;
