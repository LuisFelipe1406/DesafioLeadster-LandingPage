'use client';

import Styles from "../../styles/main.module.scss"
import MyHeader from "./components/myHeader/myHeader"
import MyTopBanner from "./components/myTopBanner/MyTopBanner"
import MyButton from "./components/myButton/MyButton"
import React, { useState } from "react";

function Home() {
    // List of buttons above videos section
    const [ menuButtons, setMenuButtons ] = useState([
        {
          title: "Agências",
          selected: false,
        },
        {
          title: "Chatbot",
          selected: false,
        },
        {
          title: "Marketing Digital",
          selected: false,
        },
        {
          title: "Geração de Leads",
          selected: false,
        },
        {
          title: "Mídia Paga",
          selected: false,
        }
    ]);

    // To change the button selected
    function buttonPressed(button: number) {
        const auxButtons = [...menuButtons];

        auxButtons.forEach((element, index) => {
            element.selected = false;

            if (index == button) {
                element.selected = true;
            }
        });

        setMenuButtons(auxButtons);
    }

    return (
      <div>
          <MyHeader />
          <MyTopBanner />
          <section className={Styles.selectors}>
              <section className={Styles.buttons}>
                  { menuButtons.map((button: { title: String; selected: boolean; }, index: number) => (
                      <MyButton 
                          key={ index }
                          title={ button.title }
                          selected={ button.selected }
                          action={ () => buttonPressed(index) }
                      />
                  )) }
              </section>
              <section>
                  <span><strong>Ordenar por</strong></span>
                  <select className={Styles.select}>
                    <option value="1">Data de Publicação</option>
                    <option value="2">Título</option>
                    <option value="3">Avaliações</option>
                  </select>
              </section>
          </section>
      </div>
    )
}

export default Home;