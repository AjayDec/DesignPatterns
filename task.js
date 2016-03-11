//Adding attributes and properties to object

var task = {};

task.title = 'My title';
task.description = 'My description';

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ', ' + this.description;
    },
    writable: false,
    enumerable: false,
    configureable: false
});


console.log(Object.keys(task)); // does not show 'toString' due to enumerable=false

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ', I am urgent task';
    },
    writable: false,
    enumerable: false,
    configureable: false
});

console.log(Object.keys(urgentTask)); // does not show 'toString' due to enumerable=false

console.log(urgentTask.toString());