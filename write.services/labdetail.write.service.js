/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var _ = require('lodash'),
    LabDetail = require('../models/labdetail.model');

exports.createLabDetail = function(args, next){
    var labDetail = new LabDetail(args);
    labDetail.save(function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.updateLabDetail = function(args, next){
    LabDetail.findOne({patient_id: args.patient_id}, args, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc = _.extend(doc, args);

            doc.save(function(err){
                if(!err){
                    return  next(null,doc);
                }
            });
        }
    });
};

exports.removeLabDetail = function(args, next){
    LabDetail.remove({patient_id:args.patient_id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};
