const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Expecting the token in the Authorization header

  if (!token) {
    return res.status(201).json({ Logout : "OUT" });
  }

  try {
    const decoded = jwt.verify(token, 'durgans_@thletics_@cademy_with_1931'); // Replace 'durgans_@thletics_@cademy_with_1931' with your actual secret
    req.user = decoded.user;
    if(req.Username = decoded.Username){
      next();
    }else{
        res.status(201).json({ Logout : "OUT" });
    }
  } catch (err) {
    
  }
};

module.exports = authMiddleware;
