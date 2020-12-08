import { Component, Input, OnInit } from '@angular/core';
import { DynamicOutputData } from 'src/app/classes/dynamic-output-data';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'dynamic-output',
  templateUrl: './dynamic-output.component.html',
  styleUrls: ['./dynamic-output.component.scss']
})
export class DynamicOutputComponent implements OnInit {
  @Input() data : DynamicOutputData;
  tableData : MatTableDataSource<DynamicOutputData>; 
  displayedColumns = ["time", "velocity", "position"];

  constructor() { 
    this.tableData = new MatTableDataSource<DynamicOutputData>();
  }

  ngOnInit(): void {}

  addToTable(data : DynamicOutputData) : void {
    this.tableData.data.push(data);
    this.tableData._updateChangeSubscription();
  }

  clear() : void {
    this.tableData.data = [];
    this.tableData._updateChangeSubscription();
  }
}
 