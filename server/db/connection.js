const monk= require('monk');
const connectioString  = 'localhost/message_board_again';
const db = monk(connectioString);


module.exports = db;