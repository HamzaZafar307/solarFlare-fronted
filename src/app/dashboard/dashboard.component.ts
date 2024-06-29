import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  configurations = [5, 10, 15];
  selectedConfig: number | null = null;
  details: any;
  names = ['System A', 'System B', 'System C'];

  onConfigChange() {
    this.updateDetails();
    if (this.details && this.details.length > 0) {
      this.details[0].item = this.names[0]; // Set default name for the first dropdown
    }
  }
  

  updateDetails() {
    if (this.selectedConfig !== null) {
      this.details = this.getDetails(this.selectedConfig.toString());
    }
  }


  getDetails(config: string) {
    const configurations: { [key: string]: { item: string; quantity: number; price: number; cost?: number }[] } = {
      '5': [
        { item: 'System Name', quantity: 1, price: 0 },
        { item: 'Solar Structure', quantity: 1, price: 500 },
        { item: 'DC Breaker Two Pole 1000V 63A', quantity: 2, price: 100 },
        { item: 'DC SPD Two Pole 1000V 40KA', quantity: 2, price: 150 },
        { item: 'AC SPD 4P 63KA', quantity: 1, price: 200 },
        { item: 'AC Breaker', quantity: 1, price: 80 },
        { item: 'External Disconnector', quantity: 1, price: 120 },
        { item: 'External Disconnector DB Box Waterproof', quantity: 1, price: 90 },
        { item: 'Grid Tied DB Box', quantity: 1, price: 150 },
        { item: 'DC Cable Coil Rate', quantity: 50, price: 500 },
        { item: 'Earthing Cable', quantity: 20, price: 200 },
        { item: 'AC Cable 6mm', quantity: 30, price: 300 }
      ],
      '10': [
        { item: 'System Name', quantity: 1, price: 0 },
        { item: 'Solar Structure', quantity: 2, price: 1000 },
        { item: 'DC Breaker Two Pole 1000V 63A', quantity: 4, price: 200 },
        { item: 'DC SPD Two Pole 1000V 40KA', quantity: 4, price: 300 },
        { item: 'AC SPD 4P 63KA', quantity: 2, price: 400 },
        { item: 'AC Breaker', quantity: 2, price: 160 },
        { item: 'External Disconnector', quantity: 2, price: 240 },
        { item: 'External Disconnector DB Box Waterproof', quantity: 2, price: 180 },
        { item: 'Grid Tied DB Box', quantity: 2, price: 300 },
        { item: 'DC Cable Coil Rate', quantity: 100, price: 1000 },
        { item: 'Earthing Cable', quantity: 40, price: 400 },
        { item: 'AC Cable 6mm', quantity: 60, price: 600 }
      ],
      '15': [
        { item: 'System Name', quantity: 1, price: 0 },
        { item: 'Solar Structure', quantity: 3, price: 1500 },
        { item: 'DC Breaker Two Pole 1000V 63A', quantity: 6, price: 300 },
        { item: 'DC SPD Two Pole 1000V 40KA', quantity: 6, price: 450 },
        { item: 'AC SPD 4P 63KA', quantity: 3, price: 600 },
        { item: 'AC Breaker', quantity: 3, price: 240 },
        { item: 'External Disconnector', quantity: 3, price: 360 },
        { item: 'External Disconnector DB Box Waterproof', quantity: 3, price: 270 },
        { item: 'Grid Tied DB Box', quantity: 3, price: 450 },
        { item: 'DC Cable Coil Rate', quantity: 150, price: 1500 },
        { item: 'Earthing Cable', quantity: 60, price: 600 },
        { item: 'AC Cable 6mm', quantity: 90, price: 900 }
      ]
    };
    return configurations[config].map(item => ({
      ...item,
      cost: item.quantity * item.price
    }));
  }

  updateCost(item: any) {
    item.cost = item.quantity * item.price;
  }

  calculateTotal() {
    return this.details.reduce((sum: number, item: any) => sum + item.cost, 0);
  }
}
