import axios from "axios"

export default async function userIp(req, res) {
    const response = await axios.get("https://api.ipify.org?format=json")
    res.status(200).json(response.data)
}