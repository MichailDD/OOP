class Form {
    constructor(name) {
        this.name = name;
    }
}
class SaveForm {
    save(form) {
        const result = this.fill(form);
        this.log(result);
        this.send(result);
    }
    log(data) {
        console.log(data);
    }
}
class FirstAPI extends SaveForm {
    fill(form) {
        return form.name;
    }
    send(data) {
        console.log(`Отправляю ${data}`);
    }
}
class SecondAPI extends SaveForm {
    fill(form) {
        return { fio: form.name };
    }
    send(data) {
        console.log(`Отправляю ${data}`);
    }
}
const form1 = new FirstAPI();
form1.save(new Form(`Test Testovich Testov`));
const form2 = new SecondAPI();
form2.save(new Form(`Test Testovich Testov`));
//# sourceMappingURL=template.js.map