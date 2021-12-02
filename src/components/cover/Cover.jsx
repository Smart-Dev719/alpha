import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Cover.css";
import Logo from "../../store/logo/thicker-neon.png";

function Cover() {
	return (
		<div className="cover-box">
			<Container>
				<div className="cover-background">
					{/* <img src={Logo} className="round-neon" /> */}
					<div className="cover-header">
						Be Alpha. Play to Win.
					</div>
					<p className="cover-description">
						Alpha Games is the gateway to GameFi yield farming on Binance Smart Chain.
					</p>
					<div className="cover-button">
						<Button href="/stack" className="colored-button">
							Enter App
						</Button>
						<Button className="learn-button">Learn More</Button>
					</div>
				</div>
				<div className="cover-information-boxes">
					<Row>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$0.01</h2>
								<p>$ALPHA Price</p>
							</div>
						</Col>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$2m</h2>
								<p>$ALPHA TVL</p>
							</div>
						</Col>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$0.00</h2>
								<p>Your Staked $ALPHA</p>
							</div>
						</Col>
						<Col lg={3}>
							<div className="round-box mb-3 mb-lg-0">
								<h2>$0.00</h2>
								<p>Your Rewards</p>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default Cover;
