//Adding attributes and properties to object

var task1 = {};

task1.title = 'My title';
task1.description = 'My description';

task1.toString = function () {
    return this.title + ', ' + this.description;
}

console.log(task1);
console.log(task1.toString());