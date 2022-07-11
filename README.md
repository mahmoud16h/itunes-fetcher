## To run this project execute following commands in order

```
cd server
yarn install
cd ..
yarn install
yarn start
```
To run in development mode, run the following instead of `yarn start`:

```
yarn dev
```

## Testing

### `yarn test`

This will run the test in the `useRecordSearch` hook.
This is the only file that is tested due to time constraints.
However I decided to test the most complex file in the app,
whereas the others are just handling some minor state updates and
rendering simple components