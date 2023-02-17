class BestSellers {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    // metgods
    greet() {
        return `Best book to read: ${this.title} by ${this.author}`
    }
}

const book1 = new BestSellers('Highly Suspicious and Unfairly Cute', 'Talia Hibbert');
const book2 = new BestSellers('The Stolen Heir: A Novel of Elfhame', 'Holly Black');
const book3 = new BestSellers('Token', 'Beverley Kendall');
const book4 = new BestSellers('Hell Bent', 'Leigh Bardugo');
const book5 = new BestSellers('The Reunion', 'Kayla Olson');


document.getElementById('text').innerHTML = book1.greet();
// document.getElementById('text').innerHTML = book2.greet();
// document.getElementById('text').innerHTML = book3.greet();
// document.getElementById('text').innerHTML = book4.greet();
// document.getElementById('text').innerHTML = book5.greet();


