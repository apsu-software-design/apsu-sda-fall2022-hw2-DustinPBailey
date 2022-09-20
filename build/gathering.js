"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gathering = void 0;
var members_1 = require("./members");
var Gathering = (function () {
    function Gathering(name, date, location, membersArray) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.members = new members_1.Members;
    }
    Object.defineProperty(Gathering.prototype, "gatheringName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "setGatheringName", {
        set: function (newGatheringName) {
            this.name = newGatheringName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "gatheringTime", {
        get: function () {
            return this.date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "setGatheringTime", {
        set: function (date) {
            this.date = date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "gatheringLocation", {
        get: function () {
            return this.location;
        },
        set: function (location) {
            this.location = location;
        },
        enumerable: false,
        configurable: true
    });
    Gathering.prototype.isGatheringName = function (gatheringName) {
        return this.name == gatheringName;
    };
    Gathering.prototype.addMember = function (memberName, memberEmail) {
        this.members.addMember(memberName, memberEmail);
    };
    Gathering.prototype.getGatheringMembersNameList = function () {
        return this.members.returnMemberNameList();
    };
    Gathering.prototype.returnGatheringAsArray = function () {
        var gatheringArray = [this.name, this.date, this.location, this.members];
        return gatheringArray;
    };
    return Gathering;
}());
exports.Gathering = Gathering;
//# sourceMappingURL=gathering.js.map