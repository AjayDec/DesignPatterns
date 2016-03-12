//An example for signleton

var TaskRepo = (function () {
    var taskRepo;

    function createRepo() {
        taskRepo = new Object("Task");
        return taskRepo;
    }

    var getInstance = function () {
        if (!taskRepo) {
            return createRepo();
        }
        return taskRepo;
    };

    return {
        getInstance: getInstance
    };
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
    console.log('Same Repo');
}