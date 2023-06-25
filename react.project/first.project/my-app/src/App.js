import "./App.css";

const App = () => {
  const onClick = () => {
    window.location.href = "#hey";
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-8 col-md-12 col-lg-8 col-xl-12">
          <h1 id="hey" class="welcome">
            Welcome to
            <a href="#hey" aria-hidden="true">
        </a>
          </h1>
        </div>
        <div className="col-xs-12 col-md-12 col-lg-4">
          <h1 id="hey" className="ART">ART
        </h1>
        </div>
        <div className="picture">
          <div className="row">
            <div className="col-xs-6 col-md-12 col-lg-12 col-xl-12">
              <img
                className="girl"
                src={require("./art.pictures/pearl.png")}
                alt="девушка с жемчужной сережкой"
              />
              <img
                className="van"
                src={require("./art.pictures/van.png")}
                alt="подсолнухи"
              />
              <img
                src={require("./art.pictures/black.png")}
                alt="черный квадрат"
                className="black element-animation"
              />
              <img
                src={require("./art.pictures/kiss.png")}
                alt="Климт Поцелуй"
                className="kiss"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-8 col-md-12 col-lg-12">
            <div class="text">
              <span class="animation-text">
                Основы мировой культуры в одном месте
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">ПЕРВОБЫТНОСТЬ</h2>
        <p class="data">2.5 миллиона лет до н. э. - 800 г. до н. э.</p>
        <button
          class="btn"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures//biki 1.png")}
            alt="быки пещеры Альтамира"
            class="element-animation picture"
          />
          <figcaption>Быки пещеры Альтамира</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">АНТИЧНОСТЬ</h2>
        <p class="data">800 г. до н. э. - 450 г. н. э.</p>
        <button
          type="button"
          class="btn"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/Rectangle 5.png")}
            alt="Зал древнегреческой скульптуры. Пушкинский музей."
            class="element-animation picture"
          />
          <figcaption>
            Зал древнегреческой скульптуры. Пушкинский музей
          </figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">СРЕДНЕВЕКОВЬЕ</h2>
        <p class="data">450 - 1450 годы</p>
        <button
          type="button"
          class="btn"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/trip 1.png")}
            alt="Ян Ван Эйк. Дрезденский триптих"
            class="element-animation picture"
          />
          <figcaption>Ян Ван Эйк. Дрезденский триптих</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">РЕНЕССАНС</h2>
        <p class="data">1400 - 1530 годы</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/Giuseppe_Arcimboldo Spring 1.png")}
            alt="Джузеппе Арчимбольдо «Весна»"
            class="element-animation picture"
          />
          <figcaption>«Весна» Джузеппе Арчимбольдо</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">БАРОККО</h2>
        <p class="data">1600 - 1700 годы</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/scale_1200 1.png")}
            alt="Лютнист Караваджо"
            class="element-animation picture"
          />
          <figcaption>"Лютнист" Караваджо</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">КЛАССИЦИЗМ</h2>
        <p class="data">ХVII - начало ХIХ века</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/kazanskiy sobor 1.png")}
            alt="Казанский кафедральный собор"
            class="element-animation picture"
          />
          <figcaption>Казанский кафедральный собор</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">РОМАНТИЗМ</h2>
        <p class="data">Первая четверть ХIХ века</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/levitan 1.png")}
            alt="«Над вечным покоем» Исаак Левитан"
            class="element-animation picture"
          />
          <figcaption>«Над вечным покоем» Исаак Левитан</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">ИМПРЕССИОНИЗМ</h2>
        <p class="data">Последняя треть ХIХ - начало ХХ века</p>
        <button
        type="button"
        class="btn btn-secondary"
        onClick={ () => { alert('Да, пока не работает, скоро будет!') } }>
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/bar mane 1.png")}
            alt="«Бар в Фоли-Бержер» Мане"
            class="element-animation picture"
          />
          <figcaption>«Бар в Фоли-Бержер» Мане</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">ПОСТИМПРЕССИОНИЗМ</h2>
        <p class="data">ХХ век</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/pole van 1.png")}
            alt="Пшеничное поле с кипарисом Винсент Ван Гог "
            class="element-animation picture"
          />
          <figcaption>"Пшеничное поле с кипарисом" Винсент Ван Гог</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">МОДЕРН</h2>
        <p class="data">Конец ХIХ - начало ХХ века</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/klimt 1.png")}
            alt="Густав Климт Даная"
            class="element-animation picture"
          />
          <figcaption>Густав Климт "Даная"</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">ЭКСПРЕССИОНИЗМ</h2>
        <p class="data">Первые десятилетия ХХ века</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/solntse-1916 1.png")}
            alt="«Солнце» Эдвард Мунк"
            class="element-animation picture"
          />
          <figcaption>«Солнце» Эдвард Мунк</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">АБСТРАКЦИОНИЗМ</h2>
        <p class="data">Начало ХХ века</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/pit-mondrian 1.png")}
            alt="Композиция с сеткой. Шахматная композиция со светлыми цветами Пит Мондриан"
            class="element-animation picture"
          />
          <figcaption>
            Композиция с сеткой. Шахматная композиция со светлыми цветами. Пит
            Мондриан
          </figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">СЮРРЕАЛИЗМ</h2>
        <p class="data">1920-1960 годы</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/dali 1.png")}
            alt="Сальвадор Дали - Постоянство памяти"
            class="element-animation picture"
          />
          <figcaption>Сальвадор Дали - Постоянство памяти</figcaption>
        </figure>
      </div>
      <div class="container-fluid">
        <h2 class="header_item element-animation">ПОП-АРТ</h2>
        <p class="data">с начала 1950-х</p>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={ () => { alert('Да, пока не работает, скоро будет!') } }
        >
          Узнать больше
        </button>
        <figure>
          <img
            src={require("./art.pictures/takashi 1.png")}
            alt="Такаси Мураками. Кайкай и Кики."
            class="element-animation picture"
          />
          <figcaption>Такаси Мураками. Кайкай и Кики</figcaption>
        </figure>
      </div>
      <div>
      <button class="lastbtn" onClick={onClick}>Еще разочек</button>
      </div>
    </div>
  );
};

export default App;
