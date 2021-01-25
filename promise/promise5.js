const myPromise = (function () {
    const PENDING = "pending"
    const RESOLVED = "resolved"
    const REJECTED = "rejected"

    function F(fn) {
        const that = this
        this.state = PENDING
        this.value = null
        this.resoleFnStack = []
        this.rejectFnStack = []
        typeof fn === "function" && fn(resolved, rejected)

        function resolved(v) {
            if (that.state === PENDING) {
                that.value = v
                that.state = RESOLVED
                that.resoleFnStack.forEach(item => item(that.value))
            }
        }

        function rejected(v) {
            if (that.state === PENDING) {
                that.value = v
                that.state = REJECTED
                that.rejectFnStack.forEach(item => item(that.value))
            }
            return this
        }
    }

    F.prototype.then = function (resolveFn) {
        if (typeof resolveFn === "function") {
            if (this.state === RESOLVED) resolveFn(this.value)
            else this.resolveFnStack.push(resolvedFN)
        }
    }

    F.prototype.catch = function (rejectFn) {
        if (typeof rejectFn === "function") {
            if (this.state === REJECTED) rejectFn(this.value)
            else this.rejectFnStack.push(rejectedFN)
        }
    }

    return F
})()