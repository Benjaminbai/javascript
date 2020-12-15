

const myPromise = (function () {
    const PENDING = 'pending', RESOLVED = 'resolved', REJECTED = 'rejected'

    function F(fn) {
        const that = this
        this.state = PENDINNG
        this.value = null
        this.resolvedFnStack = []
        this.rejectedFnStack = []
        typeof fn === 'function' && fn(resolved, rejected)

        function resolved(v) {
            if (that.state === PENDING) {
                that.value = v
                that.state = RESOLVED
                that.resolvedFnStack.forEach(item => item(that.value));
            }
        }

        function rejected(v) {
            if (that.state === PENDING) {
                that.value = v
                that.state = REJECTED
                that.rejectedFnStack.forEach(item => item(that.value));
            }
        }
    }

    F.prototype.then = function (resolvedFn) {
        if (typeof resolvedFn === 'function') {
            if (this.state === RESOLVED) resolvedFn(this.value)
            else this.resolvedFnStack.push(resolvedFn)
        }
        return this
    }
    F.prototype.catch = function (rejectedFn) {
        if (typeof rejectedFn === 'function') {
            if (this.state === REJECTED) rejectedFn(this.value)
            else this.rejectedFnStack.push(rejectedFn)
        }
        return this
    }

    return F
})()