import Message from "../models/MessageModel.js";

export const getMessage = async (req, res) => {
    try{
        const response = await Message.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getMessageById = async (req, res) => {
    try{
        const response = await Message.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const createMessage = async (req, res) => {
    try{
        await Message.create(req.body);

        res.status(201).json({msg:"Message telah ditambahkan"});
    }catch(error){
        console.log(error.message);
    }
}

export const updateMessage = async (req, res) => {
    try{
        await Message.update(req.body,{
            where: {
                id: req.params.id
            }
        });

        res.status(200).json({msg:"Data Message telah diubah"});
    }catch(error){
        console.log(error.message);
    }
}

export const deleteMessage = async (req, res) => {
    try{
        await Message.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(201).json({msg:"Message telah dihapus"});
    }catch(error){
        console.log(error.message);
    }
}