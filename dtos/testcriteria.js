/**
 * Created by KP_TerminalUser2 on 02/09/2014.
 */
var TestCriteria = function(args){
    var criteria = {};

    criteria.test_description = args.test_description;
    criteria.result = args.result;
    criteria.standard_unit_result = args.standard_unit_result;
    criteria.relative_comparison = args.relative_comparison;
    criteria.standard_unit_relative_comparison = args.standard_unit_relative_comparison;
    criteria.remarks = args.remarks;


    return criteria;
};
module.exports = TestCriteria;
