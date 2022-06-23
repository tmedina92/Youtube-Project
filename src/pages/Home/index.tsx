import {
  At,
  Bell,
  CaretDown,
  CaretUp,
  Clock,
  ClockCounterClockwise,
  Compass,
  DotsNine,
  House,
  Keyboard,
  List,
  MagnifyingGlass,
  Microphone,
  MonitorPlay,
  Play,
  PlayCircle,
  Queue,
  ThumbsUp,
  UploadSimple,
} from "phosphor-react";
import { useState } from "react";
import logo from "../../assets/youtubeLogo.svg";
import "./styles.scss";

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(true);
  const [isInscriptionListOpen, setIsInscriptionListOpen] = useState(true);

  function closeMenu() {
    // if (isMenuOpen === true) {
    //  return setIsMenuOpen(false);
    // }
    // if (isMenuOpen === false) {
    //  return setIsMenuOpen(true);
    // }
    setIsMenuOpen(!isMenuOpen);
  }

  function closePlaylist() {
    setIsPlaylistOpen(!isPlaylistOpen);
  }

  function closeInscriptionList() {
    setIsInscriptionListOpen(!isInscriptionListOpen);
  }

  return (
    <>
      <header className="header">
        <div className="logoContainer">
          <button className="menuButton" onClick={() => closeMenu()}>
            {" "}
            <List size={24} />{" "}
          </button>
          <img className="logoImg" src={logo} />
        </div>
        <div className="inputContainer">
          <input type="text" placeholder="Pesquisar" />
          <button className="keyButton">
            {" "}
            <Keyboard size={24} />{" "}
          </button>
          <button className="searchButton">
            {" "}
            <MagnifyingGlass size={20} />{" "}
          </button>
          <button className="voiceButton">
            {" "}
            <Microphone size={24} />{" "}
          </button>
        </div>
        <div className="userContainer">
          <button>
            {" "}
            <UploadSimple size={24} />{" "}
          </button>
          <button>
            {" "}
            <DotsNine size={24} />{" "}
          </button>
          <button>
            {" "}
            <Bell size={24} />{" "}
          </button>
          <img
            className="userImg"
            src="https://avatars.githubusercontent.com/u/94133870?v=4"
          />
        </div>
      </header>
      <div className="body">
        <aside className={`${isMenuOpen || "menuClose"} menu `}>
           <div className="mainAsideMenu">
            <a href="/"> <House size={24} /> Início</a>
            <a href="#"> <Compass size={24} /> Explorar</a>
            <a href="#"> <At size={24} /> Shorts</a>
            <a href="#"> <PlayCircle size={24} /> Inscrições</a>
           </div>
           <div className="subAsideMenu" >
            <a href="#"><MonitorPlay size={24} /> Biblioteca</a>
            <a href="#"><ClockCounterClockwise size={24} /> Histórico</a>
            <a href="#"><Play size={24} /> Seus Vídeos</a>
            <a href="#"><Clock size={24} /> Assistir mais tarde</a>
            <a href="#"><ThumbsUp size={30} /> Vídeos marcados como "Gostei"</a>
            <div className="showMore">
              <button onClick={() => closePlaylist()} className={`${isPlaylistOpen || "dontShowButton"} showMoreButton `}><CaretDown size={24} /> Mostrar mais</button>
              <button onClick={() => closePlaylist()} className={`${!isPlaylistOpen || "dontShowButton"} showLessButton `}><CaretUp size={24} /> Mostrar menos</button>
              <a className={`${isPlaylistOpen || "playlistClose"} playlist `} href="#"><Queue size={24} /> Minha playlist</a>
            </div>
           </div>
           <div className="inscriptions" >
            <p className="inscriptionsTitle">INSCRIÇÕES</p>
            <div className="Channel">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
              <p className="ChannelText">canal 1</p>
            </div>
            <div className="Channel">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
              <p className="ChannelText">canal 2</p>
            </div>
            <div className="Channel">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
              <p className="ChannelText">canal 3</p>
            </div>
            <div className="Channel">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
              <p className="ChannelText">canal 4</p>
            </div>

            <div className="showMoreInscriptions">
              <button 
                onClick={() => closeInscriptionList()} 
                className={`${isInscriptionListOpen || "dontShowInscriptionButton"} showMoreInscriptionsButton `} > <CaretDown size={24}/> Mostrar mais</button>
              <button 
                onClick={() => closeInscriptionList()} 
                className={`${!isInscriptionListOpen || "dontShowInscriptionButton"} showLessInscriptionsButton `} > <CaretUp size={24} /> Mostrar menos</button>
              <div className={`${isInscriptionListOpen || "inscriptionListClose"} inscriptionList `}>
                <div className="Channel">
                  <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
                  <p className="ChannelText">canal 5</p>
                </div>
                <div className="Channel">
                  <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" />
                  <p className="ChannelText">canal 6</p>
                </div>
              </div>
            </div>
           </div>
           <div className="youtubeMenu" >

           </div>
           <div className="youtubeSettings" >

           </div>
           <footer>

           </footer>
        </aside>
        <main className="content">
          <div className="contentHeader">ola mundo</div>
        </main>
      </div>
    </>
  );
}
