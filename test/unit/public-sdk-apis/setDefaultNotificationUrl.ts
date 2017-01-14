import test from 'ava';
import OneSignal from "../../../src/OneSignal";
import {InvalidArgumentError, InvalidArgumentReason} from "../../../src/errors/InvalidArgumentError";
import LimitStore from "../../../src/LimitStore";
import Database from "../../../src/Database";
import OneSignalError from "../../../src/errors/OneSignalError";
import {throwsAsync} from "../../support/tester/support";


test("invalid params", async t => {
  await throwsAsync(t, () => OneSignal.setDefaultNotificationUrl('test'), InvalidArgumentError);
  t.throws(OneSignal.setDefaultNotificationUrl('http://www.test.com'), InvalidArgumentError);
});