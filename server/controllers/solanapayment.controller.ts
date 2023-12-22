// importing relevant modules
import { Response, Request } from "express";
import { clusterApiUrl, Connection, Keypair, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';

import { encodeURL, findReference, validateTransfer } from '@solana/pay';
import { TipLink } from '@tiplink/api';
import { defaultConfig } from "../config/config";
import BigNumber from "bignumber.js";
import { Number } from "mongoose";


// Powered By Jupiter
export const httpConvertUSDC = async (req: Request, res: Response) => {
   // mock up, no serious integration yet
   //response
   res.status(200).json({
       data : "converted"
   });
}

// Initialize a payment transaction.
export const initializePayment = async (req: Request, res: Response) => {
    try {
        const recipient = new PublicKey(defaultConfig.MERCHANT_ADDRESS);
        const reference = new Keypair().publicKey;
        const amount = new BigNumber(req.body.amount);
        const url = encodeURL({ amount, recipient, label: req.body.label, reference });
        res.status(200).json({
            message: 'Transaction Initialized.',
            data: { url },
        });
    }
    catch (error) {
        res.status(500).json({
            error: {
                message:'Couldn\'t initialize transaction.'
            }
        })
    }
} 

// Validate a payment transaction.
export const validatePayment = async (req: Request, res: Response) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        console.log('✅ Established connection to the network.');
        const { reference, amount } = req.body;
        const signatureInfo = await findReference(connection, new PublicKey(reference), { finality: 'confirmed' });
       const validate= await validateTransfer(
            connection,
            signatureInfo.signature,
            { recipient: new PublicKey(defaultConfig.MERCHANT_ADDRESS), amount: new BigNumber(amount) },
        );
       console.log(validate)
        res.status(200).json({
            message: 'Payment validated.',

        });
    }
    catch (error) {
        
        res.status(500).json({
            error: {

                message:'Couldn\'t validate payment.'
            }
        })
    }
}

export const validate = async (reference:string, amount:any) => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        console.log('✅ Established connection to the network.');
       
        const signatureInfo = await findReference(connection, new PublicKey(reference), { finality: 'confirmed' });
       const validate= await validateTransfer(
            connection,
            signatureInfo.signature,
            { recipient: new PublicKey(defaultConfig.MERCHANT_ADDRESS), amount: new BigNumber(amount) },
        );
       console.log(validate)
       
    }
    catch (error) {
            console.error(error)
    }
}


// Create A New TipLink
export const createTiplink = async (req: Request, res: Response) => {
    try {
      const tiplink=  TipLink.create().then(tiplink => {
            const data={
                url:tiplink.url.toString(),
                publicKey:tiplink.keypair.publicKey,
                wallet:tiplink.keypair.publicKey.toBase58()

            }
            
            res.status(200).json(data)
          });

     
    } catch (error) {
        console.log(error)
    }
}
// // Get Public Key from TipLink
// const getPublicKeyString = async (link_string) => {
//   const tiplink = await TipLink.fromLink(tp);
//   return tiplink.keypair.publicKey.toBase58();
// };

// const tp = 'https://tiplink.io/i#5jC3aFcBJR4g4BQ5D';
// getPublicKeyString(tp).then((publicKeyString) => {
//   console.log("publicKey (which can be used to fund the TipLink): ", publicKeyString);
// });


//fund wallet balance from REMITFLEX BALANCE 
export const fundBalance =async(req:Request, res:Response)=>{
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

     // Generate a new wallet keypair and airdrop SOL
     const fromWallet = Keypair.generate();
     const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);
 
     // Wait for airdrop confirmation
     await connection.confirmTransaction(fromAirdropSignature);
 
     // Generate a new wallet to receive newly minted token
     const toWallet = Keypair.generate();

     // Create new token mint
    const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);

    // Get the token account of the fromWallet address, and if it does not exist, create it
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        fromWallet.publicKey
    );

     // Get the token account of the toWallet address, and if it does not exist, create it
     const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, toWallet.publicKey);

     // Mint 1 new token to the "fromTokenAccount" account we just created
     let signature = await mintTo(
         connection,
         fromWallet,
         mint,
         fromTokenAccount.address,
         fromWallet.publicKey,
         1000000000
     );
     console.log('mint tx:', signature);

        // Transfer the new token to the "toTokenAccount" we just created
    signature = await transfer(
        connection,
        fromWallet,
        fromTokenAccount.address,
        new PublicKey('2dudFU32c5wsRpfRZDXBAJFirHC4hindqpKSCwwtDaAB'),
        fromWallet.publicKey,
        50
    );
    
    console.log(signature)

    
    

}

