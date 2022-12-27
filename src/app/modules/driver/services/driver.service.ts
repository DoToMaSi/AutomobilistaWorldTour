import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Driver } from "../models/driver.model";

@Injectable({
  providedIn: 'root'
})

export class DriverService {

  private driversSubj = new BehaviorSubject<Driver[]>([]);
  private activeDriverSubj = new BehaviorSubject<Driver | null>(null);

  constructor() {}

  get drivers() {
    return this.driversSubj.asObservable();
  }

  get activeDriver() {
    return this.activeDriverSubj.asObservable();
  }

  loadDrivers() {
    // Implement when Storage is installed.
  }

  setActiveDriver(driver: Driver) {
    this.activeDriverSubj.next(driver);
  }

  addDriver(driver: Driver) {
    const currentDrivers = this.driversSubj.getValue();
    this.driversSubj.next([...currentDrivers, driver]);
  }

  removeDriver(driver: Driver) {
    // const currentDrivers = this.driversSubj.getValue();
    // this.driversSubj.next([...currentDrivers, driver]);
  }
}
