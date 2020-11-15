const { Router } = require("express");
const router = Router();

router.get("/test", (req, res) => {
  const data = {
    name: "Amilcar",
    message: "No entiendo",
  };
  res.json(data);
});

module.exports = router;
