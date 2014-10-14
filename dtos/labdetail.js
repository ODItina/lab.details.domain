/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */
var LabDetails = function(args){
    var lab = {};

    lab.test_criteria = args.test_criteria;
    lab.virus_level = args.virus_level;
    lab.date_sample_collected = args.date_sample_collected;
    lab.date_result_submitted = args.date_result_submitted;
    lab.is_current = args.is_current || false;
    lab.patient_id = args.patient_id;


    return lab;
};
module.exports = LabDetails;
