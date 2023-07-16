interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements takePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  createStory(): void {
    console.log("Story is created");
  }
}

class Youtube implements takePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
}
