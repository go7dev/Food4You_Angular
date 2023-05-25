import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav a');
    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('is-active');
      mobileMenu?.classList.toggle('is-active');
    });
    mobileMenuLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.remove('is-active');
        menuBtn?.classList.remove('is-active');
      });
    });
  }
}
