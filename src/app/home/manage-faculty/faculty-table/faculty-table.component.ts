import { Faculty } from "serve/src/entity/Faculty";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FacultyService } from "./../../../shared/services/faculty.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-faculty-table",
  templateUrl: "./faculty-table.component.html",
  styleUrls: ["./faculty-table.component.less"]
})
export class FacultyTableComponent implements OnInit, OnDestroy {
  faculties: Faculty[];
  sub: Subscription;
  constructor(
    private FacService: FacultyService,
    private router: Router,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.FacService.Faculties.subscribe(
      (faculties: Faculty[]) => (this.faculties = faculties)
    );
    this.sub = this.FacService.updateFaculties.subscribe(
      (faculties: Faculty[]) => {
        this.faculties = faculties;
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEdit(id: number) {
    this.router.navigate([id], { relativeTo: this.acRoute });
  }
}
