import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList: any[] = []
  nameInput: string = ''

  loadUserData(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => {
        this.usersList = result
        console.log(`
          [
            ${this.usersList.forEach(item => console.log(item.toString()))}
          ]
        `)
      })
  }

  getFilteredUsers(): any[] {
    const query = this.nameInput.toLowerCase()
    return this.usersList.filter(item => item.name.toLowerCase().includes(query))
  }
}
