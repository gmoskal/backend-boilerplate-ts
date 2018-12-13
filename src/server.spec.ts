import { calculate } from "./policy"
describe("server", () => {
    it("works", () => {
        expect(calculate("a")).toEqual("A")
    })
})
