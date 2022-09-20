"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatheringManager = void 0;
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var organizations_1 = require("./organizations");
var GatheringManager = (function () {
    function GatheringManager() {
        this.members = new members_1.Members;
        this.gatherings = new gatherings_1.Gatherings;
        this.organizations = new organizations_1.Organizations;
    }
    GatheringManager.prototype.addMember = function (name, email) {
        this.members.addMember(name, email);
    };
    GatheringManager.prototype.addGathering = function (title, location, date) {
        this.gatherings.newGathering(title, date, location);
    };
    GatheringManager.prototype.addOrganization = function (title) {
        this.organizations.addNewOrganization(title);
    };
    GatheringManager.prototype.addMemberToGathering = function (name, gatheringTitle) {
        this.organizations.addMemberToGathering(name, gatheringTitle);
    };
    GatheringManager.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        var gathering = this.gatherings.returnGatheringByName(gatheringTitle);
        this.organizations.addGatheringtoOrganization(gathering, organizationTitle);
    };
    GatheringManager.prototype.modifyGathering = function (title, newTitle, newDate) {
        this.gatherings.changeGathering(title, newTitle, newDate);
    };
    GatheringManager.prototype.getMembers = function (gatheringTitle) {
        return this.gatherings.getMemberListOfGathering(gatheringTitle);
    };
    GatheringManager.prototype.findMemberNames = function (query) {
        return this.members.returnMemberNameList();
    };
    GatheringManager.prototype.findGatheringNames = function (query) {
        return this.gatherings.returnGatheringNames();
    };
    GatheringManager.prototype.findOrganizationNames = function (query) {
        return this.organizations.returnOrganizationNames();
    };
    return GatheringManager;
}());
exports.GatheringManager = GatheringManager;
//# sourceMappingURL=manager.js.map