/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */


var _ = require('lodash');

var labDetail = require('./dtos/labdetail'),
    testCriteria = require('./dtos/testcriteria'),
    virusLevel = require('./dtos/viruslevel');


module.exports.dto  = {
    labDetail:labDetail,
    testCriteria:testCriteria,
    virusLevel:virusLevel
};




module.exports.read  = _.extend(
    require('./read.services/labdetail.read.service')
);


module.exports.write = _.extend(
    require('./write.services/labdetail.write.service'),
    require('./write.services/testcriteria.write.service'),
    require('./write.services/viruslevel.write.service')
);

