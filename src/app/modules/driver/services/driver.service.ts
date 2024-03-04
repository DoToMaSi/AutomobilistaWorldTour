import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Driver } from "../models/driver.model";

@Injectable({
  providedIn: 'root'
})

export class DriverService {

  private drivers$ = signal<Driver[]>([]);
  private activeDriver$ = signal<any>(null);

  constructor() { }

  get drivers() {
    return this.drivers$();
  }

  get activeDriver() {
    return this.activeDriver$();
  }

  loadDrivers() {
    // Implement when Storage is installed.
  }

  setActiveDriver(driver: Driver) {
    this.activeDriver$.set(driver);
  }

  getDriverById(id: number) {
    return this.drivers.find((driver) => driver.id === id);
  }

  addDriver(driver: Driver) {
    const currentDrivers = this.drivers;
    currentDrivers.map((driver, index) => {
      driver.id = (index + 1)
    })

    driver.id = (currentDrivers.length + 1);
    this.drivers$.set([...currentDrivers, driver]);
  }

  removeDriver(driver: Driver) {
    // const currentDrivers = this.driversSubj.getValue();
    // this.driversSubj.next([...currentDrivers, driver]);
  }
}
