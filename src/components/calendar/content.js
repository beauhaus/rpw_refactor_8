import React, { useState, useEffect, useRef } from 'react'
import Locky from "react-locky";

import contentStyles from './content.module.scss';

const Content = ({ previewDate }) => {

    return (
        <Locky enabled={false} >

            <ul className={contentStyles.list}>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>List Item 2</p>
                    <p>List Item 3</p>
                </li>
                <li>
                    <p>P Item 1</p>
                    <p>P Item 2</p>
                    <p>P Item 3</p>
                </li>
            </ul>
        </Locky>
    )
};

export default Content;