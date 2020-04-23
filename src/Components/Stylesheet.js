import React from 'react';
import './myStyles.css'
import styles from './myStyles.module.css';
function Stylesheet(props) {
    const { primary } = props;
    let className = primary ? 'primary' : '';
    return (
        <div>
        <hr />
            <h1 className = { `${ className } font-xl` }>Stylesheets</h1>
            <h1 className = "error">Error</h1>
            <h1 className = { styles.success}></h1>
        </div>
    )
}

export default Stylesheet
