import "solana";

contract RewardsPortal {
    struct RemitFlexAccount {
        address owner;
        uint64 cashbackBalance;
        uint64 cashbackTotal;
        string[] txList;
    }

    mapping(address => RemitFlexAccount) public accounts;

    modifier needsAuthority(address user) {
        for (uint64 i = 0; i < tx.accounts.length; i++) {
            AccountInfo ai = tx.accounts[i];
            if (ai.key == user && ai.is_signer) {
                _;
                return;
            }
        }

        revert("Only admin can perform this action");
    }

    function createAccount(address addr) public needsAuthority(addr) {
        require(accounts[addr].owner == address(0), "Account already exists");
        accounts[addr] = RemitFlexAccount({
            owner: addr,
            cashbackBalance: 0,
            cashbackTotal: 0,
            txList: new string[](0)
        });
    }

    function addCashback(address addr, uint64 amount, string txHash) public needsAuthority(addr) {
        require(accounts[addr].owner != address(0), "Account does not exist");
        accounts[addr].txList.push(txHash);
        accounts[addr].cashbackBalance += amount;
        accounts[addr].cashbackTotal += amount;
    }

    function useCashback(address addr, uint64 amount) public needsAuthority(addr) {
        require(accounts[addr].owner != address(0), "Account does not exist");
        require(accounts[addr].cashbackBalance >= amount, "Insufficient cashback balance");
        accounts[addr].cashbackBalance -= amount;
    }

}
