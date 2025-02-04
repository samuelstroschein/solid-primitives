# @solid-primitives/event-listener

## 2.2.6

### Patch Changes

- c2866ea6: Update utils package
- Updated dependencies [c2866ea6]
  - @solid-primitives/utils@5.0.0

## 2.2.5

### Patch Changes

- dd2d7d1c: Improve export conditions.
- Updated dependencies [dd2d7d1c]
  - @solid-primitives/utils@4.0.1

## 2.2.4

### Patch Changes

- Updated dependencies [9ed32b38]
  - @solid-primitives/utils@4.0.0

## 2.2.3

### Patch Changes

- b662fe9f: Improve package export contidions for SSR (node, workers, deno)
- abb8063c: Prevent `makeEventListener` from displaying a warning if used outside of a reactive root
- Updated dependencies [a372d0e7]
- Updated dependencies [b662fe9f]
- Updated dependencies [abb8063c]
  - @solid-primitives/utils@3.1.0

## 2.2.2

### Patch Changes

- 7ac41ed: Update to solid-js version 1.5
- Updated dependencies [7ac41ed]
  - @solid-primitives/utils@3.0.2

## 2.2.1

### Patch Changes

- Updated dependencies [73b6a34]
  - @solid-primitives/utils@3.0.0

## Changelog up to version 2.2.0

0.0.100

First ported commit from react-use-event-listener.

1.1.4

Released a version with type mostly cleaned up.

1.2.3

Switched to a more idiomatic pattern: Warning: incompatible with the previous version!

1.2.5

Added CJS build.

1.2.6

Migrated to new build process.

1.3.0

**(minor breaking changes to type generics and returned functions)**
Primitive rewritten to provide better types and more solidlike (reactive) usage. Added a lot more primitives.

1.3.8

Published recent major updates to latest tag.

1.4.1

Updated to Solid 1.3

1.4.2

Minor improvements.

1.4.3

Allow listening to multiple event types with a single `createEventListener` | `createEventSignal`. Removed option to pass a reactive signal as options.

1.5.0

Add `createEventListenerBus`.

2.0.0

[PR#113](https://github.com/solidjs-community/solid-primitives/pull/113)

Remove `createEventListenerBus`, `createEventListenerStore` & `eventListenerMap`

Add `makeEventListener` and `makeEventListenerStack`

Remove clear() functions from reactive primitives.

2.1.0

Allow for `undefined` targets in `createEventListener`

2.2.0

Add `preventDefault`, `stopPropagation` and `stopImmediatePropagation` callback wrappers.
