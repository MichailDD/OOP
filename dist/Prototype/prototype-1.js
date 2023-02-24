class TerminatorPrototype {
    constructor(name, surName, model) {
        this.name = name,
            this.surName = surName;
        this.model = model;
    }
    clone() {
        return new TerminatorPrototype(this.name, this.surName, this.model);
    }
}
const T_1000 = new TerminatorPrototype(`Robert`, `Patrick`, `T-1000`);
const T_800 = new TerminatorPrototype(`Arnold`, `Schwarzenegger`, `T-800`);
const terminator_1 = T_1000.clone();
const terminator_2 = T_800.clone();
console.log(terminator_1);
console.log(terminator_2);
//# sourceMappingURL=prototype-1.js.map