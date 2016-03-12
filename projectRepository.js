//Revealing module pattern [module is an Object literal, it contains set of related methods]

var repo = function () {
    var db = {};

    var get = function (id) {
        console.log('Getting for db.. pojectId: ' + id);
        return {
            name: 'A project Id ' + id + ' from db'
        };
    };

    var set = function (project) {
        console.log('Saving project in db.. ' + project.name);
    }
    return {
        get: get,
        set: set
    }
};

module.exports = repo();