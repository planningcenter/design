/**
 * Observable
 * Modeled off of rxjs observable.
 * Subscribe to events when object is updated.
 *
 * ex.
 * const obs = new Observable({ name: "Foo" })
 * obs.subscribe(value => // do something )
 * obs.set({ name: "Bar" }) // fires subscribers with new value
 * obs.get() // { name: "Bar" }
 */

class Observable {
  constructor(initialValue) {
    this.value = initialValue;
  }
  get = () => this.value;
  set = value => {
    this.value = value;
    this.subscribers.forEach(s => s(this.value));
  };
  subscribers = [];
  subscribe = fn => (this.subscribers = [fn, ...this.subscribers]);
}

export default Observable;
