import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import CreateBot from "./CreateBot/CreateBot";
import StatsBlock from "./StatsBlock/StatsBlock";
import Bot from "./Bot/Bot";

import particles from '../../img/dashboard/particles.svg'

import s from "./Dashboard.module.css";

const Dashboard: React.FC = (): JSX.Element => {

  let userName: string = 'gl1st0ed'

  let today: any = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = dd + '.' + mm + '.' + yyyy;

  return (
      <div className={s.wrapper}>
        <Sidebar />
        <div className={s.bots__content}>
          <div className={s.main__hat}>
            <img src={particles} alt="" />
          </div>
          <div className={s.bots__list}>
            <CreateBot />
            <Bot 
            botName = "gl1st0ed's bot"
            botNickname = "gl1st0ed's_bot"
            avatarUrl='https://images.genius.com/907f4f9e3b20f1191d9cf656fc95d0a9.640x640x1.jpg'
            isWorking/>
            <Bot 
            botName = "Nivea's bot"
            botNickname = "nivea_bot"
            avatarUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nivea_logo.svg/2048px-Nivea_logo.svg.png'
            isWorking/>
            <Bot 
            botName = "Apple"
            botNickname = "apple_bot"
            avatarUrl='https://media-exp3.licdn.com/dms/image/C560BAQHdAaarsO-eyA/company-logo_200_200/0/1595530301220?e=2159024400&v=beta&t=IJmg_K1W7KCh6082rXN9V7gzlrD9GMwYqk_EjCrDxGw'
            isWorking/>
            <Bot 
            botName = "Alex's bot"
            botNickname = "alexgay_bot"
            isWorking />
            <Bot 
            botName = "BOTFactory's bot"
            botNickname = "botfactoryltd"
            isWorking/>
            <Bot 
            botName = "Scally Milano"
            botNickname = "scallymilano"
            avatarUrl='https://sun1-54.userapi.com/s/v1/ig2/xz5ombxkMkd3aVeBFgTHNyTyA18ZhXJ3UzoG-Ha23hzCODgdkswI3TU2EdlGaZtMS8EQka7tUjQGgQuQ3HRg2S6j.jpg?size=200x0&quality=96&crop=0,0,1472,1472&ava=1'
            isWorking/>
            <Bot 
            botName = "BuyGemsBS"
            botNickname = "bshop_bot"
            avatarUrl='https://i.pinimg.com/originals/b6/27/3a/b6273a5a4bafad4b548eb9be9c6a90b4.jpg'
            isWorking/>
          </div>
          <div className={s.bots__otherinfo}>
            <div className={s.title}>
              Добро пожаловать, {userName}!
            </div>
            <div className={s.subtitle}>
              Статистика за {today}
            </div>
            <div className={s.stats__blocks}>
              <StatsBlock type='sales' count={31} botsCount={1}/>
              <StatsBlock type='sales' count={100} botsCount={3}/>
              <StatsBlock type='messages' count={6000} botsCount={10}/>
              <StatsBlock type='balance' count={500}/>
            </div>
          </div>
        </div>
        <Sidebar device={'mobile'}/>
      </div>
  );
};

export default Dashboard;
