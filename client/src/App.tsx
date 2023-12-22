import {useMemo} from "react"
import AppRouter from "./routing/AppRouter"
// importing solana and web3 utils for the dapp
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import ('@solana/wallet-adapter-react-ui/styles.css');


const  App = () =>  {
      // The network is set to 'devnet'
      const network = WalletAdapterNetwork.Devnet;
      const endpoint = useMemo(() => clusterApiUrl(network), [network]);
      const wallets = useMemo(
           () => [
              new UnsafeBurnerWalletAdapter(),
              ],
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [network]
      );

  return (
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets} autoConnect={true}>
    <WalletModalProvider>
      <div className = "main">
        <AppRouter/>
      </div>
    </WalletModalProvider>
    </WalletProvider>
   </ConnectionProvider>
  )
}

export default App