/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */
var mongoose = require('mongoose'),
    testCriteriaSchema = require('./testcriteria.model'),
    virusLevelSchema = require('./viruslevel.model'),
    Schema = mongoose.Schema;

var labDetailsSchema = new Schema({

    test_criteria: [testCriteriaSchema],

    virus_level:[virusLevelSchema],

    date_sample_collected: {
        type:Date
    },
    date_result_submitted:{
        type:Date
    },
    is_current:{
        type:Boolean,
        default:true
    },
    patient_id:{
        type:Schema.Types.ObjectId,
        ref:'patient',
        required:true}



});
var LabDetails = mongoose.model('laboratory',labDetailsSchema);

module.exports = LabDetails;

