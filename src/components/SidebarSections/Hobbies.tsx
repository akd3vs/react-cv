import React, {FC, useState} from 'react';

import Section from "../Section";

import Js from "../icons/Js";
import Steam from "../icons/Steam";
import Tv from "../icons/Tv";
import Twitch from "../icons/Twitch";
import Book from "../icons/Book";
import Football from "../icons/Football";

import {colours, COLOURS_ENUM} from "../../theme/theme";

type HobbiesProps = {};

const Hobbies: FC<HobbiesProps> = () => {
    const [iconsProps] = useState({ size: 60, colour: colours[COLOURS_ENUM.sidebarContentContrast], margin: '0 auto' });
    return (
        <Section title="hobbies">
            <div className="text-uppercase d-flex flex-wrap justify-content-around row">
                <div className="text-center col-4 pb-4">
                    <Js {...iconsProps} />
                    code
                </div>
                <div className="text-center col-4 pb-4">
                    <Steam {...iconsProps} />
                    Games
                </div>
                <div className="text-center col-4 pb-4">
                    <Tv {...iconsProps} />
                    Series
                </div>
                <div className="text-center col-4 pb-4">
                    <Twitch {...iconsProps} />
                    Streams
                </div>
                <div className="text-center col-4 pb-4">
                    <Book {...iconsProps} />
                    Read
                </div>
                <div className="text-center col-4 pb-4">
                    <Football {...iconsProps} />
                    Football
                </div>
            </div>
        </Section>
    );
};

export default Hobbies;
