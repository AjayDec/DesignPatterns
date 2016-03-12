//Revealing module pattern [module is an Object literal, it contains set of related methods]

var repo = function () {
    var db = {};

    var get = function (id) {
        console.log('Getting for db.. userId: ' + id);
        return {
            name: 'A user ' + id + ' from db'
        };
    };

    var set = function (user) {
        console.log('Saving user in db.. ' + user.name);
    }
    return {
        get: get,
        set: set
    }
};

module.exports = repo();