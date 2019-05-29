export class UserPost {
  name = '';
  username = '';
  phone = '';
  password: '';
  avatar = '';

  constructor({name, username, phone, password, avatar}) {
    this.name = name;
    this.username = username;
    this.phone = phone;
    this.password = password;
    this.avatar = avatar;
  }
}
