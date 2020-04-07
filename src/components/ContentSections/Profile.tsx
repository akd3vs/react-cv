import React, {FC} from 'react';
import Section from "../Section";
import User from "../icons/User";
import Container from "../Container";

import { COLOURS_ENUM } from "../../theme/theme";
import Skill from "../Skill";

type ProfileProps = {};

const Profile: FC<ProfileProps> = (props) => {
    return (
        <Section title="profile" colour={COLOURS_ENUM.primary} Icon={User}>
            <p>I'm a Fullstack Developer with vastly experience in multiples areas of Software Development.
                I consider myself very quick, flexible and versatile when learning new technologies.</p>
            <p>I've taken very challenging projects and transform them into good products aligned with the industry standards for code quality such as Automation Testing, Unit Testing and ESLint.</p>
            <p>I'm passionate about the quality of my code, using the latest technologies of the industry, taking challenges, digging into the code to discover areas of opportunity and coach other developers.</p>
            <p>Performed good while working under pressure, deliver results in short period of time, very agile and used to change focus.</p>
            <p>I've implemented CI/CD pipelines, Cypress for automation.</p>
            <Container rowClasses="mt-5">
                <div className="row d-flex justify-content-around">
                    <div className="col-2">
                        <Skill name="React" progress={90} writtenLevel="Expert" />
                    </div>
                    <div className="col-2">
                        <Skill name="Javascript" progress={90} writtenLevel="Expert" />
                    </div>
                    <div className="col-2">
                        <Skill name="HTML/CSS" progress={90} writtenLevel="Expert" />
                    </div>
                    <div className="col-2">
                        <Skill name="Node.js" progress={80} writtenLevel="Expert" />
                    </div>
                    <div className="col-2">
                        <Skill name="PHP" progress={70} writtenLevel="High" />
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Profile;
