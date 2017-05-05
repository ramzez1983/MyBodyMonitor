import { Component, Input, OnInit }             from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';
import { ActivatedRoute, Params }               from '@angular/router';
import { Location }                             from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { BodyStats }                            from './bodyStats';
import { StatsService }                         from './stats.service';

@Component({
  selector:     'stats-details',
  templateUrl:  'assets/app/stats-details.component.html',
})
export class StatsDetailsComponent implements OnInit {
  public bodyStats: BodyStats;
  public bodyForm: FormGroup;

  constructor(
    private statsService: StatsService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  get format() {
    /*TODO date format to be read from user profile*/
    return  'dd-MM-yyyy';
  }

  public ngOnInit(): void {
    this.route.params // tslint:disable-next-line:no-string-literal
      .switchMap((params: Params) => this.statsService.getDetailedStats(+params['id']))
      .subscribe(
        (stats) => {
          this.bodyStats = stats;
          this.resetForm(stats);
        });
  }

  public onSubmit() {
    this.bodyStats = this.prepareSaveBody();
    this.statsService.updateBodyStats(this.bodyStats).subscribe(/* error handling */);
    this.ngOnInit();
  }

  public revert() {
    this.ngOnInit();
  }

  public goBack(): void {
    this.location.back();
  }

  private createForm() {
    this.bodyForm = this.fb.group({
      weight:   ['', Validators.required ],
      calories: ['', Validators.required ],
    });
  }

  private resetForm(stats: BodyStats) {
    this.bodyForm.reset({
          weight:   stats.weight,
          calories: stats.calories,
        });
  }

  private prepareSaveBody(): BodyStats {
  // TODO copy values from FormControl to model
    return this.bodyStats;
  }
}
