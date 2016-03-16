var Task = require('./task.js');

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var loggingService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var task1 = new Task({
    name: 'A demo for constructor',
    user: 'jay'
});

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

task1.complete();
task1.save();