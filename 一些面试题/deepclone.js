// 一个简化版的深拷贝，
// 看了loadsh的源码，
// 感觉自己的这个玩意属实是太简陋了。。。

function deepClone(obj, depth = Infinity, objStack = new WeakSet().add(obj)) {
    // 获取所有的kv对，可以考虑使用Reflect.ownKeys()
    // 还是存在缺陷，因为会枚举到描述符为不可枚举的symbol类型键
    // Reflect.ownKeys()也会枚举到不可枚举属性
    function getKV(obj) {
        return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].map((keys) => [
            keys,
            obj[keys]
        ]);
    }

    function isObject(obj) {
        return typeof obj === 'object' && obj !== null;
    }

    if (depth <= 0 || objStack.has(obj)) {
        return null;
    }

    // 以下处理一些复杂类型
    // 实际上还有更多

    if (Array.isArray(obj)) {
        return obj.map((val) => {
            return isObject(val) ? deepClone(val, depth - 1, objStack.add(val)) : val;
        });
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }

    if (obj instanceof Map) {
        const result = new Map();
        for (const [k, v] of obj.entries()) {
            result.set(k, isObject(v) ? deepClone(v, depth - 1, objStack.add(v)) : v);
        }
        return result;
    }

    if (obj instanceof Set) {
        const result = new Set();
        for (const v of obj.values()) {
            result.add(isObject(v) ? deepClone(v, depth - 1, objStack.add(v)) : v);
        }
        return result;
    }

    const result = Object.assign({}, obj);

    for (const [k, v] of getKV(obj)) {
        if (isObject(v)) {
            result[k] = deepClone(v, depth - 1, objStack.add(v));
        }
    }

    return result;
}
