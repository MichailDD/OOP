class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItem());
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItem extends DocumentState {
    constructor() {
        super();
        this.name = `DraftDocumentItem`;
    }
    publish() {
        console.log(`На сайт отправлен текст ${this.item.text}`);
        this.item.setState(new PublishDocumentItem());
    }
    delete() {
        console.log(`Публикация  удалена`);
    }
}
class PublishDocumentItem extends DocumentState {
    constructor() {
        super();
        this.name = `PublishDocumentItem`;
    }
    publish() {
        console.log(`Нельзя опубликовать опубликованный документ`);
    }
    delete() {
        console.log(`Снято с публикации`);
        this.item.setState(new DraftDocumentItem());
    }
}
const item = new DocumentItem();
item.text = `новый пост`;
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.deleteDoc();
console.log(item.getState());
item.publishDoc();
//# sourceMappingURL=state.js.map