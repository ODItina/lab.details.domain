/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */

    //Laboratory test criteria
var mongoose = require('mongoose');

var testCriteriaSchema = mongoose.Schema({

    test_description:{
        type:String
    },

    result:{
        type:String
    },

    standard_unit_result:{
        type:String
    },
    relative_comparison:{
        type:String
    },
    standard_unit_relative_comparison:{
        type:String
    },
    remarks:{
        type:String
    }

});

module.exports = testCriteriaSchema;

