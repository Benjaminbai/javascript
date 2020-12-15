
const myPromise = (function () {
    const PENDINNG = 'pending'
    const RESOLVED = 'resolved'
    const REJECTD = 'rejected'

    function F(fn) {
        const that = this
        this.state = PENDINNG
        this.value = null
        this.resolvedFnStack = []
        this.rejectedFnStack = []
        typeof fn === 'function' && fn(resolve, reject)
        function resolve(v) {
            if (that.state === PENDINNG) {
                that.value = v
                that.state = RESOLVED
                that.resolvedFnStack.forEach(item => item(that.value))
            }
        }
        function reject(v) {
            if (that.state === PENDINNG) {
                that.value = v
                that.state = REJECTD
                that.rejectedFnStack.forEach(item => item(that.value))
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
            if (this.state === REJECTD) rejectedFn(this.valaue)
            else this.rejectedFnStack.push(rejectedFn)
        }
        return this
    }
    return F
})()