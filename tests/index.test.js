import { Console, colors } from "../index.js";

suite("Console", () => {
  let logger;
  test("Constructor", () => {
    logger = new Console({
      writer: new WritableStream({ write() { } }).getWriter(), clear() { },
    });
    expect(!!logger).toEqual(true);
  });

  test("Colors", () => {
    expect(typeof colors.reset).toEqual("string");
    expect(typeof colors.bright).toEqual("string");
    expect(typeof colors.dim).toEqual("string");
    expect(typeof colors.underscore).toEqual("string");
    expect(typeof colors.blink).toEqual("string");
    expect(typeof colors.reverse).toEqual("string");
    expect(typeof colors.black).toEqual("string");
    expect(typeof colors.red).toEqual("string");
    expect(typeof colors.green).toEqual("string");
    expect(typeof colors.yellow).toEqual("string");
    expect(typeof colors.blue).toEqual("string");
    expect(typeof colors.magenta).toEqual("string");
    expect(typeof colors.cyan).toEqual("string");
    expect(typeof colors.white).toEqual("string");
  });

  test("Announce", () => {
    const len = logger.logs.length;
    logger.announce(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Assert", () => {
    const len = logger.logs.length;
    logger.assert(typeof logger.assert, "function");
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Clear", () => {
    logger.clear();
    expect(0).toEqual(logger.logs.length);
  });

  test("Count", () => {
    const len = logger.logs.length;
    logger.count("count");
    expect(len + 1).toEqual(logger.logs.length);
    logger.countReset("count");
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Println", () => {
    const len = logger.logs.length;
    logger.println();
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Print", () => {
    const len = logger.logs.length;
    logger.print(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Debug", () => {
    const len = logger.logs.length;
    logger.debug(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Dir", () => {
    const len = logger.logs.length;
    logger.dir({ key: "value" });
    expect(len + 1).toEqual(logger.logs.length);
    logger.dirxml({ key: "value" });
    expect(len + 2).toEqual(logger.logs.length);
  });

  test("Error", () => {
    const len = logger.logs.length;
    logger.error(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Group", () => {
    logger.group();
    logger.groupCollapsed();
    logger.groupEnd();
    expect(typeof logger.group).toEqual("function");
    expect(typeof logger.groupCollapsed).toEqual("function");
    expect(typeof logger.groupEnd).toEqual("function");
  });

  test("Info", () => {
    const len = logger.logs.length;
    logger.info(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Log", () => {
    const len = logger.logs.length;
    logger.log(len);
    expect(typeof logger.log).toEqual("function");
  });

  test("Success", () => {
    const len = logger.logs.length;
    logger.success(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Table", () => {
    const len = logger.logs.length;
    logger.table([{ key: "value" }]);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Time", () => {
    const len = logger.logs.length;
    logger.time("time1");
    expect(len).toEqual(logger.logs.length);
    logger.timeLog("time1");
    expect(len + 1).toEqual(logger.logs.length);
    logger.timeEnd("time1");
    expect(len + 2).toEqual(logger.logs.length);
    logger.time("time2");
    expect(len + 2).toEqual(logger.logs.length);
    logger.timeStamp("time2");
    expect(len + 3).toEqual(logger.logs.length);
    logger.timeEnd("time2", false);
    expect(len + 3).toEqual(logger.logs.length);
  });

  test("Trace", () => {
    const len = logger.logs.length;
    logger.trace(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Warn", () => {
    const len = logger.logs.length;
    logger.warn(len);
    expect(len + 1).toEqual(logger.logs.length);
  });

  test("Profile", () => {
    const len = logger.logs.length;
    logger.profile("profile");
    expect(len).toEqual(logger.logs.length);
    logger.profileEnd("profile");
    expect(len + 1).toEqual(logger.logs.length);
  });
});
