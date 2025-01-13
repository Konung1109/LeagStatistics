function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(401).send({ message: "Unauthorized" });
    }
  
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).send({ message: "Forbidden" });
      }
      req.user = user; // Зберігаємо інформацію про користувача
      next();
    });
  }
  