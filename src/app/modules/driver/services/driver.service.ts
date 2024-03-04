import { Injectable, signal } from "@angular/core";
import { Driver } from "../models/driver.model";
import { StorageService } from 'src/app/core/services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class DriverService {

  private drivers$ = signal<Driver[]>([]);
  private activeDriver$ = signal<any>(null);

  constructor(private storage: StorageService) { }

  get drivers() {
    return this.drivers$();
  }

  get activeDriver() {
    return this.activeDriver$();
  }

  async loadDrivers() {
    return await this.storage.get('drivers');
  }

  async saveDrivers() {
    return await this.storage.set('drivers', this.drivers$());
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

    this.saveDrivers();
  }

  removeDriver(driver: Driver) {
    const currentDrivers = this.drivers;
    currentDrivers.splice(currentDrivers.indexOf(driver));
    this.drivers$.set(currentDrivers);
  }
}
