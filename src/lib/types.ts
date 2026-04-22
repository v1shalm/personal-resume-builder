export type ID = string;

export type Contact = {
  id: ID;
  label: string;
  value: string;
  href?: string;
};

export type Bullet = {
  id: ID;
  text: string;
};

export type ExperienceItem = {
  id: ID;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: Bullet[];
};

export type SkillGroup = {
  id: ID;
  label: string;
  items: string;
};

export type EducationItem = {
  id: ID;
  degree: string;
  field: string;
  institution: string;
  year: string;
};

export type LinkItem = {
  id: ID;
  label: string;
  url: string;
};

export type SectionKind = "experience" | "skills" | "education" | "links";

export type SectionMeta = {
  id: SectionKind;
  title: string;
  visible: boolean;
};

export type Header = {
  name: string;
  title: string;
  tagline: string;
  contacts: Contact[];
};

export type Style = {
  titleFontId: string;
  bodyFontId: string;
  accentColor: string; // hex like #23316d — used for the name heading
  nameFontWeight: number; // 400–800
  nameLetterSpacing: number; // em units, e.g. -0.024
  bodyLineHeight: number; // unitless, e.g. 1.55
};

export type Resume = {
  header: Header;
  sectionOrder: SectionKind[];
  sections: Record<SectionKind, SectionMeta>;
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  education: EducationItem[];
  links: LinkItem[];
  style: Style;
};

export type EditorSelection =
  | { kind: "header" }
  | { kind: "section"; id: SectionKind }
  | { kind: "experience"; id: ID }
  | { kind: "skillGroup"; id: ID }
  | { kind: "education"; id: ID }
  | { kind: "link"; id: ID };
