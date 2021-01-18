import { reactive, readonly } from 'vue'

export abstract class Store<T extends Record<string, any>> {
  protected state: T

  constructor () {
    const data = this.data()
    this.setup(data)
    this.state = reactive(data) as T
  }

  protected abstract data (): T

  protected setup (data: T): void {
    console.log('set-up')
  }

  public getState (): T {
    return readonly(this.state) as T
  }
}
