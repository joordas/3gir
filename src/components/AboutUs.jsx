import React, { Component } from "react";
import s from "styled-components";

const Container = s.div`
  // margin-left: 200px;
  position: relative;

  display: flex;  
  @media (max-width: 1400px) {
    flex-direction: column;
  }

`;
const ServicesPanel = s.div`
background-color: #f2f2f2;
box-shadow: 2px 2px 6px 0 rgba( 0, 0, 0, 0.13), 0 0 25px 5px rgba(0, 0, 0, 0.1);
flex-grow: 1;
margin: 200px 200px 50px 100px;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr;
padding: 40px;
@media (max-width: 1400px) {
  margin: 0px 50px 20px;
  z-index: 10;
}
`;

const CardBox = s.div`
width:50%;
background-Color: grey;
`;

const card = s.div`

`;

const name = s.div`
text-align: center;
`;
const ProfilePic = s.img`
width: 80%;
`;

const Description = s.h5`
`;


class AboutUs extends Component {
  render() {
    return (
      <Container id="services">
        <div>
            <CardBox>
                <div className="card">
                    <div className="name">
                        Jordan Gomez
                            <ProfilePic src="/public/img/placeholder.jpg" />
                                <Description>
                                    Brazil
                                </Description>
                    </div>
                </div>
            </CardBox>
        </div>
        <div>
            <CardBox>
                <div className="card">
                    <div className="name">
                        Adrian Albania
                            <ProfilePic src="/public/img/placeholder.jpg" />
                                <Description>
                                    Moldova
                                </Description>
                </div>
            </div>
            </CardBox>
        </div>
        <div>
            <CardBox>
                <div className="card">
                    <div className="name">
                            Dixon Lewis
                                <ProfilePic src="/public/img/placeholder.jpg" />
                                    <Description>
                                        United Kingdom
                                    </Description>
                    </div>
                </div>
            </CardBox>
        </div>

      </Container>
    );
  }
}

export default AboutUs;
