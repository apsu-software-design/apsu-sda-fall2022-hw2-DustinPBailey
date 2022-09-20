"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var Organization = (function () {
    function Organization(name) {
        this.name = name;
        this.members = new members_1.Members;
        this.gatherings = new gatherings_1.Gatherings;
    }
    Object.defineProperty(Organization.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Organization.prototype.addNewMember = function (name, email) {
        this.members.addMember(name, email);
    };
    Organization.prototype.addNewGathering = function (name, time, location, members) {
        this.gatherings.newGathering(name, time, location);
    };
    Organization.prototype.searchMembersByName = function (name) {
        return this.members.findMemberByName(name);
    };
    Organization.prototype.searchGatheringsByName = function (name) {
        return this.gatherings.findGatheringByName(name);
    };
    Organization.prototype.addMemberToGathering = function (memberName, gatheringName) {
        if (this.searchMembersByName(memberName) && this.searchGatheringsByName(gatheringName)) {
            var member = this.members.returnMemberByName(memberName);
            this.gatherings.addMemberToGathering(member.memberName, member.memberEmail, gatheringName);
        }
    };
    Organization.prototype.isOrganizationName = function (organizationName) {
        return this.name == organizationName;
    };
    Organization.prototype.addGathering = function (gathering) {
        this.gatherings.addNewGathering(gathering);
    };
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map