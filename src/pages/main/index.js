import React from 'react';
import queryString from 'query-string';
import { QRious } from 'react-qrious';
import './style.css';
import { Link, Navigate } from 'react-router-dom';

const isDev = true;

export const MainPage = () => {
    const stringParams = window.location.search;
    const params = queryString.parse(stringParams);

    console.log('params.value', params.value);

    if (!params.type || !params.value) {
        return <Navigate to="/create/text?type=text" />;
    }

    return (
        <div className="main-page">
            <div className="wrapper">
                <QRious
                    value={`${window.location.origin}/create/${params.type}?${queryString.stringify({
                        ...params,
                        view: 1,
                    })}`}
                    size={window.innerWidth - 60}
                />
            </div>
            <Link className="edit-link" to={`/create/${params.type}${stringParams}`}>Редактировать</Link>
        </div>
    );
}
