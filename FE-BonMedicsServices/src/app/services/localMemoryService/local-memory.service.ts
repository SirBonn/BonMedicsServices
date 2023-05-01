import { Injectable } from '@angular/core';
import { LocalMemoryRefService } from './local-memory-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalMemoryService {

  private localgetLocalMemory: Storage;

  constructor(private localMemo: LocalMemoryRefService) {
    this.localgetLocalMemory = this.localMemo.getLocalMemory();
  }

  setItem(item: any, info: string) {
    this.localgetLocalMemory.setItem(info, JSON.stringify(item));
  }

  clear() {
    this.localgetLocalMemory.clear();
  }

  getItem(info: string) {
    return this.localgetLocalMemory.getItem(info);
  }

  removeItemSaved(info: string) {
    this.localgetLocalMemory.removeItem(info);
  }
}
