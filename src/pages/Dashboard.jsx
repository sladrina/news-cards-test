import React, { Component } from 'react';
import NewsCard from '../components/NewsCard'
import Button from "../components/Button";

export default class Dashboard extends Component {
    render() {
        return(
        <div className="news-page">
            <div className="news-wrap grid-container">
                    <NewsCard
                        authorName={'JewelJul'}
                        className={'bigOne'}
                        chosen={true}
                        day={24}
                        month={'мая'}
                        time={'19:30'}
                        city={'Москва'}
                        category={'Лекции и экскурсии'}
                        title={'Pioner Talks: Разложение лирического героя. Случай Елизарова'}
                    />
                    <NewsCard
                        authorName={'KontikT'}
                        className={'first'}
                        day={4}
                        month={'мая'}
                        time={'01:00'}
                        online={true}
                        category={'Лекции и экскурсии'}
                        title={'Совместные чтения пьес. Апрель 2019'}
                    />
                    <NewsCard
                    authorName={'info'}
                    className={'second'}
                    day={5}
                    month={'мая'}
                    time={'13:00'}
                    city={'Иркутск'}
                    category={'Встречи с авторами'}
                    title={'Апрельско-майская (35-я) встреча Иркутского клуба «Книжные нерпы»'}
                    />
                    <NewsCard
                    authorName={'Центрполиграф'}
                    className={'third'}
                    text={'Пешеходная экскурсия «Ильф, Петров и одесситы...»'}
                    day={7}
                    month={'мая'}
                    time={'13:00'}
                    city={'Санкт-Петербург'}
                    category={'Встречи с авторами'}
                    />
                    <NewsCard
                    authorName={'info'}
                    className={'forth'}
                    day={15}
                    month={'мая'}
                    time={'13:00'}
                    city={'Иркутск'}
                    category={'Встречи с авторами'}
                    title={'Выходной в Переделкине'}
                    />
            </div>
            <Button btnText={'Показать еще'} className={'_blue'} />
        </div>
        )
    }
}
