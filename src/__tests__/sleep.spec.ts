import { sleep } from "../";

describe("sleep", () => {
  it("Should sleep for a second", async () => {
    let finished = false;

    setTimeout(() => {
      expect(finished).toEqual(false);
    }, 5);

    await sleep(10)().then(() => {
      finished = true;
    });

    expect(finished).toEqual(true);
  });
});
