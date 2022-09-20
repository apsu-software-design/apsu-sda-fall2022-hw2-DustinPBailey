/*
    creates an array of type Member, used to seperate the class from the other classes
*/

import { Member } from "./member";

export class Members {
    private members: Member[];

    constructor() {
        this.members = [];
    }

    //find member
    findMemberByName(nameQuery: string): boolean {
        let flag = false
        this.members.forEach(function (Member) {
            if (Member.isMemberName(nameQuery)) {
                flag = true;
            }
        });
        return flag;
    }


    returnMemberByName(nameQuery: string): Member {
        let member;
        this.members.forEach(function (Member) {
            if (Member.isMemberName(nameQuery)) {
                member = Member;
            }
        });
        return member;
    }

    //adds member to array in next open position
    addMember(name: string, email: string) {
        let member = new Member(name, email);
        this.members.push(member);
    }

    //display members maybe...
    displayMembers(): void {
        this.members.forEach(function (Member) {
            console.log(Member);
        });
    }

    returnMemberNameList(): string[] {
        let memberNames: string[] = [];
        for (let i = 0; i < this.members.length; i++) {
            memberNames.push(this.members[i].memberName);
        }
        return memberNames;
    }

}

