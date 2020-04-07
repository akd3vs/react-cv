import React, {FC} from 'react';
import Section from "../Section";
import Briefcase from "../icons/Briefcase";
import Container from "../Container";

import ExperienceEntry from "../ExperienceEntry";

import { COLOURS_ENUM } from "../../theme/theme";

type ExperienceProps = {};

const Experience: FC<ExperienceProps> = (props) => {
    return (
        <Section title="profile" colour={COLOURS_ENUM.primary} Icon={Briefcase}>
            <Container>
                <ExperienceEntry
                    company="Softtek"
                    start="May 2019"
                    end="Current"
                    location="Aguascalientes, Ags, Mx"
                    position="Technical Lead"
                    items={[
                        // 'Started as a Senior Frontend Developer in React. The project is an Electron application with React that is being used by the field technicians that are in charge of repairing the instruments in the airports. It’s made for Windows machines.',
                        '<strong>Responsibilities:</strong> Technical Leader in charge of the architecture and quality of the app, ' +
                        'ensure and follow up best coding practices, ' +
                        'implementation of PoCs to be used by the team for future enhancements, ' +
                        'estimation and risk assessment.',
                        '<strong>Main technologies used:</strong> React, Webpack, Electron, ESLint, Prettier, Redux, Material UI, Bootstrap, Jenkins, MongoDB, Docker, Cypress, ServiceNow, REST API, OAuth2, JWT.'
                    ]}
                />
                <ExperienceEntry
                    company="GTA (Global Technology Associates)"
                    start="Sept 2018"
                    end="May 2019"
                    location="Mx"
                    position="Senior Frontend Developer"
                    items={[
                        '<strong>Responsibilities:</strong> Lead frontend developer in charge of the architecture and quality of the website, '+
                        'close contact with the client to adapt changes needed while we delivered features, '+
                        'proposed PoC of the base project and followed up for the finished product.',
                        '<strong>Main technologies used:</strong> React, Webpack, ESLint, Prettier, Redux, Material UI, Docker, Cypress, Bootstrap, REST API, OAuth2, JWT.'
                    ]}
                />
                <ExperienceEntry
                    company="Softtek"
                    start="Mar 2018"
                    end="Sept 2018"
                    location="Monterrey, N.l, Mx"
                    position="Frontend Developer"
                    items={[
                        '<strong>Responsibilities:</strong> Lead frontend developer in charge of researching the best library/framework to start a new product for the client, ' +
                        'develop further the PoC made as research ensuring the quality, developing features and adapting as requirements change.',
                        '<strong>Main technologies used:</strong> React, Webpack, ESLint, Prettier, Redux, Docker, Cypress, Bootstrap, REST API, OAuth2, JWT.'
                    ]}
                />
                <ExperienceEntry
                    company="Gamma Partners"
                    start="Jun 2017"
                    end="Mar 2018"
                    location="Chihuahua, Ch, Mx"
                    position="ServiceNow Developer"
                    items={[
                        '<strong>Responsibilities:</strong> ServiceNow developer in charge of doing implementations, working closely with team mates and doing integrations of different parts of the features.',
                        '<strong>Main technologies used:</strong> ServiceNow, JavaScript, REST API.'
                    ]}
                />
                <ExperienceEntry
                    company="Gamma Partners"
                    start="Jun 2017"
                    end="Mar 2018"
                    location="Chihuahua, Ch, Mx"
                    position="Fullstack Developer"
                    items={[
                        '<strong>Responsibilities:</strong> Fullstack developer doing stories, working closely with the team, sometimes discovering how to do a story, ' +
                        'collaborating with other team mates, supporting when needed, doing DB migrations.',
                        '<strong>Main technologies used:</strong> PHP, jQuery, Magento, MySQL, XML, REST API.'
                    ]}
                />
                <ExperienceEntry
                    company="Nettic"
                    start="Sept 2012"
                    end="Jun 2017"
                    location="Spain"
                    position="Project Leader"
                    items={[
                        '<strong>Responsibilities:</strong> Project Leader in change of every aspect of the projects from taking requirements, translating them into stories, working closely with ' +
                        'PO to adjust course of the project. Designing, implement and maintenance of the Database. Plan and develop features into the products of the company. Being the main point of contact of customers to receive customer support. ' +
                        'Plan, implement and maintain Linux Servers that host multiples websites used in all Spain.',
                        '<strong>Main technologies used:</strong> PHP, Symfony, jQuery, OpenCart, Prestashop, MySQL, XML, MongoDB, Angular.js, Backbone, Express, Sails.js, Docker, PHPUnit, REST API.'
                    ]}
                />
                <ExperienceEntry
                    company="Viluxion"
                    start="Jan 2010"
                    end="Nov 2013"
                    location="Mx"
                    position="Project Leader"
                    items={[
                        '<strong>Responsibilities:</strong> Project Leader in change of every aspect of the projects from taking requirements, translating them into stories, working closely with ' +
                        'PO to adjust course of the project. Designing, implement and maintenance of the Database. Plan and develop features into the products of the company. Plan, implement and maintain Linux Servers that host main products of the company.',
                        '<strong>Main technologies used:</strong> PHP, Codeigniter, jQuery, MySQL, Express, Websockets, PHPUnit.'
                    ]}
                />
            </Container>
        </Section>
    );
};

export default Experience;
