//
//
//
import { Gathering } from "./gathering";

export class Gatherings {

    private gatherings: Gathering[];

    constructor() {
        this.gatherings = [];
    }

    //make a new gathering
    newGathering(name: string, time: string, location: string): void {
        this.gatherings.push(new Gathering(name, time, location));
    }


    findGatheringByName(nameQuery: string): boolean {
        let flag = false;
        for (let i = 0; i < this.gatherings.length; i++) {
            if (this.gatherings[i].gatheringName == nameQuery) {
                flag = true;
            }
        }
        return flag;
    }

    returnGatheringByName(gatheringQuery: string): Gathering {
        let gathering;
        for (let i = 0; i < this.gatherings.length; i++) {
            if (this.findGatheringByName(gatheringQuery)) {
                gathering = this.gatherings[i];
            }
        }
        return gathering;
    }

    addMemberToGathering(memberName: string, memberEmail: string, gatheringName: string) {
        this.gatherings.forEach((Gathering) => {
            if (Gathering.isGatheringName(gatheringName)) {
                Gathering.addMember(memberName, memberEmail);
            }
        });
    }

    returnGatheringNames(): string[] {
        let gatheringNames = Array<string>();
        for (let i = 0; i < this.gatherings.length; i++) {
            gatheringNames.push(this.gatherings[i].gatheringName);
        }
        return gatheringNames;
    }

    changeGathering(gatheringTitle: string, newGatheringTitle?: string, newGatheringDate?: string) {
        if (!newGatheringTitle == null) {
            if (this.findGatheringByName(gatheringTitle)) {
                let gathering = this.returnGatheringByName(gatheringTitle);
                gathering.setGatheringName = newGatheringTitle as string;
            }
        } if (!newGatheringDate == null) {
            let gathering = this.returnGatheringByName(gatheringTitle);
            gathering.setGatheringTime = newGatheringDate as string;
        }

    }

    getMemberListOfGathering(gatheringName: string): string[] {
        let gathering = this.returnGatheringByName(gatheringName);
        let membersList: string[] = [];
        membersList = gathering.getGatheringMembersNameList();
        return membersList;
    }

    returnGatheringAsArray(gatheringName: string) {
        let gatheringArray = this.returnGatheringAsArray(gatheringName);
        return gatheringArray;
    }

    addNewGathering(gathering: Gathering) {
        this.gatherings.push(gathering);
    }


}