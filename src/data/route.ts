export enum RouteNamesEnum {
  ABOUT = "/about",
  SERVICES = "/services",
  PORTFOLIO = "/portfolio",
  CONTACTS = "/contacts",
}

export const routeTitles: { [key in RouteNamesEnum]: string } = {
  [RouteNamesEnum.ABOUT]: "About us",
  [RouteNamesEnum.SERVICES]: "Services",
  [RouteNamesEnum.PORTFOLIO]: "Portfolio",
  [RouteNamesEnum.CONTACTS]: "Contact us",
};

export const routeNamesArray = Object.values(RouteNamesEnum);
