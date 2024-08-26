import Join from "../models/join.models.js"


export const createJoin = async (req, res) => {
    try {
        const join = await Join.create(req.body);

        if (!join) return res.status(400).send("Error while adding todo...")

        return res.status(200).json(join)
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}

