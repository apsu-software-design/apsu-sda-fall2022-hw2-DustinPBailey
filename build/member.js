"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = (function () {
    function Member(name, email) {
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(Member.prototype, "memberName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Member.prototype, "memberEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Member.prototype.toString = function () {
        return "Name: ".concat(this.name, " Email: ").concat(this.email);
    };
    Member.prototype.isMemberName = function (memberName) {
        return this.name == memberName;
    };
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.js.map