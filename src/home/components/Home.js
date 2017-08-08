import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Grid } from 'grid-styled'

import { Heading, SubHeading, Link, Text, BoldLink } from '../../styled_components/src';

export default class Home extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Flex wrap>
                    <Box flex='1 1 auto' p={4} pt={[1, 4]}>
                        <Heading>Dylan Stein</Heading>
                        <SubHeading>Full stack means full stack</SubHeading>
                        <SubHeading>Django. React. AWS.</SubHeading>
                        <SubHeading>Brooklyn</SubHeading>
                    </Box>
                </Flex>

                <Flex wrap>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <Link href="https://www.github.com/djstein/">GitHub</Link>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <Link href="https://www.twitter.com/d_j_stein">Twitter</Link>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <Link href="https://www.linkedin.com/in/dylanstein">LinkedIn</Link>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <Link href="https://medium.com/@djstein">Medium</Link>
                    </Box>
                </Flex>

                <Flex>
                    <Box p={4} pb={1}>
                        <SubHeading>Modern Django</SubHeading>
                    </Box>
                </Flex>

                <Flex wrap>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="https://medium.com/@djstein/modern-django-part-2-rest-apis-apps-and-django-rest-framework-ea0cac5ab104"> Part 2: REST APIs, Apps, and Django REST Framework</BoldLink>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="https://medium.com/@djstein/modern-django-part-1-project-refactor-and-meeting-the-django-settings-api-d2784efb606f">Part 1: Project Refactor and Meeting the Django Settings API</BoldLink>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="https://medium.com/@djstein/modern-django-part-0-introduction-and-initial-setup-657df48f08f8"> Part 0: Introduction and Initial Setup</BoldLink>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="https://medium.com/@djstein/modern-django-preface-a1094033ac79">Preface</BoldLink>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="https://medium.com/@djstein/understanding-the-need-a-django-deployment-guide-6fe633d64871">Understanding the Need: A Django Deployment Guide</BoldLink>
                    </Box>
                </Flex>

                <Flex wrap>
                    <Box w={1} p={4} pb={1}>
                        <SubHeading>Resume</SubHeading>
                    </Box>
                </Flex>

                <Flex wrap>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="#">BentoBox LLC</BoldLink>
                        <Text>March 2017 - Present</Text>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="#">BoostOurTeam LLC</BoldLink>
                        <Text>Octoboer 2015 - March 2017</Text>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="#">OSCAR Labs</BoldLink>
                        <Text>August 2014 - August 2016</Text>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="#">Sears Holding</BoldLink>
                        <Text>May 2016 - August 2016</Text>
                    </Box>
                    <Box flex='1 1 auto' p={4} py={1}>
                        <BoldLink href="#">Principal Financial Group</BoldLink>
                        <Text>May 2013 -August 2015</Text>
                    </Box>
                </Flex>

            </div>
        );
    }
}
