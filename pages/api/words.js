import words from './words.json'

export default (req, res) => {
    res.status(200).json(words)
}