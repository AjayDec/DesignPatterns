var repo = function () {

    var called = 0;

    var save = function (task) {
        called++;
        console.log('Saving ' + task +
            ' Called ' + called + ' times');
    }
    console.log('newing up task repo');
    return {
        save: save
    }
}
module.exports = repo(); // executing in module via new or  fn(), makes repo Singleton, bacause of 'require' cache mechanism