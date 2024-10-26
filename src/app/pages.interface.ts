
export interface PagesInterface {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UsersInterface[];
    support: Support;
  }
  
  export interface UsersInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  
  export interface Support {
    url: string;
    text: string;
  }
  