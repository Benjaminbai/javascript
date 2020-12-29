const MyPromise = (function () {
    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'

    function F(fn) {
        const that = this
        this.state = PENDING
        this.value = null
        this.resolveFnStack = []
        this.rejectFnStack = []
        typeof fn === 'function' && fn(resolved, rejected)
        function resolved(v) {
            if (that.state === PENDING) {
                that.value = v
                that.state = RESOLVED
                that.resolveFnStack.forEach(item => item(that.value))
            }
        }
        function rejected(v) {
            if (that.state === PENDING) {
                that.value = v
                that.state = REJECTED
                that.rejectFnStack.forEach(item => (item(that.value)))
            }
        }

        F.prototype.then = function (resolvedFN) {
            if (typeof resolvedFN === 'function') {
                if (this.state === RESOLVED) resolvedFN(this.value)
                else this.resolveFnStack.push(resolvedFN)
            }
            return this
        }
        F.prototype.catch = function (rejectedFN) {
            if (typeof rejectedFN === 'function') {
                if (this.state === REJECTED) rejectedFN(this.value)
                else this.rejectFnStack.push(rejectedFN)
            }
            return this
        }
        return F
    }
})()