import { WalletStatusType } from "../../types/components.types";
import { getShortenedAddress } from "../../utils/walletConnectHelper";

const  WalletStatus:React.FC<WalletStatusType> = ({ connecting, address, connected }) => {
    if (connecting) {
      return <span>Waiting ...</span>;
    } else if (address && connected) {
      const shortenedAddress = getShortenedAddress(address);
      return <span>{shortenedAddress}</span>;
    } else {
      return <span>Connect Wallet</span>;
    }
  }

  export { WalletStatus }