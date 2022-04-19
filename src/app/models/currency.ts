export interface Rates{
        [key: string]: number
      }; 
  
export interface Currency{
        amount:number,
        base:String,
        date:String,
        rates:Rates,
      }