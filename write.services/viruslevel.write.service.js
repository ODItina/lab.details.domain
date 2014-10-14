/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */

var LabDetail = require('../models/labdetail.model');

exports.createVirusLevel = function(args, next){
    LabDetail.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.virus_level.push(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};

exports.removeVirusLevel = function(args, next){
    LabDetail.findOne({patient_id:args.patient_id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.virus_level.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};

exports.updateVirusLevel = function(args, next){
    LabDetail.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.virus_level.id(args._id).set(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};