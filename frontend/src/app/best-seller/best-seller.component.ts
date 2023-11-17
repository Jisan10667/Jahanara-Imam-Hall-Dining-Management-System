import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss']
})
export class BestSellerComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  // Function to handle form submission
  onSubmit(): void {
    const scriptURL = "https://script.google.com/macros/s/AKfycbygjd5kE0p5TFQ72j0YHsDj_Zscy449fdn0cJbV0fifeomgDMA6kI-Q3LxWcdXCRLtf/exec";

    // Use ElementRef to get access to the native element
    const formGoogleSheet = (this.el.nativeElement as HTMLElement).querySelector('form[name="submit-to-google-sheet"]') as HTMLFormElement;
    console.log('Form element:', formGoogleSheet);
    // Check if the form element is found before creating FormData
    if (formGoogleSheet) {
      // Perform the fetch operation
      fetch(scriptURL, { method: 'POST', body: new FormData(formGoogleSheet) })
        .then(response => console.log('Google Sheets Success!', response))
        .catch(error => console.error('Google Sheets Error!', error.message));
    } else {
      console.error('Form element not found.');
    }
  }
}
