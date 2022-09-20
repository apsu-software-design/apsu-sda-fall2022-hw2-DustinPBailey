"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var gathering_1 = require("./gathering");
var Gatherings = (function () {
    function Gatherings() {
        this.gatherings = [];
    }
    Gatherings.prototype.newGathering = function (name, time, location) {
        this.gatherings.push(new gathering_1.Gathering(name, time, location));
    };
    Gatherings.prototype.findGatheringByName = function (nameQuery) {
        var flag = false;
        for (var i = 0; i < this.gatherings.length; i++) {
            if (this.gatherings[i].gatheringName == nameQuery) {
                flag = true;
            }
        }
        return flag;
    };
    Gatherings.prototype.returnGatheringByName = function (gatheringQuery) {
        var gathering;
        for (var i = 0; i < this.gatherings.length; i++) {
            if (this.findGatheringByName(gatheringQuery)) {
                gathering = this.gatherings[i];
            }
        }
        return gathering;
    };
    Gatherings.prototype.addMemberToGathering = function (memberName, memberEmail, gatheringName) {
        this.gatherings.forEach(function (Gathering) {
            if (Gathering.isGatheringName(gatheringName)) {
                Gathering.addMember(memberName, memberEmail);
            }
        });
    };
    Gatherings.prototype.returnGatheringNames = function () {
        var gatheringNames = Array();
        for (var i = 0; i < this.gatherings.length; i++) {
            gatheringNames.push(this.gatherings[i].gatheringName);
        }
        return gatheringNames;
    };
    Gatherings.prototype.changeGathering = function (gatheringTitle, newGatheringTitle, newGatheringDate) {
        if (!newGatheringTitle == null) {
            if (this.findGatheringByName(gatheringTitle)) {
                var gathering = this.returnGatheringByName(gatheringTitle);
                gathering.setGatheringName = newGatheringTitle;
            }
        }
        if (!newGatheringDate == null) {
            var gathering = this.returnGatheringByName(gatheringTitle);
            gathering.setGatheringTime = newGatheringDate;
        }
    };
    Gatherings.prototype.getMemberListOfGathering = function (gatheringName) {
        var gathering = this.returnGatheringByName(gatheringName);
        return gathering.getGatheringMembersNameList();
    };
    Gatherings.prototype.returnGatheringAsArray = function (gatheringName) {
        var gatheringArray = this.returnGatheringAsArray(gatheringName);
        return gatheringArray;
    };
    Gatherings.prototype.addNewGathering = function (gathering) {
        this.gatherings.push(gathering);
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
//# sourceMappingURL=gatherings.js.map