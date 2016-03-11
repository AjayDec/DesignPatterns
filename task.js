//Adding attributes and properties to object

var task1 = {};

task1.title = 'My title';
task1.description = 'My description';

Object.defineProperty(task1, 'toString', {
    value: function () {
        return this.title + ', ' + this.description;
    },
    writable: false,
    enumerable: false,
    configureable: true
});


console.log(Object.keys(task1)); // does not show 'toString' due to enumerable=false

console.log(task1); // results ivokign toString method

task1.toString = 'Hello, breaking code'; // this is silently rejected due to writable : false

console.log(task1);