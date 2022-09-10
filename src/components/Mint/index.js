import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import confetti from "canvas-confetti";
import Web3 from "web3";

import "./Mint.css";

import ass1 from "../../images/ass1.png";
import ass2 from "../../images/ass2.png";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const Mint = () => {
  //function Mint() {

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(
    `How many dumbass NFTs do you want to buy?`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
        // value: 1000000000000000000,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
        throwConfetti();
      });
  };

  function throwConfetti() {
    confetti({
      particleCount: 400,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className="MSuper">
      <img className="Ass1" src={ass1} />
      <img className="Ass2" src={ass2} />
      <div className="Mcontainer">
        {/* <img alt={"logo"} src={logo} /> */}
        <br />
        <div className="ResponsiveWrapper">
          {/*<div className="MLeftContainer">
            <img alt={"example"} src={example} />
  </div>
          <br />*/}
          <div className="MRightContainer">
            <h2>Dumbass Supply:</h2>
            <h1>
              {" "}
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}{" "}
            </h1>

            <a target={"_blank"} href={CONFIG.SCAN_LINK}>
              <p>
                <span>{truncate(CONFIG.CONTRACT_ADDRESS, 15)}</span>
              </p>
            </a>

            <br />
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <h2>The sale has ended.</h2>
                <h2>You can still find {CONFIG.NFT_NAME} on</h2>
                <br />
                <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </a>
              </>
            ) : (
              <>
                <h1>
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </h1>
                <p>
                  <span>Excluding dumbass gas fees.</span>
                </p>
                <br />
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <div className="MConnectContainer">
                    <p>Connect to the {CONFIG.NETWORK.NAME} network</p>
                    <div
                      className="StyledButton"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </div>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <br />
                        <p>{blockchain.errorMsg}</p>
                      </>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <p>{feedback}</p>
                    <br />
                    <div className="MQuantityContainer">
                      <div
                        className="StyledRoundButton"
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </div>
                      <h1>{mintAmount}</h1>
                      <div
                        className="StyledRoundButton"
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </div>
                    </div>
                    <br />
                    <div
                      className="StyledButton BuyBtn"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "MINT"}
                    </div>
                  </>
                )}
              </>
            )}
            <br />
          </div>
        </div>
        <br />
        {/* <div className="MWarningContainer">
          <p>
            Please make sure you are connected to the right network (
            {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
            Once you make the purchase, you cannot undo this action.
          </p>
          <p>
            We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
            successfully mint your NFT. We recommend that you don't lower the
            gas limit.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Mint;
