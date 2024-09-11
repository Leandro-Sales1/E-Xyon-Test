import { atom, RecoilState } from "recoil";

//Setting the interface of my object
export interface AreaProps {
  name: string;
  description: string;
  unities: string[];
  services: string[];
  date: string;
  status: boolean;
}

export const areasState: RecoilState<AreaProps[]> = atom({
  key: 'areasState',
  default: [{
    name: 'Cível',
    description: '',
    unities: [] ,
    services: [],
    date: '15-08-2024',
    status: true
  },{
    name: 'Penal',
    description: '',
    unities: [] ,
    services: [],
    date: '15-08-2024',
    status: true
  },{
    name: 'Tributário',
    description: '',
    unities: [] ,
    services: [],
    date: '15-08-2024',
    status: true
  },{
    name: 'Eleitoral',
    description: '',
    unities: [] ,
    services: [],
    date: '15-08-2024',
    status: true
  },{
    name: 'Trabalhista',
    description: '',
    unities: [] ,
    services: [],
    date: '15-08-2024',
    status: true
  },{
    name: 'Militar',
    description: '',
    unities: [] ,
    services: [],
    date: '15-08-2024',
    status: true
  },] as AreaProps[],
});


