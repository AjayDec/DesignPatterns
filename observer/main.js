var Task = require('./task.js');

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var ObserverList = function () {
    this.observerlist = [];
};

ObserverList.prototype.add = function (obj) {
    this.observerlist.push(obj);
};

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerlist.length) {
        return this.observerlist[index];
    }
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