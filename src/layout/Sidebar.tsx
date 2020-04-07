import React, {FC} from 'react';
import styled from "styled-components";

import Contact from "../components/SidebarSections/Contact";
import Follow from "../components/SidebarSections/Follow";
import References from "../components/SidebarSections/References";
import Hobbies from "../components/SidebarSections/Hobbies";

type SidebarProps = {};

const SidebarWrapper = styled.div`
    min-height: 100%;
    background-color: ${({theme}) => theme.sidebar.backgroundPrimary};
    width: 310px;
    // margin-left: 3.125rem;
    color: #fff;
    padding-top: 50px;
    
    .subtitle {
      font: ${({theme}) => theme.text.subtitle.font};
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    .title {
        margin: 0 0 0 -16px;
        h1 {
            font: ${({theme}) => theme.text.title.font};
            background-color: ${({ theme }) => theme.body.backgroundPrimary};
            color: ${({theme}) => theme.text.title.color};
            position: relative;
            width: max-content;
            padding: 40px 0 40px 15px;
            text-transform: uppercase;
            letter-spacing: 6px;
            margin-bottom: 0;
        }
    }
`;

const Sidebar: FC<SidebarProps> = ({children}) => {
    return (
        <SidebarWrapper className="ml-5 col-auto position-static">
            <div className="row">
                <h2 className="col subtitle">Fullstack Developer</h2>
            </div>
            <div className="row">
                <div className="title col">
                    <h1>andre contreras</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Contact />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Follow />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <References />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Hobbies />
                </div>
            </div>
        </SidebarWrapper>
    );
};

export default Sidebar;
