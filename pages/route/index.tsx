export default function FirstPost() {
  interface Position {
    lat: number;
    long: number;
    name: string;
  }

  interface Route {
    name: string;
    positions: Array<Position>;
  }

  const faerdern2022: Route = {
    name: "Færderseilasen 2022",
    positions: [
      { name: "Aker brygge", lat: 59.906, long: 10.729 },
      { name: "Midtmerke Nesoddtangen", lat: 59.875, long: 10.647 },
      { name: "Gåsungene", lat: 59.84, long: 10.586 },
      { name: "Runding Nærsnes", lat: 59.772, long: 10.517 },
      { name: "Syvest for Aspond (Øst Håøya", lat: 59.72, long: 10.571 },
      { name: "Inngang Drøbaksundet Øst", lat: 59.673, long: 10.557 },
      { name: "Filtvet", lat: 59.579, long: 10.529 },
      { name: "Mølen", lat: 59.485, long: 10.502 },
      { name: "Hollenderbaen", lat: 59.161, long: 10.626 },
      { name: "Husøy", lat: 59.24, long: 10.474 },
    ],
  };

  return (
    <div className="flex flex-col gap-2 font-mono bg-red-400 m-6 [&>*]:p-2 s">
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
    </div>
  );
}
