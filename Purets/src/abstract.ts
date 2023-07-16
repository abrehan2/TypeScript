abstract class takePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReel(): number {
    return 8;
  }
}

class Insta extends takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("HI");
  }
}

const object = new Insta("test", "TEST", 4);

object.getReel();
object.getSepia();
