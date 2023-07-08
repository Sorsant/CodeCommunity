import style from './Loading.module.css';

const Loading = () => {
    return (
        <div className={style.loader_container}>
            <div className={style.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
}

export default Loading;
