class EventBus {
    topics: {
        [key: string]: Array<Function>;
    } = {};

    // 订阅
    on(e: string, handler: Function) {
        if (!this.topics[e]) {
            this.topics[e] = [handler];
        } else {
            this.topics[e].push(handler);
        }
        return this;
    }

    // 发布
    emit(e: string, ...args) {
        if (!this.topics[e]) {
            console.log('no this event');
            return this;
        }

        this.topics[e].forEach((cb) => {
            cb(...args);
        });

        return this;
    }

    // 删除回调
    off(e: string, handler: Function) {
        if (this.topics[e]) {
            this.topics[e] = this.topics[e].filter((cb) => cb !== handler);
        }
        if (this.topics[e].length === 0) {
            this.topics[e] = null;
        }
    }

    // 仅订阅一次
    once(e: string, handler: Function) {
        const onceHandler = (...args) => {
            handler(...args);
            this.off(e, handler);
        };
        this.on(e, onceHandler);
        return this;
    }
}
