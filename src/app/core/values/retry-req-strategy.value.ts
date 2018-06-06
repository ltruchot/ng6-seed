import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { timer } from 'rxjs/observable/timer';
import { empty } from 'rxjs/observable/empty';
import { mergeMap, finalize, tap } from 'rxjs/operators';
import { IRetryReqOptions } from '@models/http.model';
export const retryReqStrategy = ({
  maxRetryAttempts = 0,
  scalingDuration = 0,
  statusCodes = [],
  requestToWait
}: IRetryReqOptions = {}) => (attempts: Observable<any>) => {
  requestToWait = requestToWait || empty();
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt > maxRetryAttempts ||
        !statusCodes.find(e => e === error.status)
      ) {
        return _throw(error);
      }
      console.log(
        `Attempt ${retryAttempt}: retrying in ${retryAttempt *
          scalingDuration}ms`
      );
      // retry after 1s, 2s, etc...
      return requestToWait.pipe(
        tap(() => timer(retryAttempt * scalingDuration))
      );
    }),
    finalize(() => console.log('We are done!'))
  );
};
