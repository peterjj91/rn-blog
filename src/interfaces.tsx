export interface INavigation {
  navigation: {
    navigate: Function;
    push: Function;
    getParam: Function;
    setOptions: Function;
    openDrawer: Function;
  };
  route: {
    params: {
      postId: string;
      date: string;
      title: string;
      booked: boolean;
    };
  };
}

export interface IPostItem {
  id: string;
  img: string;
  text: string;
  date: string;
  booked: boolean;
}

export interface IIconWithBadge {
  name: string;
  badgeCount: number;
  color: string;
  size: number;
}
