// makes an org. 
import { Gathering } from "./gathering";
import { Organization } from "./organization";


export class Organizations {

    private organizations: Organization[];

    constructor() {
        this.organizations = [];
    }
    /*
    thing to do:
        
    */
    addNewOrganization(name: string) {
        let org = new Organization(name);
        this.organizations.push(org);
    }

    findGatheringByName(nameQuery: string): boolean {
        let flag = false
        this.organizations.forEach(function (Organization) {
            if (Organization.searchGatheringsByName(nameQuery)) {
                flag = true;
            }
        });
        return flag;
    }

    //return an array of strings that are the titles of the organizations.
    returnOrganizationNames(): string[] {
        let organizationNames = Array<string>();
        for (let i = 0; i < this.organizations.length; i++) {
            organizationNames.push(this.organizations[i].Name);
        }
        return organizationNames;
    }

    addMemberToGathering(memberName: string, gatheringName: string) {
        this.organizations.forEach((Organization) => {
            Organization.addMemberToGathering(memberName, gatheringName);
        });
    }

    addGatheringtoOrganization(gathering: Gathering, organizationName: string) {
        let organization;
        for (let i = 0; i < this.organizations.length; i++) {
            if (organizationName == this.organizations[i].Name) {
                organization = this.organizations[i];
            }
        }
        organization.addGathering(gathering);
    }





}