import bcrypt from 'bcrypt';

//@ts-ignore
const login = async (req, res) => {
    const { password } = req.body;
    // const passwordIsValid = bcrypt.compare(password, user.password)
    res.send("Login ok")
}

export { login };