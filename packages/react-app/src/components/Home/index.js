import React, { useState } from "react";
import { parseEther } from "@ethersproject/units";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ETH_VAL } from "../../constants";
import { Account } from "../../components";
import phone from '../../assets/img/BLACK1.gif'

import {
  Container,
  InnerContainer,
  TextWrapper,
  NFTContainer,
  ProgressBarContainer,
  ButtonWrapper,
  ButtonOpensea,
  ImgWrapper,
  GifWrapper,
} from "./styles"; //k-k

export const Home = ({
  address,
  userSigner,
  localProvider,
  mainnetProvider,
  price,
  minimized,
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
  blockExplorer,
  contract,
  signer,
  remainTokenCount,
  remainMintCount
}) => {
  const [amount, setAmount] = useState(ETH_VAL);
  const [minting, setMinting] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [mintCount, setMintCount] = useState(1);

  const _decreaseMintCount = () => {
    if (mintCount == 1) return;
    setMintCount(mintCount - 1);
  };

  const _increaseMintCount = () => {
    if (remainMintCount < 1) {
      setMintCount(1);
      return
    }
    if (mintCount >= remainMintCount) {
      setMintCount(remainMintCount);
      return;
    }
    setMintCount(mintCount + 1);
  };

  const notify = (message) => toast(message);

  return (
    <Container id="header">
      <InnerContainer>
        <TextWrapper>
          {/* <h1>The Underground</h1> */}
          <h2>{2500 - 28 - remainTokenCount}</h2>
          
          
        </TextWrapper>
        
      </InnerContainer>
    </Container>
  );
};
