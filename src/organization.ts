// makes an org. 
import { Members } from './members';
import { Gatherings } from './gatherings';
import { Gathering } from './gathering';


export class Organization {
    private name: string;
    private members: Members;
    private gatherings: Gatherings;

    constructor(name: string) {
        this.name = name;
        this.members = new Members;
        this.gatherings = new Gatherings;
    }

    //setters and getters
    get Name(): string {
        return this.name;
    }

    addNewMember(name: string, email: string) {
        this.members.addMember(name, email);
    }

    addNewGathering(name: string, time: string, location: string, members?: Members) {
        this.gatherings.newGathering(name, time, location);

    }

    searchMembersByName(name: string): boolean {
        return this.members.findMemberByName(name);
    }

    searchGatheringsByName(name: string): boolean {
        return this.gatherings.findGatheringByName(name);
    }

    addMemberToGathering(memberName: string, gatheringName: string) {
        if (this.searchMembersByName(memberName) && this.searchGatheringsByName(gatheringName)) {
            let member = this.members.returnMemberByName(memberName)
            this.gatherings.addMemberToGathering(member.memberName, member.memberEmail, gatheringName);
        }
    }

    public isOrganizationName(organizationName: string): boolean {
        return this.name == organizationName;
    }

    addGathering(gathering: Gathering) {
        this.gatherings.addNewGathering(gathering);
    }

}