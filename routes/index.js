var home = function(req, res){
  res.render("home", {"classes": [
  {name:"QEA",teacher:"Rebecca"},
  {name:"Products and Markets",teacher:"Lawrence"},
  {name: "SoftDes", teacher: "Oliver"}]
});
};

module.exports.home = home;