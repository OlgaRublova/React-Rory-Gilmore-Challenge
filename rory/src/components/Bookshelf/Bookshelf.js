import React, {Component} from 'react';
import GenresButtons from "../Buttons/GenresButtons/GenresButtons";
import Books from "./Books/Books";
import data from '../../database.json';


const booksList = data.books;


export default class Bookshelf extends Component {
    state = {
        answer: ['yes', 'no']
    }


    render() {
        return (
            <div className="book-shelf">
                {/*<UserAnswer answer = 'yes'></UserAnswer>*/}
                {/*<UserAnswer answer = 'no'></UserAnswer>*/}
                <GenresButtons/>
                <div id="books-container">
                    <Books booksList={booksList}/>
                </div>

            </div>
        )
    }
}




