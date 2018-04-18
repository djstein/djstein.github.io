import React from 'react'
import PropTypes from 'prop-types'
import ButtonComponent from './ButtonComponent'
import Button from '../styled_components/Button'
import Flex from '../styled_components/Flex'
import Link from '../styled_components/Link'

import ContentSection from '../styled_components/ContentSection'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class DashboardComponent extends React.Component {
    static props = {
        handleClick: PropTypes.func.isRequired
    }
    render() {
        return (
                <ContentSection>
                    <Flex justify="center">
                        <div>
                            <a href="https://github.com/djstein">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                            <a href="https://twitter.com/d_j_stein">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                        </div>
                    </Flex>
                </ContentSection>
        )
    }
}
