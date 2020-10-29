const router = require("express").Router();

// Home page route.
// note: just the / as we are defining a router

// this is the GET for /
router.get("/", function(req, res) {
  // grab previously set config/model whatnot from app
  const config = req.app.get("package").app_config;

  res.render("index", {
    // pass congig, not magic, just equiv to doing: config: config,
    config,
    page: {
      title: "Bootstrap starter template, with Express and EJS",
      lead:
        "Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document."
    }
  });
});

module.exports = router;
