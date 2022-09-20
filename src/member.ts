

export class Member {

    private name: string;

    private email: string;

    public constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    //getters
    public get memberName() {
        return this.name;
    }
    public get memberEmail() {
        return this.email;
    }


    public toString(): string {
        return `Name: ${this.name} Email: ${this.email}`;
    }


    public isMemberName(memberName: string): boolean {
        return this.name == memberName;
    }

}