const dateFormat = require('dateformat');

let msgs = [];

exports.apiChat = function (req, res, obj) {
    if (req.pathname.endsWith("/list")) {
        obj.messages = msgs;
    } else if (req.pathname.endsWith("/add")) {
        let obj = {};

        obj.message = req.parameters.msg; //text zpravy z parametru msg
        obj.time = dateFormat(new Date(), "dd.mm.yyyy HH:MM:ss");
        obj.nickname = req.parameters.nick;
        msgs.push(obj);
    }

};
