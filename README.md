# lerna-monorepo-sample

This monorepo was built using lerna.

It is a sample containing two packages using a shared dependency, in this case jest.

This dependency is installed only on the route, but since we have lerna it keeps available to all packages without reinstalling on each one.

## Test it yourself

Clone this monorepo, install the dependencies using `yarn` command and after that run `yarn lerna run test test` or just `yarn test` (it is a script on root package.json).
