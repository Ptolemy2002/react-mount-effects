# React Mount Effects
React allows `useEffect(() => {callback()}, [])` to run the callback only on first mount, thus `useEffect(() => callback, [])` only runs on unmounting. However, eslint often complains about this. This library manually suppresses those warnings and exports the hooks for convenience sake.

The hooks are not exported as default, so you can import in one of the following ways:
```javascript
//ES6
import { useMountEffect, useUnmountEffect, useDelayedEffect } from '@ptolemy2002/react-mount-effects';
//CommonJS
const { useMountEffect, useUnmountEffect, useDelayedEffect } = require('@ptolemy2002/react-mount-effects');
```

The example for this library purposefully does not run in strict mode, as doing so allows more clear demonstration of exactly when each hook runs (console logs are run only once and there aren't any extraneous mounts/unmounts).

## Hooks
The following hooks are available in the library:

### useMountEffect
#### Description
Runs the callback only on first mount. The return value of the callback is ignored.

#### Parameters
- `callback` (`() => void`): The callback to run on first mount.

#### Returns
None

### useUnmountEffect
#### Description
Runs the callback only on unmount. The return value of the callback is ignored.

#### Parameters
- `callback` (`() => void`): The callback to run on unmount.

#### Returns
None

### useDelayedEffect
#### Description
Runs the callback only after it has been triggered `delay + 1` times (since the first is on mount and does not represent a state change). The return value of the callback is ignored.

#### Parameters
- `callback` (`(changeCount: number, reset: () => void) => void`): The callback to run after the delay. The first parameter is the number of times the effect has been triggered since either initialization or last reset, and the second argument is a function that allows you to reset the counter.
- `deps` (`react.DependencyList`): An array of dependencies to listen to. This works exactly like the `useEffect` hook's dependencies. By default, this is an empty array.
- `delay` (`number`): The number of times the dependencies must change before the callback is run. Default is `0`, meaning the callback is run on any change, but not on mount.

#### Returns
None

## Peer Dependencies
- `react^18.3.1`
- `react-dom^18.3.1`

## Commands
The following commands exist in the project:

- `npm run build` - Builds the library
- `npm run dev` - Starts the development server
- `npm run lint` - Lints the project
- `npm run uninstall` - Uninstalls all dependencies for the library and clears the cache
- `npm run reinstall` - Uninstalls, clears the cache, and then reinstalls all dependencies for the library
- `npm run release` - Publishes the library to npm without changing the version
- `npm run release-patch` - Publishes the library to npm with a patch version bump
- `npm run release-minor` - Publishes the library to npm with a minor version bump
- `npm run release-major` - Publishes the library to npm with a major version bump