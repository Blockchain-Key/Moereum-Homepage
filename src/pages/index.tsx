// import { history } from 'umi'
import tech from '../assets/tech.png';
import product from '../assets/product.png'
import plan from '../assets/plan.png'
import team from '../assets/team.png'

import "../styles/home.less";
import {Button, Popover} from "antd"
import { useEffect, useState } from 'react';



export default function ModifyPage(props: any) {

  // const [color, setColor] = useState('#00209E')
  // const handleChangeColor = (e: any) => {
  //   setColor(e.hex)
  // }

  const jumpAndFlicker = (value: string) => {
    let anchorElement = document.getElementById(`${value}`);
    if (anchorElement) {
      anchorElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline :'start'
      });
    }
  };

  // const textColorPicker = (
  //   <div>
  //     <SketchPicker onChange={handleTextColorChange} color={textColor} />
  //   </div>
  // )
  
  // useEffect(() => {
  //   getAllGames().then((res: any) => {
  //     setCurrentGame(res[res.length - 1])
  //   })
  // }, [props.location.query.type])
  return (
    <div className='main font-white'>
      <div className="fixed top-nav">
        <div className='subnav options'>
          <div style={{marginRight: '20px'}} onClick={() => jumpAndFlicker('home')}>POLKADOT-HACHTHON-2022-WINTER</div>
          <ul>
            <li className="options">
              <div onClick={() => jumpAndFlicker('intro')}>Introduction</div>
            </li>
            <li className="options">
              <div onClick={() => jumpAndFlicker('advantages')}>Advantage</div>
            </li>
            <li className="options">
              <div onClick={() => jumpAndFlicker('architecture')}>Architecture</div>
            </li>
            <li className="options">
              <div onClick={() => jumpAndFlicker('product')}>Product</div>
            </li>
            <li className="options">
              <div onClick={() => jumpAndFlicker('plan')}>Plan to Develop</div>
            </li>
            <li className="options">
              <div onClick={() => jumpAndFlicker('team')}>Our Team</div>
            </li>
          </ul>
          <div className="right-logo">NONCEGEEKDAO</div>
        </div>
      </div>
      <div className="main-section">
        <div id='home'></div>
        <section className='home-bg'>
          <div className="home">
            <div className="">Moereum</div>
            <div>Network</div>
          </div>
        </section>
        <div id="intro"></div>
        <section className="intro-bg">
          <div className='intro'>
            <div className="font-100">Bridge EVM to MoveVM</div>
            <div className="intro-text">
              <div>Moereum Network provides the infrastructure for building dApps using EVM and MoveVM smart contracts, providing developers with true cross-consensus messaging (XCM) and cross-virtual machine (XVM) interoperability.</div>
              <div style={{marginTop: '30px'}}>Moereum plans to become a parachain to serve developers on Polkadot.</div>
            </div>
          </div>
        </section>
        <div id="advantages"></div>
        <section className="advantages-bg">
          <div className='advantages'>
            <div className="font-100">Advantage</div>
            <div className="grid" style={{gridTemplateColumns: '1fr 1fr'}}>
              <div className="sub-section left">
                <div className="title m-t-60">Support Move contract deployment</div>
                <div>Moereum supports Move contract deployment and provides a series of developer tool sets to the community.</div>
                <div className="title m-t-80">Support Solidity contract deployment</div>
                <div>Moereum supports Solidity contract deployment and provides a series of precompiled methods for calling Move contracts through Solidity.</div>
              </div>
              <div className="sub-section right">
                <div className="title m-t-60">Multi-chain/multi-VM interoperability</div>
                <div>Moereum's multi-virtual machine function means that users can implement a variety of contract deployments, intermodulation between different virtual machine contracts, and all Substrate-based parallel chains can achieve intermodulation with Moereum in the ecosystem and cross-virtual machine call without bridging.</div>
              </div>
            </div>
          </div>
        </section>
        <div id="architecture"></div>
        <section className="architecture-bg">
          <div className='architecture'>
            <div className="m-t-80 font-100">Architecture</div>
            <img src={tech} alt="" />
          </div>
        </section>
        <div id="product"></div>
        <section className="product-bg">
          <div className='product'>
            <div className="m-t-80 font-100">Product</div>
            <img src={product} alt="" />
          </div>
        </section>
        <div id="plan"></div>
        <section className="plan-bg">
          <div className='plan'>
            <div className="font-100 absolute">Plan to dev</div>
            <img src={plan} alt="" />
          </div>
        </section>
        <div id="team"></div>
        <section className="team-bg">
          <div className='team'>
            <div className="font-100">Our Team</div>
            <div className='grid' style={{gridTemplateColumns: '1fr 1fr'}}>
              <div className='team-image'><img src={team} alt="" /></div>
              <div className='team-text'>
                <div>Possess rich experience in Move-related development and teaching</div>
                <div>Has many move ecological partnersFamiliar with the Polkadot ecology</div>
                <div>Have a strong international community</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
