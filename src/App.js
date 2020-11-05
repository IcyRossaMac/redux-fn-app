import React, {useCallback, useState, useEffect} from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import './App.css';
import {Article} from "./components/Article";
import {AddArticle} from "./components/AddArticle";
import {addArticle, removeArticle, sendEditArticle} from "./store/actionCreator";

const App = () => {
    const articles = useSelector(
        (state) => state.articles, shallowEqual // EACH member would cause a re-render, 'shallowEqual' prevents this
    )

    const mode = useSelector(state => state.mode)

    const counter = useSelector(state => state.counter)

    const [count, setCount] = useState(99)

    const dispatch = useDispatch()

    useEffect(() => {
        // update the document title
        document.title = `state count is ${count}`
    }, [count]) // only update if count changes

    const saveArticle = useCallback(
        (article) => dispatch(addArticle(article), [dispatch])
    )

    const editArticle = useCallback(
        (article) => dispatch(editArticle(article), [dispatch])
    )

    let conditional_content
    if (mode === 'edit') {
        conditional_content = <p>Edit Mode</p>
    } else {
        conditional_content = <p>Add Mode</p>
    }

    return (
        <main className="App">
            <h1>Managing Articles with React & Redux</h1>
            {conditional_content}
            <h3>Counter value is currently {counter} and Count is {count}</h3>
            <button onClick={() => setCount(count + 1)}>
                Increase State Count by 1
            </button>
            <AddArticle saveArticle={saveArticle}/>
            {articles.map((article) => (
                <Article
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle}
                />
            ))}
        </main>
    );
}

export default App;
