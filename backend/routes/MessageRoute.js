import express from "express";
import { getMessage, 
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
} from "../controllers/MessageController.js";

const router = express.Router();

router.get('/Messages', getMessage);
router.get('/Messages/:id', getMessageById);
router.post('/Messages', createMessage);
router.patch('/Messages/:id', updateMessage);
router.delete('/Messages/:id', deleteMessage);


export default router;