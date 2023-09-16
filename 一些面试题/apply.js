Function.prototype['myApply'] = function (context, ...args) {
    if (typeof this !== 'function') {
        throw TypeError('this is not function');
    }

    context = context || window;

    context['temp'] = this;

    const result = context['temp'](args);

    delete context['temp'];

    return result;
};
