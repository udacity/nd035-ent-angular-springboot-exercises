import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  total: string | null;
  customerName: string | null;

  constructor(private route: ActivatedRoute) {
    this.total = '';
    this.customerName = '';
  }

  ngOnInit(): void {
    this.total = this.route.snapshot.paramMap.get("total")
    this.customerName = this.route.snapshot.paramMap.get("customerName")
  }
}
