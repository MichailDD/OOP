export class User {
    id: number;
    name: string;
    email: string;
    
    constructor(id: number, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }
  
  export class UserModel {
    private users: User[] = [];
  
    getAllUsers(): User[] {
      return this.users;
    }
  
    addUser(user: User): void {
      this.users.push(user);
    }
  
    removeUser(user: User): void {
      this.users = this.users.filter(u => u.id !== user.id);
    }
  }
  export class UserView {
    private controller: UserController;
    private userList: HTMLElement;
  
    constructor(controller: UserController) {
      this.controller = controller;
      this.userList = document.getElementById("user-list");
    }
  
    renderUserList(users: User[]): void {
      this.userList.innerHTML = "";
      users.forEach(user => {
        const userElement = document.createElement("div");
        userElement.innerHTML = `
          <div>ID: ${user.id}</div>
          <div>Name: ${user.name}</div>
          <div>Email: ${user.email}</div>
          <button class="remove-user" data-id="${user.id}">Remove</button>
        `;
        userElement.querySelector(".remove-user").addEventListener("click", () => {
          this.controller.removeUser(user);
        });
        this.userList.appendChild(userElement);
      });
    }
  }
  export class UserController {
    private model: UserModel;
    private view: UserView;
  
    constructor(model: UserModel, view: UserView) {
      this.model = model;
      this.view = view;
      this.view.renderUserList(this.model.getAllUsers());
    }
  
    addUser(name: string, email: string): void {
      const user = new User(this.model.getAllUsers().length + 1, name, email);
      this.model.addUser(user);
      this.view.renderUserList(this.model.getAllUsers());
    }
  
    removeUser(user: User): void {
      this.model.removeUser(user);
      this.view.renderUserList(this.model.getAllUsers());
    }
  }
      