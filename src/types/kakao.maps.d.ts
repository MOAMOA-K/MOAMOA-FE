declare namespace kakao {
  export namespace maps {
    class Map {
      constructor(container: HTMLElement, options: object);
    }
    class Marker {
      constructor(options: object);
      setMap(map: Map | null): void;
    }
  }
}
