module.exports = function(req){
  return {
    ipaddress: req.headers['x-forwarded-for'].match(/[0-9\.]*/)[0],
    language: req.headers['accept-language'].match(/[a-zA-Z\-]*/),
    operating_system: req.headers['user-agent'].match(/\((.*?)\)/)[1]
  };
} 
