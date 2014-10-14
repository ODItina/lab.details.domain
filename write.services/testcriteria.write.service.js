/**
 * Created by KP_TerminalUser2 on 02/10/2014.
 */
var labSchema = require('../models/labdetail.model');

exports.createTestCriteria = function(args, next){
    labSchema.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.test_criteria.push(args);
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

exports.removeTestCriteria = function(args, next){
    labSchema.findOne({patient_id:args.patient_id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.test_criteria.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};

exports.updateTestCriteria = function(args, next){
    labSchema.findOne({patient_id: args.patient_id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.test_criteria.id(args._id).set(args);
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