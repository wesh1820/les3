const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
   const text = req.body.text;
   const user = req.body.user;

   console.log(text);

   res.json({
     status: "success",
     data: {
       message: {
         user: user,
         text: text,
       },
     },
   });
});

module.exports = router;
