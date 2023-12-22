// importing relevant modules
import express from 'express';
import { fundBalance, httpConvertUSDC, initializePayment, validatePayment } from '../controllers/payment.controller';

// creating 'mock-up' payment route
const paymentRouter = express.Router();

// getting all USDT conversion rate
paymentRouter.get('/', httpConvertUSDC);

// Initialize new payment.
paymentRouter.post('/initialize', initializePayment);

// Validate a payment.
paymentRouter.post('/validate', validatePayment);

// Validate a payment.
paymentRouter.get('/mintandsend', fundBalance);


export default paymentRouter;