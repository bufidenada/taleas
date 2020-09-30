import React, {useState} from "react";
import menu from '../Assets/icons8-menu.svg';
import {Avatar, Badge, Input} from 'antd';
import 'antd/dist/antd.css';
import data from '../../Json/Core.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import adventures from '../../Json/adventures.json';
import {Details, RightSideWrapper, Title} from "../../Styles";
import {SearchOutlined} from '@ant-design/icons';


const preffix = (
    <SearchOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const RightSide = () => {
    const [category, setCategory] = useState('Experiences');
    const [enxperienceColor, setExperienceColor] = useState('orange');
    const [placeColor, setPlaceColor] = useState('#E4E4E4');
    const [housingColor, setHousingColor] = useState('#E4E4E4');

    let cardsList = data[category].map(i => {
        return (
            <div style={{position: "relative", width: window.innerWidth / 4}}>
                <img src={i.image} width={window.innerWidth / 8} height={window.innerHeight / 2}
                     style={{borderRadius: '20px'}}/>
                <Title style={{
                    position: "absolute",
                    bottom: '10px',
                    width: '50%',
                    marginLeft: '10px'
                }}>{i.description}</Title>

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
        <div style={{display: 'flex', flexDirection: 'column', width: window.innerWidth / 2, padding: '20px',}}>
            <RightSideWrapper>
                <img src={menu}/>
                <RightSideWrapper style={{width: '20%', alignItems: 'center'}}>
                    <Details style={{color: 'black', marginBottom: '0px'}}>Discover</Details>
                    <Details style={{color: 'black', marginBottom: '0px'}}>Blog</Details>
                    <Badge dot>
                        <Avatar shape={"square"}
                                src="data:image/jpeg;base64,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"/>
                    </Badge>
                </RightSideWrapper>
            </RightSideWrapper>
            <Input
                placeholder="Search"
                style={{width: '90%', borderTop: '0px', borderLeft: '0px', borderRight: '0px', marginBottom: '10px'}}
                prefix={preffix}
            />
            <h1><strong>Discover</strong></h1>
            <RightSideWrapper style={{width: '50%'}}>
                <Details style={{color: enxperienceColor, cursor: 'context-menu'}} onClick={() => {
                    setCategory('Experiences')
                    setHousingColor('#E4E4E4')
                    setPlaceColor('#E4E4E4')
                    setExperienceColor('orange')
                }}>
                    Experiences
                </Details>
                <Details style={{color: placeColor, cursor: 'context-menu'}} onClick={() => {
                    setCategory('Places')
                    setHousingColor('#E4E4E4')
                    setPlaceColor('orange')
                    setExperienceColor('#E4E4E4')
                }}>
                    Places
                </Details>
                <Details style={{color: housingColor, cursor: 'context-menu'}} onClick={() => {
                    setCategory('Housing')
                    setHousingColor('orange')
                    setPlaceColor('#E4E4E4')
                    setExperienceColor('#E4E4E4')
                }}>
                    Housing
                </Details>
            </RightSideWrapper>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Carousel responsive={responsive}>
                    {cardsList}
                </Carousel>
            </div>
            <RightSideWrapper style={{width: '90%'}}>
                <h1>Adventurous Mood?</h1>
                <Details>show all</Details>
            </RightSideWrapper>
            <RightSideWrapper style={{justifyContent: 'space-around'}}>
                {adventuresList}
            </RightSideWrapper>
        </div>
    );
}

export default RightSide;
