import React, {FC} from 'react';
import Section from "../Section";
import LinkedIn from "../icons/LinkedIn";
import Github from "../icons/Github";

type FollowProps = {};

const Follow: FC<FollowProps> = () => {
    return (
        <Section title="follow me" className="d-flex justify-content-around">
            <LinkedIn as="a" href="https://www.linkedin.com/in/andr%C3%A9-karell-contreras-jim%C3%A9nez-44735666/" target="_blank" withRoundBorder size={40} />
            <Github as="a" href="https://github.com/akd3vs" target="_blank" withRoundBorder size={40} />
        </Section>
    );
};

export default Follow;
