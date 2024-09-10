import { format } from "date-fns";

//Setting the interface of my object
export interface AreaProps {
  name: string;
  description: string;
  unities: string[];
  services: string[];
  date: string;
  status: boolean;
}

const date = format(new Date(), "dd-MM-yyyy");


//export my const with a default object
export const areas: AreaProps[] = [{
  name: 'Cívil',
  description: '',
  unities: [''],
  services: [''],
  date,
  status: true
}, {
  name: 'Cívil',
  description: '',
  unities: [''],
  services: [''],
  date,
  status: false
}, ]
