/**
 * Created by KP_TerminalUser2 on 04/09/2014.
 */
var VirusLevel = function(args){
    var info ={};
    info.type = args.type;
    info.virus_count = args.virus_count;

    return info;
};
module.exports = VirusLevel;
