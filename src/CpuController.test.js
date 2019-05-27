import { areDifferents } from "./Controller";
import { generateRandom } from "./CpuController";

it("generateRandoms with 4 digits differents", () => {
  expect(areDifferents(generateRandom())).toEqual(true);
});
