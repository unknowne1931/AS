const jwt = require('jsonwebtoken');

const AdminAuth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(201).json({ Logout : "OUT" });
  }

  try {
    const decoded = jwt.verify(token, 'durgans_@thletics_@cademy_with_1931_adminn_login_passwords'); // Replace 'durgans_@thletics_@cademy_with_1931' with your actual secret
    if(req.email = decoded.email){
        next();
    }else{
        res.status(201).json({ Logout : "OUT" });
    }
  } catch (err) {
    res.status(201).json({ Logout : "OUT" });
  }
};

module.exports = AdminAuth;
