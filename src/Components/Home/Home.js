import React from "react";
import { Wrapper} from '../../Styles';
import LeftSide from "../LeftSide/Presentantional";
import RightSide from "../RightSide/RightSide";

const Home = () => {
    return (
        <Wrapper >
            <LeftSide />
            <RightSide />
        </Wrapper>
    );
}
export default Home;
