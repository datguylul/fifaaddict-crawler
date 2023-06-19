export interface FifaOnlinePlayerProperties {
  id?: number;
  name?: string;
  slug?: string;
  type?: string;
  parent_id?: number;
  pivot?: {
    player_id?: number;
    property_id?: number;
    order?: number;
  };
}

export interface FifaOnlinePlayer {
  id?: number;
  profile_id?: number;
  url?: string;
  name?: string;
  name_sort?: string;
  thumb?: string;
  icon?: string;
  class_id?: number;
  nation_id?: number;
  club_id?: null;
  is_nation_team?: number;
  properties?: FifaOnlinePlayerProperties[];
  position?: {
    cf?: number;
  };
  pay?: number;
  ovr?: number;
  price_vn?: number;
  price_kr?: number;
  height?: number;
  col1?: number;
  col2?: number;
  col3?: number;
  lv?: number;
}

export interface AttrValue {
  min?: string;
  max?: string;
}

export interface FORequest {
  pos?: string[];
  class?: string[];
  league?: string;
  club?: string;
  nation?: string;
  team?: string;
  trait?: string[];
  ig_trait?: string[];
  attr?: string[];
  attr_value?: AttrValue[];
  lfoot?: string;
  rfoot?: string;
  month?: string;
  day?: string;
  build?: [];
  skill?: string;
  fame?: string;
  sort?: string;
  col1?: "sprintspeed";
  col2?: "stamina";
  col3?: "strength";
  q?: "h";
}

export interface FFAddictPlayer {
  uid?: string;
  pos1?: string;
  pos1val?: number;
  team_id?: string;
  team_name?: string;
  nation_squad_id?: string;
  nation_squad_name?: string;
  liveperfamount?: string;
  update_statchange?: string;
  all_statchange?: string;
  name?: string;
  pos?: string;
  year?: string;
  skill_level?: string;
  pricekr?: number;
  attrA?: number;
  attrB?: number;
  attrC?: number;
  year_short?: string;
}

export interface FFAddictResponse {
  db?: FFAddictPlayer[];
  meta?: {
    title?: string;
    desc?: string;
  };
}
