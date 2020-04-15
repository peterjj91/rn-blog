export interface INavigation {
  navigation: {
    navigate: Function;
    push: Function;
    getParam: Function;
    setOptions: Function;
  };
  route: {
    params: {
      postId: string;
      date: string;
      title: string;
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
