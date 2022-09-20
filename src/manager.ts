//your code goes here!

// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
import { Members } from './members';
import { Gatherings } from './gatherings';
import { Organizations } from './organizations';

export class GatheringManager {
    private members: Members;
    private gatherings: Gatherings;
    private organizations: Organizations;

    constructor() {
        this.members = new Members;
        this.gatherings = new Gatherings;
        this.organizations = new Organizations;
    }

    addMember(name: string, email: string) {
        this.members.addMember(name, email);
    }

    addGathering(title: string, location: string, date: string) {
        this.gatherings.newGathering(title, date, location);
    }

    addOrganization(title: string) {
        this.organizations.addNewOrganization(title);
    }

    addMemberToGathering(name: string, gatheringTitle: string) {
        this.organizations.addMemberToGathering(name, gatheringTitle);
    }


    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        let gathering = this.gatherings.returnGatheringByName(gatheringTitle);
        this.organizations.addGatheringtoOrganization(gathering, organizationTitle);

    }

    modifyGathering(title: string, newTitle?: string, newDate?: string) {
        this.gatherings.changeGathering(title, newTitle, newDate);
    }


    getMembers(gatheringTitle: string): string[] {
        return this.gatherings.getMemberListOfGathering(gatheringTitle);
    }

    findMemberNames(query: string): string[] {
        return this.members.returnMemberNameList();
    }

    findGatheringNames(query: string): string[] {
        return this.gatherings.returnGatheringNames();
    }

    findOrganizationNames(query: string): string[] {
        return this.organizations.returnOrganizationNames();
    }

}
