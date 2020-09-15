// @flow
import * as React from 'react'
import '../styles/eol.scss'
import {EolHeader} from './EolHeader'

import GasPipelineWShip from '../assets/GasPipelineWShip.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type
Props = {

}

export function TsoComplete(props: Props) {

    const videoPlayerSrc = "../video/TsoCompleteDraft1/TsoCompleteDraft1_player.html?embedIFrameId=embeddedSmartPlayerInstance"

    // const videoPlayerSrc = "C:/Users/ross.attrill/OneDrive - Energy One Group/Marketing/TsoInABox/TsoIntroVideo/Videos/TsoCompleteDraft1/TsoCompleteDraft1.html"

    return (
        <div >
            <EolHeader />

            <Container fluid>
                <Row>
                    <Col className="full-column">
                        <img src={GasPipelineWShip} width={'100%'} alt="Pipeline being built for LNG export/import"/>
                        {/*<iframe title="TSO Complete Video"*/}
                        {/*        className="tscplayer_inline"*/}
                        {/*        id="embeddedSmartPlayerInstance"*/}
                        {/*        src={videoPlayerSrc}*/}
                        {/*        scrolling="no"*/}
                        {/*        frameBorder="0"*/}
                        {/*        webkitallowfullscreen="true"*/}
                        {/*        mozallowfullscreen="true"*/}
                        {/*        allowFullScreen/>*/}
                    </Col>
                    <Col className="full-column-blue">
                        <div className="eol-blue-heading">
                            TsoComplete is an automation solution for electricity and gas transmission system operators.
                        </div>
                        <div className="eol-blue-body">
                            <i>TSO Complete</i> allows transmission system operators to:
                            <ul>
                                <li>automate flows of data between counterparties and internal systems</li>
                                <li>define calculations, validations, checks using simple and clear formulas</li>
                                <li>create custom user interfaces, portals and dashboards for operators and counterparties</li>
                            </ul>

                            Applications include:
                            <ul>
                                <li>gathering data from network users</li>
                                <li>automating processes such as balancing</li>
                                <li>managing transactions such as invoicing imbalance charges</li>
                            </ul>

                            <i>TSO Complete</i> can be implemented easily and affordably to fill the gaps in your existing
                            system architecture
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="full-column-orange">
                        <h2 className="l2-heading">
                            The Problem
                            <hr className="hr-h2-separator"/>
                        </h2>
                        <div className="body">
                            <p>
                                Whether in electricity or gas, transmission operators deal with great complexity in the gathering,
                                validating, transforming and publishing data.
                            </p>
                            <p>
                                Multiple counterparties and systems are involved and must be integrated.  Interactions between systems
                                must flow consistently, reliably and quickly in order to meet market and operational deadlines.
                            </p>
                            <p>
                                Problems can arise where:
                            </p>
                            <ul>
                                <li>Systems - legacy or new - are not fully integrated</li>
                                <li>Critical data is not readily available to operators or customers</li>
                                <li>Existing systems are not flexible enough to accommodate changes in the regulatory or network environment quickly enough</li>
                            </ul>

                            <p>
                                Un-necessary manual processes may arise.   Manual processing can lead to:
                            </p>
                            <ul>
                                <li>Low morale</li>
                                <li>Inefficiency</li>
                                <li>Excessive training overhead</li>
                                <li>Key person risk</li>
                            </ul>
                            <p>
                                Business performance suffers.
                            </p>
                        </div>

                    </Col>
                    <Col className="full-column-orange">
                        <h2 className="l2-heading">
                            The Solution
                            <hr className="hr-h2-separator"/>
                        </h2>
                        <div className="body">
                            <p>
                                <i>TSO Complete</i> provides automation and configurable dashboards for electricity
                                and gas transmission system operators.  TSO Complete has three key components:
                            </p>
                            <ul>
                                <li><strong>An automation engine</strong> which can automate retrieval, validation, transformation and communication of data.
                                    The automation engine is the key to elimination of manual processes.</li>
                                <li><strong>A dashboard builder</strong> enabling the creation of dashboards, users interfaces and customer portals.  Data can be made readily available to operators, shippers, and other counterparties.</li>
                                <li><strong>A deal capture and settlements engine</strong> providing a system for managing the end to end lifecycle of market interactions such as settlement of imbalance charges</li>
                            </ul>
                            <p>It is the flexibility of these three components that allows <i>TSO Complete</i> to be used in a variety of purposes to operate and streamline the daily processes
                                of an transmission system operator.
                            </p>

                            <p>Applications of <i>TSO Complete</i> may include:</p>
                            <ul>
                                <li>Automation of data receipt from customers</li>
                                <li>Provision of custom portals for network users / shippers / network operators </li>
                                <li>Automation or enhancement to routine processes such as managing imbalances, scheduling, optimization, settlements</li>
                            </ul>


                            <p>Unlike other automation solutions <i>TSO Complete</i> was conceived, designed and built for the energy industry.  Key features to support energy contexts include:</p>
                            <ul>
                                <li>Built in <strong>time series database</strong> to capture time series data such as nominated, scheduled and actual energy data, pool prices, weather data and network data</li>
                                <li>Definition of calculations, validations and logic using <strong>simple and clear formulas</strong> that operate on time series</li>
                                <li>Built in connectors to <strong>energy industry data sources</strong> and applications</li>
                            </ul>


                            <p><i>TSO Complete</i> provides easy pathways for your customers send data to and receive data from you such as:</p>
                            <ul>
                                <li>via custom portals / customer web sites</li>
                                <li>using direct connections from their existing trading and logistics apps such as <i>eZ-ops</i>, <i>enTrader</i> and <i>enVoy</i> </li>
                                <li>through modern interfaces such as web services or file transfer</li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <h2 className="l2-heading">
                        Project Certainty
                        <hr className="hr-h2-separator" style={{backgroundColor: 'black'}}/>
                    </h2>

                    <div className="body">
                        <p><em>TSO Complete</em> can be implemented with a high degree of confidence.</p>
                        <p>A typical <em>TSO Complete</em> implementation requires little or no custom coding.  Instead processes and interfaces are configured through graphical front ends, typically by our highly experienced business analysts working closely with
                            your domain experts and key users.  This means implementations can be done quickly <em>and</em> your solution can be
                            easily changed in response to market, regulatory or network changes.</p>
                        <p><em>TSO Complete</em> can be made available at a price that is realistic and affordable for any transmission system operator.</p>
                        <p><em>TSO Complete</em> is provided by the <em>Energy One Group</em> of companies which includes eZ-nergy from France and Contigo from the United Kingdom.  <em>Energy One Group</em> has been delivering software for the wholesale energy industry for over 10 years and operates in 17 countries worldwide.</p>
                    </div>
                </Row>

                <Row>
                    <Col className="full-column-blue">
                        <div className="eol-blue-heading">
                            TSO Complete will make your processes flow more easily.
                        </div>

                        <div className="body">
                            <p>Contact us for a demonstration.</p>
                            {/*<p>sales@energyone.com</p>*/}
                            <a style={{color: 'white'}} href="mailto:sales@energyone.com">sales@energyone.com</a>

                            {/*<a style={{color: 'white'}} href="https://www.energyone.com/">www.energyone.com</a>*/}
                        </div>

                    </Col>

                </Row>

            </Container>


        </div>
    )
}