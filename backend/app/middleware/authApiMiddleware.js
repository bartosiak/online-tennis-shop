const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");

    if (token) {
        try {
            const decoded = jwt.verify(token, "secretKey");
            req.user = decoded;

            if (req.user.role !== "admin") {
                return res.status(403).json({
                    message:
                        "You do not have the authority for this operation.",
                });
            }
            next();
        } catch (err) {
            res.status(401).json({ message: "Invalid token" });
        }
    } else {
        res.status(400).json({ message: "Access denied" });
    }
};
