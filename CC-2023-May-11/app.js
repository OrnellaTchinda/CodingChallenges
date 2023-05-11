// 2629. Function Composition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    functions.reverse();
    return function (x) {
        return functions.reduce((acc, fn) => acc = fn(acc), x)
    }

};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */