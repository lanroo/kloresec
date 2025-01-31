declare module "cyberwave-theme" {
  export interface CyberwaveTheme {
    background: string;
    text: string;
    keyword: string;
    function: string;
    number: string;
    string: string;
    comment: string;
    operator: string;
  }

  const theme: CyberwaveTheme;
  export default theme;
}
