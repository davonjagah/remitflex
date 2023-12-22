import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { RootState } from "../../store/store";
import { setCurrentUser } from "../../store/user/user.reducer";
import { HeaderConnectWallet, Image, LogoWrapper, Text } from "./Header.styles";
import { WalletStatus } from "./WalletStatus";

const Header: React.FC = () => {
    const [handleCopyAddress, setHandleCopyAddress] = useState(false);
    const dispatch = useDispatch();
    const address = useSelector((state: RootState) => state.currentUser?.currentUser);
    const { setVisible } = useWalletModal();
    const { publicKey, connected, connecting } = useWallet();

    useEffect(() => {
        dispatch(setCurrentUser(publicKey?.toString()));
    }, [connected, dispatch, publicKey]);

    const connectWallet = () => {
        setVisible(true);
    };

    const handleCopyClick = () => {
        setHandleCopyAddress(true);
        setTimeout(() => {
            setHandleCopyAddress(false);
        }, 800);
    };

    const handleDisconnect = () => {
        localStorage.clear();
        dispatch(setCurrentUser(""));
    };

    return (
        <LogoWrapper>
            <Link to='/' className="link-wrapper">
                <Image src={"/assets/remitflexlogo.png"} alt="logo" />
                <Text> Remit<span>flex</span></Text>
            </Link>
            <HeaderConnectWallet onClick={!address ? connectWallet : undefined}>
                <WalletStatus connecting={connecting} address={address} connected={connected} />
                {!address ? (
                    <img className="connect" src="/assets/copywallet.png" alt="connect wallet" />
                ) : (
                    <CopyToClipboard text={address} onCopy={handleCopyClick}>
                        <img
                            src={handleCopyAddress ? "/assets/copy.png" : "/assets/copy.svg"}
                            alt={handleCopyAddress ? "copy" : "wallet copy"}
                            style={{ cursor: "pointer" }}
                        />
                    </CopyToClipboard>
                )}
                {address && (
                    <div className='dropDownConnect__items'>
                        <div className='dropDownConnect_item' onClick={handleDisconnect}>
                            <p>Disconnect</p>
                        </div>
                    </div>
                )}
            </HeaderConnectWallet>
        </LogoWrapper>
    );
};

export default Header;
