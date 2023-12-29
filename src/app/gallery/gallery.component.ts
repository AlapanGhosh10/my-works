// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-gallery',
//   templateUrl: './gallery.component.html',
//   styleUrls: ['./gallery.component.css']
// })
// export class GalleryComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [
    { url: 'assets/images/image1.jpg', alt: 'Image 1' },
    { url: 'assets/images/image2.jpg', alt: 'Image 2' },
    { url: 'assets/images/image3.jpg', alt: 'Image 3' },
    { url: 'assets/images/image4.jpg', alt: 'Image 4' },
    { url: 'assets/images/image5.jpg', alt: 'Image 5' },
    { url: 'assets/images/image6.jpg', alt: 'Image 6' },
    { url: 'assets/images/image7.jpg', alt: 'Image 7' },
    { url: 'assets/images/image8.jpg', alt: 'Image 8' },
    { url: 'assets/images/image9.jpg', alt: 'Image 9' },
    { url: 'assets/images/image10.jpg', alt: 'Image 10' },
    { url: 'assets/images/image11.jpg', alt: 'Image 11' },
    { url: 'assets/images/image12.jpg', alt: 'Image 12' },
    { url: 'assets/images/image13.jpg', alt: 'Image 13' },
    { url: 'assets/images/image14.jpg', alt: 'Image 14' },
    { url: 'assets/images/image15.jpg', alt: 'Image 15' },
    { url: 'assets/images/image16.jpg', alt: 'Image 16' },
    { url: 'assets/images/image17.jpg', alt: 'Image 17' },
    { url: 'assets/images/image18.jpg', alt: 'Image 18' },
    { url: 'assets/images/image19.jpg', alt: 'Image 19' },
    { url: 'assets/images/image20.jpg', alt: 'Image 20' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}