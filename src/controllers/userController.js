import User from "../models/userModel";

const inscription = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    newUser.password = await newUser.encryptPassword(req.body.password);
    newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      const error = new Error("Invalid user");
      throw error;
    }
    const validPassword = await user.validPassword(
      req.body.password,
      user.password
    );
    console.log("Password from request:", req.body.password);
    console.log("Password from database:", user.password);
    if (!validPassword) {
      const error = new Error("Invalid password");
      throw error;
    }
    res.json({ user, message: "Vous êtes bien connécté" });
  } catch (error) {
    console.error(error.message);
  }
};

export { inscription, login };
