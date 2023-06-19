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
  year?: number;
  name?: string;
  name_short?: string;
  height?: number;
  weight?: number;
  birthdate?: string;
  age?: number;
  number?: number;
  league_id?: number;
  league_name?: string;
  team_id?: number;
  team_name?: string;
  nation_squad_id?: number;
  nation_squad_name?: string;
  nation_id?: number;
  pos1?: string;
  pos2?: string;
  pos1val?: number;
  pos2val?: number;
  foot_pref?: string;
  foot_weak?: string;
  salary?: number;
  salary_kr?: string;
  allstat?: number;
  workrate_def?: string;
  workrate_att?: string;
  skill_level?: number;
  liveperf?: number;
  liveperfamount?: number;
  lp?: number;
  pricekr?: number;
  update_statchange?: number;
  all_statchange?: number;
  team_slug?: string;
  league_slug?: string;
  nation_name?: string;
  bodytype_name?: string;
  attrgroup?: {
    labels?: string[];
    data?: number[];
  };
  season_full?: string;
  season_name?: string;
  postlist?: Record<
    string,
    {
      name?: string;
      text?: string;
      value?: number;
      rec_direction?: string;
    }
  >;
  post_current?: string;
  reputation?: string;
  clubcarrer?:
    | Record<
        string,
        {
          year?: string;
          loan?: boolean;
          teamname?: string;
          teamlink?: string;
          teamcolor?: boolean;
        }
      >
    | boolean;
}

export interface FFAddictID {
  uid?: string;
  name?: string;
}

export interface FFAddictIdsResponse {
  db?: FFAddictPlayer[];
  meta?: {
    title?: string;
    desc?: string;
  };
}

export interface FFAddictPlayerAttributeItem {
  name?: string;
  value?: number;
}

export interface FFAddictPlayerAttribute {
  sprintspeed: FFAddictPlayerAttributeItem;
  acceleration: FFAddictPlayerAttributeItem;
  finishing: FFAddictPlayerAttributeItem;
  shotpower: FFAddictPlayerAttributeItem;
  longshots: FFAddictPlayerAttributeItem;
  positioning: FFAddictPlayerAttributeItem;
  volleys: FFAddictPlayerAttributeItem;
  penalties: FFAddictPlayerAttributeItem;
  shortpassing: FFAddictPlayerAttributeItem;
  vision: FFAddictPlayerAttributeItem;
  crossing: FFAddictPlayerAttributeItem;
  longpassing: FFAddictPlayerAttributeItem;
  freekickaccuracy: FFAddictPlayerAttributeItem;
  curve: FFAddictPlayerAttributeItem;
  dribbling: FFAddictPlayerAttributeItem;
  ballcontrol: FFAddictPlayerAttributeItem;
  agility: FFAddictPlayerAttributeItem;
  balance: FFAddictPlayerAttributeItem;
  reactions: FFAddictPlayerAttributeItem;
  marking: FFAddictPlayerAttributeItem;
  standingtackle: FFAddictPlayerAttributeItem;
  interceptions: FFAddictPlayerAttributeItem;
  headingaccuracy: FFAddictPlayerAttributeItem;
  slidingtackle: FFAddictPlayerAttributeItem;
  strength: FFAddictPlayerAttributeItem;
  stamina: FFAddictPlayerAttributeItem;
  aggression: FFAddictPlayerAttributeItem;
  jumping: FFAddictPlayerAttributeItem;
  composure: FFAddictPlayerAttributeItem;
  gkdiving: FFAddictPlayerAttributeItem;
  gkhandling: FFAddictPlayerAttributeItem;
  gkkicking: FFAddictPlayerAttributeItem;
  gkreflexes: FFAddictPlayerAttributeItem;
  gkpositioning: FFAddictPlayerAttributeItem;
}
export interface FFAddictPlayerDetail {
  dbrelate?: FFAddictPlayer[];
  attr?: FFAddictPlayerAttribute;
  traits?: Record<string, { id?: string; name?: string; desc?: string }>;
  db?: FFAddictPlayer;
  pre?: FFAddictPlayer;
  meta?: {
    title?: string;
    desc?: string;
  };
}

export interface FFAddictDetailDB {
  uid?: string;
  detail?: string;
  created_date?: Date;
}
