function checkPasswords(req, res, next) {
  const { password, confirmPassword } = req.body;
  if (password && confirmPassword && password !== confirmPassword) {
    res.status(400).json({ message: "Passwords don't match", ok: false });
    return;
  }
  next();
}

module.exports = checkPasswords;
