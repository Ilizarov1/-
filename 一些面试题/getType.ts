const class2type = {};

'Boolean Number String Function Array Date RegExp Object Error Map Set'
    .split(' ')
    .map((item, index) => {
        class2type[`[object ${item}]`] = item.toLowerCase();
    });

function getType(obj: any) {
    if (obj == null) {
        return obj + '';
    }

    return typeof obj === 'object' || typeof obj === 'function'
        ? class2type[Object.prototype.toString.call(obj)] || 'object'
        : typeof obj;
}

console.log(getType(new Set()));
