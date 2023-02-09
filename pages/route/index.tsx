import Map from "@/components/Map";

class Position {
  lat: number;
  long: number;
  name: string;
  constructor(name:string, lat:number, long: number) {
    this.lat = lat;
    this.long = long;
    this.name = name;
  }

  dist() {
    return Math.hypot(this.lat, this.long);
  } 
}

export class Route {
  name: string;
  positions: Array<Position>;

  constructor(name: string, positions: Array<Position>) {
    this.name = name;
    this.positions = positions;
  }
}


const fields:Array<string> = ['Fra','Lat','Long','Kurs','Dist','Klokke','Varighet','Tid','Data','TWS','TWD','Forecast','WA','TWA','BSP','VINKEL','VMG','Tenk på'];
 

const faerdern2022: Route = new Route("Færderseilasen 2022",
  [
    new Position("Aker brygge", 59.906,10.729 ),
    new Position("Midtmerke Nesoddtangen", 59.875,10.647 ),
    new Position("Gåsungene", 59.84,10.586 ),
    new Position("Runding Nærsnes", 59.772,10.517 ),
    new Position("Syvest for Aspond (Øst Håøya)", 59.72,10.571),
    new Position("Inngang Drøbaksundet Øst", 59.673,10.557),
    new Position("Filtvet", 59.579,10.529 ),
    new Position("Mølen", 59.485,10.502 ),
    new Position("Hollenderbaen", 59.161,10.626 ),
    new Position("Husøy", 59.24,10.474 ),
  ],
);


export default function FirstPost() {

  const currentRoute: Route = faerdern2022;

  return (
    <div className="flex flex-col bg-slate-100 m-6 h-[1000px] relative">
      <table className="border-separate border-spacing-2 flex-shrink p-2">
        <thead>
          <tr className="text-left">
            <th>Sted</th>
            <th>Lat</th>
            <th>Long</th>
          </tr>
        </thead>
        <tbody>
          {currentRoute.positions.map((position, i) => {
            const distance = 1;
            return (
              <tr key={i}>
                <td className="">{position.name}</td>
                <td>{position.lat}</td>
                <td>{position.long}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Map currentRoute={currentRoute}/>
    </div>
  );
}
