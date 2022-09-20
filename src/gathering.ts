// this will become a place for gatherings to link to other things

import { Members } from "./members";


export class Gathering {

    private name: string;
    private date: string;
    private location: string;
    private members: Members;
    //

    // memebers should be in an array or something, How do i do that in this language???

    public constructor(name: string, date: string, location: string, membersArray?: Members) {
        this.name = name;
        this.date = date;
        this.location = location;
        this.members = new Members;


    }

    //getters and setters...
    get gatheringName() {
        return this.name;
    }
    set setGatheringName(newGatheringName: string) {
        this.name = newGatheringName;
    }

    get gatheringTime() {
        return this.date;
    }
    set setGatheringTime(date: string) {
        this.date = date;
    }

    get gatheringLocation() {
        return this.location;
    }
    set gatheringLocation(location: string) {
        this.location = location;
    }

    isGatheringName(gatheringName: string): boolean {
        return this.name == gatheringName;
    }

    addMember(memberName: string, memberEmail: string) {
        this.members.addMember(memberName, memberEmail);
    }

    getGatheringMembersNameList(): string[] {
        return this.members.returnMemberNameList();
    }

    returnGatheringAsArray() {
        let gatheringArray = [this.name, this.date, this.location, this.members];
        return gatheringArray;

    }






}