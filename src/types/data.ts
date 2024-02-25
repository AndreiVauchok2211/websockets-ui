export type RegDataRequest = {
  name: string;
  password: string;
};

export type RegDataResponse = {
  name: string;
  index: number;
  error: boolean;
  errorText: string;
};
