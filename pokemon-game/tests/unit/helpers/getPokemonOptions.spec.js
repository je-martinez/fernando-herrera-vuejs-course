import { getPokemonNames, getPokemons } from "@/helpers/getPokemonOptions";

describe("getPokemonOptions", () => {
  test("should return an array of numbers v1", () => {
    // Arrange
    const expected = [1, 2, 3, 4];
    // Act
    const result = getPokemons();
    // Assert
    expect(result.length).toBe(650);
    expect(result[0]).toEqual(1);
    expect(result[500]).toEqual(501);
    expect(result[649]).toEqual(650);
  });
  test("should return an array of numbers v2", () => {
    // Arrange
    const expected = [1, 2, 3, 4];
    // Act
    const result = getPokemons();
    // Assert
    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result.length).toBe(650);
  });

  test("should return array with 4 names of pokemons", async () => {
    const pokemons = [1, 2, 3, 4];
    const result = await getPokemonNames(pokemons);
    expect(result.length).toBe(4);
    expect(result).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
