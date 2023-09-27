import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    if (language.startsWith("es")) {
        return { locale: "es-ES", messages: localeEsMessages };
    } else {
        return { locale: "en-US", messages: localeEnMessages };
    }
}

const languageConfig = getBrowserLanguage();

ReactDOM.render(
    <IntlProvider locale={languageConfig.locale} messages={languageConfig.messages}>
        <JobsList />
    </IntlProvider>,
    document.getElementById('root')
);