const dateFormat = require('dateformat');

let msgs = new Array();

exports.apiChat = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {
        obj.messages = msgs;
    } else if (req.pathname.endsWith("/add")) {
        let obj = {};
        obj.message = "";
        obj.time = new Date();
        msgs.push(obj);
    }

}
