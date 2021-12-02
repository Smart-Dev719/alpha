import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../store/logo/logo.png";
import walleticon from "../../store/logo/walletIcon.png";
import metamaskicon from "../../store/logo/metamask.png";
import "./Header.css";
// import { useWeb3React } from "@web3-react/core";
// import { injected } from "../wallet/connectors";

function Header() {

	return (
		<>
			<Navbar className="navbar-box" expand="lg" style={{zIndex: "1"}}>
				<Container fluid>
					<div className="d-lg-flex justify-content-between align-items-center w-100">
						<div className="d-flex align-content-center justify-content-between">
							<Navbar.Brand href="#home">
								<img className="logo" src={Logo} alt="" />
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="30"
									height="30"
									fill="#fff"
									class="bi bi-list"
									viewBox="0 0 16 16"
								>
									<path
										fill-rule="evenodd"
										d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
									/>
								</svg>
							</Navbar.Toggle>
						</div>
						<Navbar.Collapse id="basic-navbar-nav">
							{/* <Nav className="me-auto pt-4 pt-lg-0 w-100">
								<Nav.Link href="/" style={{ fontSize: "2rem" }}>
									Home
								</Nav.Link>
								<Nav.Link
									href="/stack"
									style={{ fontSize: "2rem" }}
								>
									Stake
								</Nav.Link>

								<Nav.Link
									href="/alpha"
									style={{ fontSize: "2rem" }}
								>
									Public Sale
								</Nav.Link>
							</Nav> */}
							<Nav className="mt-1 mt-lg-0 w-100" style={{justifyContent : "flex-end", alignItem:"center"}}>
								<Nav.Link href="/" style={{ fontSize: "2rem", lineHeight : "37px" }}>
									Home
								</Nav.Link>
								<Nav.Link
									href="/stack"
									style={{ fontSize: "2rem", lineHeight : "37px" }}
								>
									Stake
								</Nav.Link>

								<Nav.Link
									href="/alpha"
									style={{ fontSize: "2rem", lineHeight : "37px" }}
								>
									Public Sale
								</Nav.Link>
								{/* <Nav.Link className="navbar-wallet-btn ms-lg-auto" onClick={window.unlockWallet} id="metamask" style={{ fontSize: "15px" }}>Connect to a wallet</Nav.Link>	 */}
								<a href="#popup1" className="btn btn-sm" id="connect">Connect Wallet</a>
								<div id="popup1" className="overlay">
									<div className="popup">
										<h2 id="choosewallet" style={{ fontSize: "27px" }}>Connect a Wallet</h2>
										<a className="close" href="#0" id="closedmodal">&times;</a>
										<div className="content">
											{/* <ul className="menu_2dd" id="hidebuttons"> 
												<li>
													<a href="#0" className = "btn btn-site" onClick = {window.unlockWallet} id="metamask">MetaMask</a>
												</li>
											</ul> */}
											<ul className="menu_2dd" id="walletbuttons1">
												<li id="walletconnectbutton">
													<a href="#0" onClick={window.walletconnect} id="walletconnect" className="btn btn-site">WalletConnect</a>
													<img className="walletIcon_mini" src={walleticon} alt="" />
												</li>
											</ul>
											<ul className="menu_2dd" id="walletbuttons1">

												<li id="walletconnectbutton">
													<Nav.Link onClick={window.unlockWallet} id="metamask" className="btn btn-site">Metamask Connect</Nav.Link>
													<img className="walletIcon_mini" src={metamaskicon} alt="" />
												</li>
											</ul>

										</div>
									</div>
								</div>
							</Nav>
							<Nav>

							</Nav>
							{/* <Nav className="mt-1 mt-lg-0 w-100">
								<Nav.Link className="navbar-wallet-btn ms-lg-auto"" onClick={window.unlockWallet} id="metamask" style={{ fontSize: "15px" }}>Connect to a wallet</Nav.Link>							</Nav>
							</Navbar.Collapse> */}
							{/* <Nav className="mt-1 mt-lg-0">
                          {
                            walletId ? <Nav.Link className="navbar-wallet-btn" onClick={disconnect} style={{fontSize: "15px"}}>{getwalletId(account)}</Nav.Link> : 
                            <Nav.Link className="navbar-wallet-btn" onClick={connect} style={{fontSize: "15px"}}>Connect to a wallet</Nav.Link>
                          }                           
                        </Nav> */}
						</Navbar.Collapse>
					</div>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
