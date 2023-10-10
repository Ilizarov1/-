class TaskManager {
    constructor(maxConcurrent = 2) {
        this.maxConcurrent = maxConcurrent;
        this.concurrent = 0;
        this.taskQueue = [];
    }

    addTask(task) {
        this.taskQueue.push(task);
        this.run();
    }

    run() {
        if (this.concurrent < this.maxConcurrent && this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            this.concurrent++;

            task()
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    this.concurrent--;
                    this.run();
                });
        }
    }
}

const manager = new TaskManager(2);

const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`time ${time} resolved`);
        }, time);
    });
};

manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
manager.addTask(() => sleep(1000));
