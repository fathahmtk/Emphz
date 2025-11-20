
'use client';

// A simple event emitter using the browser's CustomEvent API.
// This allows different parts of the application to communicate without direct dependencies.

type EventMap = {
  'permission-error': Error;
};

type EventName = keyof EventMap;

class EventEmitter {
  private target = new EventTarget();

  on<T extends EventName>(eventName: T, listener: (event: EventMap[T]) => void) {
    const handler = (event: Event) => {
      listener((event as CustomEvent<EventMap[T]>).detail);
    };
    this.target.addEventListener(eventName, handler);
    // Return a function to remove the listener
    return () => this.target.removeEventListener(eventName, handler);
  }

  off<T extends EventName>(eventName: T, listener: (event: EventMap[T]) => void) {
    const handler = (event: Event) => {
      listener((event as CustomEvent<EventMap[T]>).detail);
    };
    this.target.removeEventListener(eventName, handler);
  }
  
  emit<T extends EventName>(eventName: T, data: EventMap[T]) {
    const event = new CustomEvent(eventName, { detail: data });
    this.target.dispatchEvent(event);
  }
}

export const errorEmitter = new EventEmitter();
