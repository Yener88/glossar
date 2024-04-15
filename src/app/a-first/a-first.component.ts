import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a-first.component.html',
  styleUrl: './a-first.component.scss'
})

export class AFirstComponent {

  constructor() { }

  // Alphabet-Array für die Buchstaben-Navigation
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Funktion zum Umschalten der Eintragsdetails
  toggleDetails(entry: any): void {
    entry.showDetails = !entry.showDetails;
  }

  // Funktion für Bold des Titels innerhalb von fullTitle
  makeTitleBold(fullTitle: string, title: string): string {
    return fullTitle.replace(new RegExp(title, 'gi'), `<b>${title}</b>`);
  }

  // Einträge
  entries: any[] = [
    // Buchstabe A
    {
      title: "Agilität",
      fullTitle: "Was ist Agilität?",
      description: "Aus der Software-Entwicklung stammend, ist mit agile eine neue Art der Zusammenarbeit gemeint, die nicht mehr auf einen fixen Plan und dessen rigorose Umsetzung setzt. Stattdessen steht ein gemeinsames Verständnis des gewünschten Ergebnisses und ein ständiges Nachjustieren des Prozesses im Mittelpunkt. Der Unterschied zwischen agil und flexibel: Flexibel ist, was re-aktiv seine Form verändern kann, dann aber wieder zur Ausgangsform zurückfindet. Agil ist, was pro-aktiv aufgrund äußerer und selbstbestimmter Anforderungen die Form verändert und dann auch in der neuen Form bleibt.",
      creator: "Yener Bas",
      date: "15.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Angular",
      fullTitle: "Was ist Angular?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 2",
      date: "16.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe B
    {
      title: "Buchhaltung",
      fullTitle: "Was ist Buchhaltung eigentlich?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 3",
      date: "17.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Blockchain",
      fullTitle: "Was ist Blockchain?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 4",
      date: "18.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe C
    {
      title: "Cloud Computing",
      fullTitle: "Was bedeutet Cloud Computing heutzutage?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 5",
      date: "19.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Cybersecurity",
      fullTitle: "Was ist Cybersecurity?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 6",
      date: "20.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe D
    {
      title: "Data Science",
      fullTitle: "Was ist Data Science?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 7",
      date: "21.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Design Thinking",
      fullTitle: "Was ist Design Thinking?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 8",
      date: "22.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe E
    {
      title: "E-Commerce",
      fullTitle: "Was ist E-Commerce normalerweise?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 9",
      date: "23.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Elektromobilität",
      fullTitle: "Was ist Elektromobilität?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 10",
      date: "24.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe F
    {
      title: "Finanzwesen",
      fullTitle: "Was ist Finanzwesen?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 11",
      date: "25.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Führungskompetenz",
      fullTitle: "Was ist mit Führungskompetenz gemeint?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 12",
      date: "26.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe G
    {
      title: "Gesundheitswesen",
      fullTitle: "Was ist Gesundheitswesen?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 13",
      date: "27.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Grafikdesign",
      fullTitle: "Was ist Grafikdesign?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 14",
      date: "28.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe H
    {
      title: "Human Resources",
      fullTitle: "Was ist Human Resources?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 15",
      date: "29.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "HTML",
      fullTitle: "Was ist HTML?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 16",
      date: "30.04.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe I
    {
      title: "IT-Infrastruktur",
      fullTitle: "Was ist IT-Infrastruktur?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 17",
      date: "01.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Innovationsmanagement",
      fullTitle: "Was ist Innovationsmanagement eigentlich?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 18",
      date: "02.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe J
    {
      title: "JavaScript",
      fullTitle: "Was ist JavaScript?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 19",
      date: "03.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Java",
      fullTitle: "Was ist Java heutzutage?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 20",
      date: "04.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe K
    {
      title: "Kommunikation",
      fullTitle: "Was ist Kommunikation?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 21",
      date: "05.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Kundenbeziehung",
      fullTitle: "Was ist Kundenbeziehung?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 22",
      date: "06.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe L
    {
      title: "Lean Management",
      fullTitle: "Was ist Lean Management?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 23",
      date: "07.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Logistik",
      fullTitle: "Was ist Logistik?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 24",
      date: "08.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe M
    {
      title: "Marketing",
      fullTitle: "Was ist Marketing?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 25",
      date: "09.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Maschinelles Lernen",
      fullTitle: "Was ist Maschinelles Lernen?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 26",
      date: "10.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe N
    {
      title: "Netzwerktechnik",
      fullTitle: "Was ist Netzwerktechnik?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 27",
      date: "11.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "New Work",
      fullTitle: "Was ist New Work?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 28",
      date: "12.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    // Buchstabe O
    {
      title: "Open Source",
      fullTitle: "Was ist Open Source?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 29",
      date: "13.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    },
    {
      title: "Online-Marketing",
      fullTitle: "Was ist Online-Marketing?",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora reiciendis, veritatis debitis iusto totam, temporibus, nemo optio perspiciatis expedita error illo quas et. Optio, fuga quidem a blanditiis voluptatem neque.",
      creator: "Ersteller 30",
      date: "14.05.2024",
      imageUrl: "assets/img/agil.png",
      showDetails: false
    }













  ]
}