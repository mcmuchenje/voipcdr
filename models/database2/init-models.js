var DataTypes = require("sequelize").DataTypes;
var _Backup = require("./Backup");
var _admin = require("./admin");
var _ampusers = require("./ampusers");
var _announcement = require("./announcement");
var _callback = require("./callback");
var _cidlookup = require("./cidlookup");
var _cidlookup_incoming = require("./cidlookup_incoming");
var _cronmanager = require("./cronmanager");
var _custom_destinations = require("./custom_destinations");
var _custom_extensions = require("./custom_extensions");
var _customerdb = require("./customerdb");
var _daynight = require("./daynight");
var _devices = require("./devices");
var _disa = require("./disa");
var _extensions = require("./extensions");
var _featurecodes = require("./featurecodes");
var _findmefollow = require("./findmefollow");
var _flexpath = require("./flexpath");
var _freepbx_log = require("./freepbx_log");
var _gabcast = require("./gabcast");
var _globals = require("./globals");
var _iax = require("./iax");
var _incoming = require("./incoming");
var _inventorydb = require("./inventorydb");
var _ivr = require("./ivr");
var _ivr_dests = require("./ivr_dests");
var _languages = require("./languages");
var _manager = require("./manager");
var _meetme = require("./meetme");
var _miscapps = require("./miscapps");
var _miscdests = require("./miscdests");
var _module_xml = require("./module_xml");
var _modules = require("./modules");
var _notifications = require("./notifications");
var _paging_autoanswer = require("./paging_autoanswer");
var _paging_config = require("./paging_config");
var _paging_groups = require("./paging_groups");
var _parkinglot = require("./parkinglot");
var _phpagiconf = require("./phpagiconf");
var _pinsets = require("./pinsets");
var _queues_config = require("./queues_config");
var _queues_details = require("./queues_details");
var _recordings = require("./recordings");
var _ringgroups = require("./ringgroups");
var _sip = require("./sip");
var _timeconditions = require("./timeconditions");
var _timegroups_details = require("./timegroups_details");
var _timegroups_groups = require("./timegroups_groups");
var _users = require("./users");
var _visual_phonebook = require("./visual_phonebook");
var _vmblast = require("./vmblast");
var _vmblast_groups = require("./vmblast_groups");
var _zap = require("./zap");
var _zapchandids = require("./zapchandids");

function initModels(sequelize) {
  var Backup = _Backup(sequelize, DataTypes);
  var admin = _admin(sequelize, DataTypes);
  var ampusers = _ampusers(sequelize, DataTypes);
  var announcement = _announcement(sequelize, DataTypes);
  var callback = _callback(sequelize, DataTypes);
  var cidlookup = _cidlookup(sequelize, DataTypes);
  var cidlookup_incoming = _cidlookup_incoming(sequelize, DataTypes);
  var cronmanager = _cronmanager(sequelize, DataTypes);
  var custom_destinations = _custom_destinations(sequelize, DataTypes);
  var custom_extensions = _custom_extensions(sequelize, DataTypes);
  var customerdb = _customerdb(sequelize, DataTypes);
  var daynight = _daynight(sequelize, DataTypes);
  var devices = _devices(sequelize, DataTypes);
  var disa = _disa(sequelize, DataTypes);
  var extensions = _extensions(sequelize, DataTypes);
  var featurecodes = _featurecodes(sequelize, DataTypes);
  var findmefollow = _findmefollow(sequelize, DataTypes);
  var flexpath = _flexpath(sequelize, DataTypes);
  var freepbx_log = _freepbx_log(sequelize, DataTypes);
  var gabcast = _gabcast(sequelize, DataTypes);
  var globals = _globals(sequelize, DataTypes);
  var iax = _iax(sequelize, DataTypes);
  var incoming = _incoming(sequelize, DataTypes);
  var inventorydb = _inventorydb(sequelize, DataTypes);
  var ivr = _ivr(sequelize, DataTypes);
  var ivr_dests = _ivr_dests(sequelize, DataTypes);
  var languages = _languages(sequelize, DataTypes);
  var manager = _manager(sequelize, DataTypes);
  var meetme = _meetme(sequelize, DataTypes);
  var miscapps = _miscapps(sequelize, DataTypes);
  var miscdests = _miscdests(sequelize, DataTypes);
  var module_xml = _module_xml(sequelize, DataTypes);
  var modules = _modules(sequelize, DataTypes);
  var notifications = _notifications(sequelize, DataTypes);
  var paging_autoanswer = _paging_autoanswer(sequelize, DataTypes);
  var paging_config = _paging_config(sequelize, DataTypes);
  var paging_groups = _paging_groups(sequelize, DataTypes);
  var parkinglot = _parkinglot(sequelize, DataTypes);
  var phpagiconf = _phpagiconf(sequelize, DataTypes);
  var pinsets = _pinsets(sequelize, DataTypes);
  var queues_config = _queues_config(sequelize, DataTypes);
  var queues_details = _queues_details(sequelize, DataTypes);
  var recordings = _recordings(sequelize, DataTypes);
  var ringgroups = _ringgroups(sequelize, DataTypes);
  var sip = _sip(sequelize, DataTypes);
  var timeconditions = _timeconditions(sequelize, DataTypes);
  var timegroups_details = _timegroups_details(sequelize, DataTypes);
  var timegroups_groups = _timegroups_groups(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var visual_phonebook = _visual_phonebook(sequelize, DataTypes);
  var vmblast = _vmblast(sequelize, DataTypes);
  var vmblast_groups = _vmblast_groups(sequelize, DataTypes);
  var zap = _zap(sequelize, DataTypes);
  var zapchandids = _zapchandids(sequelize, DataTypes);


  return {
    Backup,
    admin,
    ampusers,
    announcement,
    callback,
    cidlookup,
    cidlookup_incoming,
    cronmanager,
    custom_destinations,
    custom_extensions,
    customerdb,
    daynight,
    devices,
    disa,
    extensions,
    featurecodes,
    findmefollow,
    flexpath,
    freepbx_log,
    gabcast,
    globals,
    iax,
    incoming,
    inventorydb,
    ivr,
    ivr_dests,
    languages,
    manager,
    meetme,
    miscapps,
    miscdests,
    module_xml,
    modules,
    notifications,
    paging_autoanswer,
    paging_config,
    paging_groups,
    parkinglot,
    phpagiconf,
    pinsets,
    queues_config,
    queues_details,
    recordings,
    ringgroups,
    sip,
    timeconditions,
    timegroups_details,
    timegroups_groups,
    users,
    visual_phonebook,
    vmblast,
    vmblast_groups,
    zap,
    zapchandids,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
