export class Lab {
  path : string;
  label : string;
  isVisible : boolean;

  constructor(path : string, label : string, isVisible : boolean) {
    this.path = path;
    this.label = label;
    this.isVisible = isVisible;
  }
}

export const Labs : Array<Lab> = [
  new Lab('kinematic-lab', 'Cinemática', true),
  new Lab('dynamic-lab', 'Dinámica', true),
  new Lab('friction-lab', 'Rozamiento', true),
  new Lab('energy-lab', 'Energía', true),
  new Lab('wave-lab', 'Ondas', true),
  new Lab('refraction-lab', 'Refracción', true),
  new Lab('circuits-lab', 'Circuitos', true),
]