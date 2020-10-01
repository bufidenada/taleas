import React, {useState} from "react";
import menu from '../Assets/ic_menu_modern.png';
import {Avatar, Badge, Input} from 'antd';
import 'antd/dist/antd.css';
import data from '../../Json/Core.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import adventures from '../../Json/adventures.json';
import {Details, RightSideWrapper, Title} from "../../Styles";
import {SearchOutlined} from '@ant-design/icons';
import {layoutGenerator} from "react-break";

const screen = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
});
const OnMobileTablet = screen.isAtMost('phablet');

const OnAtLeastTablet = screen.isAtLeast('tablet');


const preffix = (
    <SearchOutlined
        style={{
            fontSize: 24,
            color: 'black',
        }}
    />
);

const RightSide = () => {
    const [category, setCategory] = useState('Experiences');
    const [experienceColor, setExperienceColor] = useState('#f75d37');
    const [placeColor, setPlaceColor] = useState('#d5d5d5');
    const [housingColor, setHousingColor] = useState('#d5d5d5');

    const cardItem = (i) => {
        return <div style={{position: "relative"}}>
            <img src={i.image} width={'100%'} height={'320px'}
                 style={{borderRadius: '8px'}}/>
            <Title style={{
                position: "absolute",
                bottom: '10px',
                width: '100%',
                marginLeft: '10px'
            }}>{i.description}</Title>

        </div>
    }

    const rightSideScreen = (width, height, padding, paddingleft, size, rightWidth, searchWidth) => {
        return (<div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            width: width,
            height: height,
            padding: padding,
            paddingLeft: paddingleft,
        }}>
            <RightSideWrapper>
                <img src={menu} width={'30px'} height={'30px'}/>
                <RightSideWrapper style={{width: '40%', alignItems: 'center'}}>
                    <Details style={{
                        color: 'black',
                        marginBottom: '0px',
                        fontSize: '20px'
                    }}><strong>Discover</strong></Details>
                    <Details style={{color: 'black', marginBottom: '0px'}}><strong>Blog</strong></Details>
                    <Badge dot>
                        <Avatar size={size} shape={"square"} style={{borderRadius: '10px'}}
                                src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
                    </Badge>
                </RightSideWrapper>
            </RightSideWrapper>
            <Input
                placeholder="Search"
                style={{
                    width: '90%',
                    outline: 'none',
                    height: '50px',
                    borderColor: '#d5d5d5',
                    borderTop: '0px',
                    borderLeft: '0px',
                    borderRight: '0px',
                    marginBottom: '40px'
                }}
                prefix={preffix}
            />
            <h1 style={{fontFamily: `'Montserrat', sans-serif`}}><strong>Discover</strong></h1>
            <RightSideWrapper style={{width: rightWidth}}>
                <Details style={{color: experienceColor, cursor: 'context-menu', fontWeight: 'bold'}}
                         onClick={() => {
                             setCategory('Experiences')
                             setHousingColor('#d5d5d5')
                             setPlaceColor('#d5d5d5')
                             setExperienceColor('#f75d37')
                         }}>
                    Experiences
                </Details>
                <Details style={{color: placeColor, cursor: 'context-menu', fontWeight: 'bold'}}
                         onClick={() => {
                             setCategory('Places')
                             setHousingColor('#d5d5d5')
                             setPlaceColor('#f75d37')
                             setExperienceColor('#d5d5d5')
                         }}>
                    Places
                </Details>
                <Details style={{color: housingColor, cursor: 'context-menu', fontWeight: 'bold'}}
                         onClick={() => {
                             setCategory('Housing')
                             setHousingColor('#f75d37')
                             setPlaceColor('#d5d5d5')
                             setExperienceColor('#d5d5d5')
                         }}>
                    Housing
                </Details>
            </RightSideWrapper>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Carousel responsive={responsive}>
                    {cardsList}
                </Carousel>
            </div>
            <RightSideWrapper style={{width: '90%', marginTop: '50px'}}>
                <h1 style={{fontFamily: `'Montserrat', sans-serif`}}><strong>Adventurous Mood?</strong></h1>
                <Details>show all</Details>
            </RightSideWrapper>
            <RightSideWrapper style={{justifyContent: 'space-around'}}>
                {adventuresList}
            </RightSideWrapper>
        </div>)
    }


    let cardsList = data[category].map(i => {
        return (
            <div style={{width: '90%'}}>
                <OnMobileTablet>
                    {cardItem(i)}
                </OnMobileTablet>
                <OnAtLeastTablet>
                    {cardItem(i)}
                </OnAtLeastTablet>
            </div>
        )
    })

    let adventuresList = adventures.map(i => {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={i.image} width={'40px'} height={'40px'}/>
                <Details>{i.name}</Details>
            </div>

        )
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <div>
            <OnMobileTablet>
                {rightSideScreen(window.innerWidth, window.innerHeight, '10px', 0, 'large', window.innerWidth / 3)}
            </OnMobileTablet>
            <OnAtLeastTablet>
                {rightSideScreen('40vw', '80vh', '8px', '64px', 'large')}
            </OnAtLeastTablet>
        </div>
    );
}

export default RightSide;
