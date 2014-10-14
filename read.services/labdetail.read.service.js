/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var LabDetail = require('../models/labdetail.model');

exports.getLabDetail = function(args, next){
    LabDetail.findOne({patient_id:args.patient_id}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.getLabDetails = function(args, next){
    LabDetail.find({}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};