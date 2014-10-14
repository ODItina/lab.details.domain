/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var mongoose = require('mongoose');

var virusLevelSchema = mongoose.Schema({
    type: {
        type:String,
        enum:[
            'CD4',
            'VL']
    },
    virus_count: {
        type:String
    }
});
module.exports = virusLevelSchema;
