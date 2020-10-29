const router = require("express").Router();

// About page route.
// note: just the / as we are defining a router

// this is the GET for /about
router.get("/", function(req, res) {
  // grab previously set config/model whatnot from app
  const config = req.app.get("package").app_config;

  // render the ejs file, passing some values to it
  res.render("about", {
    // pass congig, not magic, just equiv to doing: config: config,
    config,
    page: {
      title: "About",
      lead: "Nutting.2C.Hear.."
    }
  });
});

module.exports = router;
