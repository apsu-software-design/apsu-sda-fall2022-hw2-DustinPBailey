"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var member_1 = require("./member");
var Members = (function () {
    function Members() {
        this.members = [];
    }
    Members.prototype.findMemberByName = function (nameQuery) {
        var flag = false;
        this.members.forEach(function (Member) {
            if (Member.isMemberName(nameQuery)) {
                flag = true;
            }
        });
        return flag;
    };
    Members.prototype.returnMemberByName = function (nameQuery) {
        var member;
        this.members.forEach(function (Member) {
            if (Member.isMemberName(nameQuery)) {
                member = Member;
            }
        });
        return member;
    };
    Members.prototype.addMember = function (name, email) {
        var member = new member_1.Member(name, email);
        this.members.push(member);
    };
    Members.prototype.displayMembers = function () {
        this.members.forEach(function (Member) {
            console.log(Member);
        });
    };
    Members.prototype.returnMemberNameList = function () {
        var memberNames = Array();
        for (var i = 0; i < this.members.length; i++) {
            memberNames.push(this.members[i].memberName);
        }
        return memberNames;
    };
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map