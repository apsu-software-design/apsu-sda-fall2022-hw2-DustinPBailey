"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
var organization_1 = require("./organization");
var Organizations = (function () {
    function Organizations() {
        this.organizations = [];
    }
    Organizations.prototype.addNewOrganization = function (name) {
        var org = new organization_1.Organization(name);
        this.organizations.push(org);
    };
    Organizations.prototype.findGatheringByName = function (nameQuery) {
        var flag = false;
        this.organizations.forEach(function (Organization) {
            if (Organization.searchGatheringsByName(nameQuery)) {
                flag = true;
            }
        });
        return flag;
    };
    Organizations.prototype.returnOrganizationNames = function () {
        var organizationNames = Array();
        for (var i = 0; i < this.organizations.length; i++) {
            organizationNames.push(this.organizations[i].Name);
        }
        return organizationNames;
    };
    Organizations.prototype.addMemberToGathering = function (memberName, gatheringName) {
        this.organizations.forEach(function (Organization) {
            Organization.addMemberToGathering(memberName, gatheringName);
        });
    };
    Organizations.prototype.addGatheringtoOrganization = function (gathering, organizationName) {
        var organization;
        for (var i = 0; i < this.organizations.length; i++) {
            if (organizationName == this.organizations[i].Name) {
                organization = this.organizations[i];
            }
        }
        organization.addGathering(gathering);
    };
    return Organizations;
}());
exports.Organizations = Organizations;
//# sourceMappingURL=organizations.js.map