/*

Intro:

    For some unknown reason most of our developers left
    the company. We need to actively hire now.
    In the media we've read that companies that invent
    and publish new technologies attract more potential
    candidates. We need to use this opportunity and
    invent and publish some npm packages. Following the
    new trend of functional programming in JS we
    decided to develop a functional utility library.
    This will put us on the bleading edge since we are
    pretty much sure no one else did anything similar.
    We also provided some jsdoc along with the
    functions, but it might sometimes be inaccurate.

Exercise:

    Provide proper typing for the specified functions.

Bonus:

    Could you please also refactor the code to reduce
    code duplication?
    You might need some excessive type casting to make
    it really short.

*/

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using the original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map<T, U>(mapper: (value: T) => U, input?: T[]): U[] | ((subInput: T[]) => U[]) | typeof map {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): U[] | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input!.map(mapper);
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using the original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<T>(filterer: (value: T) => boolean, input?: T[]): T[] | ((subInput: T[]) => T[]) | typeof filter {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]): T[] | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input!.filter(filterer);
}

/**
 * 3 arguments passed: reduces input array it using the
 * specified reducer and initial value and returns
 * the result.
 *
 * 2 arguments passed: returns a function which accepts
 * input array and reduces it using previously specified
 * reducer and initial value and returns the result.
 *
 * 1 argument passed: returns a function which:
 *   * when 2 arguments are passed to the subfunction, it
 *     reduces the input array using specified initial
 *     value and previously specified reducer and returns
 *     the result.
 *   * when 1 argument is passed to the subfunction, it
 *     returns a function which expects the input array
 *     and reduces the specified input array using
 *     previously specified reducer and initial value.
 *   * when 0 arguments are passed to the subfunction, it
 *     returns itself.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} reducer
 * @param {*} initialValue
 * @param {Array} input
 * @return {* | Function}
 */
export function reduce<T, U>(reducer: (accumulator: U, currentValue: T) => U, initialValue: U, input?: T[]): U | ((subInput: T[]) => U) | ((subInitialValue: U, subInput: T[]) => U) | typeof reduce {
    if (arguments.length === 0) {
        return reduce;
    }
    if (arguments.length === 1) {
        return function subFunction(subInitialValue: U, subInput?: T[]): U | ((subInput: T[]) => U) | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction;
            }
            if (arguments.length === 1) {
                return function subSubFunction(subSubInput: T[]): U {
                    if (arguments.length === 0) {
                        return subSubFunction;
                    }
                    return subSubInput.reduce(reducer, subInitialValue);
                };
            }
            return subInput!.reduce(reducer, subInitialValue);
        };
    }
    if (arguments.length === 2) {
        return function subFunction(subInput?: T[]): U | ((subInput: T[]) => U) | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput!.reduce(reducer, initialValue);
        };
    }
    return input!.reduce(reducer, initialValue);
}

/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b?: number): number | ((subB: number) => number) | typeof add {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): number | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b!;
}

/**
 * 2 arguments passed: subtracts b from a and
 * returns the result.
 *
 * 1 argument passed: returns a function which expects
 * b and subtracts b from a and returns the result.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function subtract(a: number, b?: number): number | ((subB: number) => number) | typeof subtract {
    if (arguments.length === 0) {
        return subtract;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): number | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a - subB;
        };
    }
    return a - b!;
}

/**
 * 2 arguments passed: returns value of property
 * propName of the specified object.
 *
 * 1 argument passed: returns a function which expects
 * propName and returns value of property propName
 * of the specified object.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Object} obj
 * @param {String} propName
 * @return {* | Function}
 */
export function prop<T, K extends keyof T>(obj: T, propName?: K): T[K] | ((subPropName: K) => T[K]) | typeof prop {
    if (arguments.length === 0) {
        return prop;
    }
    if (arguments.length === 1) {
        return function subFunction(subPropName: K): T[K] | typeof subFunction {
            if (arguments.length === 0) {
                return subFunction;
            }
            return obj[subPropName];
        };
    }
    return obj[propName!];
}

