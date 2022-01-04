import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import './style.css';

export const CreateTextPage = () => {
    const stringParams = window.location.search;
    const params = queryString.parse(stringParams);
    const [value, setValue] = React.useState(params.value || '');

    console.log('params', params);

    React.useEffect(() => {
        const el = document.getElementById('textarea');

        if (el) {
            el.focus();
        }
    })

    return (
        <div className="text-view-page">
            <div className="wrapper">
                <div
                    id="textarea"
                    className={cx('textarea', { edit: !params.view })}
                    onInput={(e) => {
                        setValue(e.currentTarget.innerText);
                    }}
                    onBlur={(e) => {
                        setValue(e.currentTarget.innerText);
                    }}
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: params.value }}
                />
            </div>
            {params.view ? (
                <Link className="edit-link" to={`/qrme/create/${params.type}?${queryString.stringify({
                    ...params,
                    view: '',
                })}`}>Редактировать</Link>
            ) : (
                <Link className="edit-link create" to={`/qrme/?${
                    queryString.stringify({
                        ...params,
                        value,
                    })
                }`}>Создать QRcode</Link>
            )}
        </div>
    );
}
