import stars from '../images/stars.png'

export const darkTheme = {

  //Universal
  textColor: "white",
  everyBackground: "#16213E",
  hyperLink: '#d4bce8',

  //Navbar
  navbarBackground: "#16213E",
  backgroundImage: stars,

  //Homepage
  circleColor: '#514065',
  nameHoverColor: '#d4bce8', 
  homeBackgroundImage: stars,

  //Aboutpage
  
  backgroundPhoto: '#514065',
  filterImages: 'invert(100%)',
  hooverfilterImages: '',

  //Projectpage
  projectDiv: '#514065',

  //Chesspage
  chessDiv: '#514065',
  chessTabBorder: '1px solid #d4bce8',
  chessCurrentTab:'#514065',
  chessTabTextColor: 'white',
  chessTab:'#3d304c',
  chessFavGameBorder: '1px solid #d4bce8',
  chessFav: "https://lichess.org/embed/yHOicQND?theme=purple-diag&bg=dark",

  //HomeV1
  stickman: 'white',

  //HomeV2 V3
  homeshadow: '',

  //AboutPhotos
  aboutPhotosWrapper: '#514065'


}

export const lightTheme = {

  //Universal
  textColor: "black",
  everyBackground: "white",
  hyperLink: '#004495',

  //Navbar
  navbarBackground: "linear-gradient(27deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 94%, rgba(198,255,255,1) 100%)",
  backgroundImage: "linear-gradient(27deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 94%, rgba(198,255,255,1) 100%)",
  homeBackgroundImage: "white",

  //Homepage
  circleColor: '#C6FFFF',
  nameHoverColor: '#004495', 

  //Aboutpage
  
  backgroundPhoto: 'rgba(198, 255, 255, 0.6)',
  filterImages: 'grayscale(70%)',
  hooverfilterImages: 'grayscale(0%)',

  //Projectpage
  projectDiv: 'rgba(198, 255, 255, 0.7)',

  //Chesspage
  chessDiv: 'rgba(198, 255, 255, 0.7)',
  chessTabBorder: '1px solid #004495',
  chessCurrentTab:'white',
  chessTabTextColor: 'black',
  chessTab:'rgba(198, 255, 255, 0.7)',
  chessFavGameBorder: '1px solid #004495;',
  chessFav: "https://lichess.org/embed/yHOicQND?theme=blue&bg=light",

  //HomeV1
  stickman: 'black',

  //HomeV2 V3
  homeshadow: '26px 26px 52px #a8a8a8, -26px -26px 52px #f7f7f7',

  //AboutPhotos
  aboutPhotosWrapper: 'rgba(198, 255, 255, 0.6)'

  
}