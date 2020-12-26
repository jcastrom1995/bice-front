export interface IndicatorsI {
  data: {
    name: string;
    unit: string;
    year: number;
    information: InformationI;
  };
}

export interface InformationI {
  months: string[];
  values: number[];
}

export interface IndicatorI {
  data: {
    cobre: IndicatorInformationI;
    dolar: IndicatorInformationI;
    euro: IndicatorInformationI;
    ipc: IndicatorInformationI;
    ipv: IndicatorInformationI;
    oro: IndicatorInformationI;
    plata: IndicatorInformationI;
    uf: IndicatorInformationI;
    utm: IndicatorInformationI;
    yen: IndicatorInformationI;
  };
}

export interface IndicatorInformationI {
  date: number;
  key: string;
  name: string;
  unit: string;
  value: number;
}
