import { Activity } from './activity.model';

export interface Program {
  url: string;
  id: number;
  status?: string;
  budget?: number;
  actuals?: number;
  difference?: number;
  level1_uuid?: string;
  unique_id?: number;
  name: string;
  funding_status?: string;
  cost_center?: string;
  description?: string;
  public_dashboard?: boolean;
  start_date?: string;
  end_date?: string;
  create_date?: string;
  edit_date?: string;
  sort?: number;
  organization?: string;
  portfolio?: string;
  fund_code?: string[];
  award?: string[];
  sector?: string[];
  sub_sector?: string[];
  country?: string[];
  milestone?: string[];
  user_access?: string[];
  activities?: Activity[];
}
