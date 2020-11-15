// import React from "react"
// import styled from "styled-components"
// import SEO from "../components/SEO"


// import Modal from "../components/common/modal"
// import { Container, Button } from "../styles"
// import CardList from "../components/kanva-series/card-list"
// import { Pools } from '../constants'

// const background = require("../assets/images/kanva-series/stars_bg.png")
// const farmingIcon = require("../assets/images/farming-btn-icon.png")


// const BackgroundImage = styled.div`
//   width: 100%;
//   background-color: #001030;
//   background-image: url(${background});
//   background-repeat: no-repeat;
//   background-size: cover;
// `;
// const VerticalCenter = styled.div`
//   width: 100%;
//   height: 100%;
//   padding-top: 250px;
//   padding-bottom: 10px;

//   @media (max-width: 600px) {
//     padding-top: 180px;
//     padding-bottom: 100px;
//   }
// `;

// const Text = styled.p`
//   color: #fff;
//   font-family: Ubuntu;
//   font-size: ${(props) => props.font || 18}px;
//   font-weight: ${(props) => props.fontWeight || "bold"};
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin: 0;

//   @media (max-width: 800px) {
//     font-size: 16px;
//   }
// `;

// const TopButtons = styled.div`
//   padding: 20px 0;
//   display: flex;

//   @media (max-width: 650px) {
//     flex-direction: column;
//   }
// `;

// const JointsButton = styled.div`
//   position: relative;
//   height: 91px;
//   width: 542px;
//   border: 1px solid #12110c;
//   border-radius: 15px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background: linear-gradient(270deg, #002247 0%, #00506f 100%);

//   @media (max-width: 800px) {
//     height: 65px;
//     font-size: 16px;
//   }

//   @media (max-width: 650px) {
//     width: 100%;
//   }

//   p {
//     @media (max-width: 500px) {
//       font-size: 12px;
//     }
//   }
// `;

// const JointsLine = styled.div`
//   position: absolute;
//   left: 50%;
//   height: 100%;
//   width: 2px;
//   background: rgba(0, 191, 223, 0.2); ;
// `;

// const ManageStackButton = styled(Button)`
//   height: 90px;
//   width: 351px;
//   margin-left: 20px;
//   font-size: 25px;
//   font-weight: bold;

//   @media (max-width: 800px) {
//     height: 65px;
//     width: 288px;
//     font-size: 16px;
//   }

//   @media (max-width: 650px) {
//     margin-top: 10px;
//     margin-left: 0;
//   }

//   img {
//     padding-left: 14px;
//   }
// `;

// const KavaSeries = () => {
//   const [showModal, setModal] = React.useState(false);
//   return (
//     <>
//       <SEO title="Kanva Series" />
//       <BackgroundImage>
//         <VerticalCenter>
//           <Container>
//             <Text font={25}>Kanva series</Text>
//             <TopButtons>
//               <JointsButton>
//                 <Text>0 ETH/KNV UNIV2-LP</Text>
//                 <Text>0,000 PLTE Earned</Text>
//                 <JointsLine />
//               </JointsButton>
//               <ManageStackButton onClick={() => setModal(true)}>
//                 Manage Stake
//                 <img src={farmingIcon} alt="farming-icon.png" />
//               </ManageStackButton>
//             </TopButtons>
//             <CardList />
//           </Container>
//         </VerticalCenter>
//       </BackgroundImage>
//       <Modal showModal={showModal} setModal={setModal} pool={Pools['KNV/ETH']} />
//     </>
//   );
// };

// export default KavaSeries;
