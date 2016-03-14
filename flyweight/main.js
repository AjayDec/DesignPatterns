var Task = function (data) {
    this.name = data.name;
    this.flyweight = FlyWeightFactory.get(data.priority, data.project, data.user, data.completed);
};

Task.prototype.getPriority = function () {
    return this.flyweight.priority;
};

var TaskCollection = function () {
    var tasks = {};
    var count = 0;

    var add = function (data) {
        tasks[data.name] = new Task(data);
        count++;
    };

    var get = function (name) {
        return tasks[name];
    };

    var getCount = function () {
        return count;
    };

    return {
        add: add,
        get: get,
        getCount: getCount
    };
};

var FlyWeight = function (priority, project, user, completed) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
};

var FlyWeightFactory = (function () {
    var flyweights = {};
    var count = 0;

    var get = function (priority, project, user, completed) {
        if (!flyweights[priority + project + user + completed]) {
            flyweights[priority + project + user + completed] = new FlyWeight(priority, project, user, completed);
            count++;
        }
        return flyweights[priority + project + user + completed];
    };
    var getCount = function () {
        return count;
    };
    return {
        get: get,
        getCount: getCount
    };
}());

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;
for (var i = 0; i < 100000; i++) {
    tasks.add(new Task({
        name: 'task' + i,
        priority: priorities[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 5)]
    }));
}
var finalMemory = process.memoryUsage().heapUsed;
console.log('Used Memory: %d MB, Tasks: %d', (finalMemory - initialMemory) / 1000000, tasks.getCount());
console.log('FlyWeights: %d', FlyWeightFactory.getCount());