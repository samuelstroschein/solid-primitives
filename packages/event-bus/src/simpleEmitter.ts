import { GenericListener, GenericEmit, GenericListen } from "./types";
import { tryOnCleanup } from "@solid-primitives/utils";

/**
 * Very minimal interface for emiting and receiving events. Good for parent-child component communication.
 * 
 * @returns `[listen, emit, clear]`
 * 
 * @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/event-bus#createSimpleEmitter
 * 
 * @example
// accepts up-to-3 genetic payload types
const [listen, emit, clear] = createSimpleEmitter<string, number, boolean>();

listen((a, b, c) => console.log(a, b, c));

emit("foo", 123, true);

// clear all listeners
clear();
 */
export function createSimpleEmitter<A0 = void, A1 = void, A2 = void>(
  initial?: GenericListener<[A0, A1, A2]>[]
): [listen: GenericListen<[A0, A1, A2]>, emit: GenericEmit<[A0, A1, A2]>, clear: VoidFunction] {
  const set = new Set(initial);
  tryOnCleanup(() => set.clear());

  return [
    listener => {
      set.add(listener);
      tryOnCleanup(() => set.delete(listener));
      return () => set.delete(listener);
    },
    (...payload) => set.forEach(cb => cb(...payload)),
    () => set.clear()
  ];
}
