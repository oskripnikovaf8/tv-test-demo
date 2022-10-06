(self["webpackChunk_1tv_test"] = self["webpackChunk_1tv_test"] || []).push([[179],{

/***/ 911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_Application)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js
var react_hot_loader_production_min = __webpack_require__(209);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(655);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(250);
// EXTERNAL MODULE: ./node_modules/react-paginate/dist/react-paginate.js
var react_paginate = __webpack_require__(358);
var react_paginate_default = /*#__PURE__*/__webpack_require__.n(react_paginate);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/components/video-card/video-card.tsx



const VideoCard = ({ id, image, title, description, text, }) => {
    return (react.createElement("div", { className: "video-card" },
        react.createElement("div", { className: "video-card__media" },
            react.createElement("img", { src: image, alt: title, className: "video-card__img", width: "488", height: "255" }),
            react.createElement("div", { className: "video-card__hover-content" },
                react.createElement("div", { className: "video-card__hover-content-inner" },
                    react.createElement("div", { className: "video-card__hover-text" }, text),
                    react.createElement(dist/* Link */.rU, { to: `/video/${id}`, className: "video-card__btn" }, "\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C")))),
        react.createElement("div", null,
            react.createElement("h2", { className: "video-card__title" },
                title,
                react.createElement("span", { className: "video-card__description" }, description)))));
};

;// CONCATENATED MODULE: ./src/components/check-mobile/useCheckMobileScreen.ts

const useCheckMobileScreen = () => {
    const [width, setWidth] = (0,react.useState)(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    (0,react.useEffect)(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    return (width <= 743);
};

;// CONCATENATED MODULE: ./src/components/loading-spinner/loading-spinner.tsx


const LoadingSpinner = () => {
    return (react.createElement("div", null,
        react.createElement("div", { className: "loading-spinner" },
            react.createElement("div", { className: "spinner-loader" }))));
};

;// CONCATENATED MODULE: ./src/components/video-list/video-list.tsx








const API_ENDPOINT = 'https://corsanywhere.herokuapp.com/https://fe-dev-offer.herokuapp.com/list';
const ITEMS_PER_PAGE = 6;
const VideoList = () => {
    const [data, setData] = (0,react.useState)([]);
    const [pageNumber, setPageNumber] = (0,react.useState)(0);
    const pagesVisited = pageNumber * ITEMS_PER_PAGE;
    const displayItems = data.slice(pagesVisited, pagesVisited + ITEMS_PER_PAGE);
    const [loading, setLoading] = (0,react.useState)(true);
    (0,react.useEffect)(() => {
        axios_default().get(API_ENDPOINT)
            .then(res => {
            setData(res.data);
            setLoading(false);
        })
            .catch((error) => {
            console.dir(error);
        });
    }, []);
    const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);
    const changePage = (item) => {
        setPageNumber(item.selected);
    };
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "grid-container" },
            react.createElement("div", { className: "grid-container__col1" },
                react.createElement("h1", null, "\u041D\u0430\u0448\u0438 \u0432\u0438\u0434\u0435\u043E"),
                loading && react.createElement(LoadingSpinner, null))),
        react.createElement("div", { className: "grid-container" },
            react.createElement("div", { className: "grid-container__col1" },
                react.createElement("div", { className: "video-list" },
                    useCheckMobileScreen() && (react.createElement(react.Fragment, null,
                        react.createElement("ul", { className: "video-list__grid" }, data.map((item) => (react.createElement("li", { key: `${item.id}`, className: "video-list__item" },
                            react.createElement(VideoCard, Object.assign({}, item)))))))),
                    !useCheckMobileScreen() && (react.createElement(react.Fragment, null,
                        react.createElement("ul", { className: "video-list__grid" }, displayItems.map((item) => (react.createElement("li", { key: `${item.id}`, className: "video-list__item" },
                            react.createElement(VideoCard, Object.assign({}, item)))))),
                        react.createElement((react_paginate_default()), { previousLabel: "<", nextLabel: ">", pageCount: pageCount, onPageChange: changePage, containerClassName: "pagination", pageClassName: "pagination__item", previousClassName: "pagination__arrow pagination__arrow-prev", nextClassName: "pagination__arrow pagination__arrow-next", disabledClassName: "is-disabled", activeClassName: "is-active" }))))),
            react.createElement("div", { className: "grid-container__col2" },
                react.createElement("div", { className: "banner" },
                    react.createElement("a", { href: "#", title: "\u0412\u0441\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0438 \u043B\u0443\u0447\u0448\u0438\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B" },
                        react.createElement("img", { src: "assets/images/banner2.png" })))))));
};

;// CONCATENATED MODULE: ./src/components/video-full-card/icons.tsx

const IconKinopoisk = () => {
    return (react.createElement("svg", { width: "104", height: "18", viewBox: "0 0 104 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react.createElement("path", { d: "M95.218 4.2V5.67L91.578 14H89.114L92.628 6.048H89.38V7.644H87.364V4.2H95.218ZM96.832 14.112C96.4494 14.112 96.1274 13.9813 95.866 13.72C95.6047 13.4587 95.474 13.132 95.474 12.74C95.474 12.3387 95.6047 12.0167 95.866 11.774C96.1274 11.522 96.4494 11.396 96.832 11.396C97.2147 11.396 97.5367 11.522 97.798 11.774C98.0594 12.0167 98.19 12.3387 98.19 12.74C98.19 13.132 98.0594 13.4587 97.798 13.72C97.5367 13.9813 97.2147 14.112 96.832 14.112ZM102.769 4.2V14H100.501V6.02H98.5414V4.2H102.769Z", fill: "#747587" }),
        react.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.3528 9.4997C28.3528 6.71878 29.7758 4.49414 32.3418 4.49414C34.9084 4.49414 36.3308 6.71878 36.3308 9.4997C36.3308 12.2811 34.9079 14.5053 32.3423 14.5053C29.7758 14.5053 28.3528 12.2811 28.3528 9.4997V9.4997ZM32.3418 13.1169C33.3399 13.1169 33.7648 11.4481 33.7648 9.50347C33.7648 7.55792 33.3366 5.89003 32.3418 5.89003C31.3471 5.89003 30.9189 7.55839 30.9189 9.50347C30.9155 11.4481 31.3437 13.1169 32.3418 13.1169ZM1.8512 4.63581V7.27836H1.99282L3.84402 4.63581H6.40671L2.98755 7.69297L3.12917 7.83133L9.39811 4.6325V6.85714L3.84065 8.80222V8.94011L9.39811 8.45467V10.5414L3.84065 10.056V10.1943L9.39811 12.1389V14.3641L3.12917 11.1648L2.98755 11.3031L6.40671 14.3603H3.84402L1.99282 11.7177H1.8512V14.3603H0V4.6292H1.8512V4.63581ZM11.1144 4.63581H13.536L13.3944 10.4739H13.536L16.3853 4.63581H18.5231V14.3674H16.102L16.2437 8.52881H16.102L13.2518 14.3678H11.114V4.63581H11.1144ZM22.6537 4.63581H20.2327V14.3674H22.6537V10.056H24.6466V14.3674H27.0676V4.63581H24.6466V8.39092H22.6537V4.63581V4.63581ZM44.451 4.63581H37.6156V14.3674H40.0371V6.30417H42.0299V14.3674H44.451V4.63581ZM45.7323 9.4997C45.7323 6.71878 47.1553 4.49414 49.7218 4.49414C52.2845 4.49414 53.7108 6.71878 53.7108 9.4997C53.7108 12.2811 52.2879 14.5053 49.7218 14.5053C47.1591 14.5053 45.7323 12.2811 45.7323 9.4997ZM49.7218 13.1169C50.7199 13.1169 51.1448 11.4481 51.1448 9.50347C51.1448 7.55792 50.7166 5.89003 49.7218 5.89003C48.7237 5.89003 48.2989 7.55839 48.2989 9.50347C48.2989 11.4481 48.7237 13.1169 49.7218 13.1169ZM57.4132 4.63581H54.9922V14.3674H57.13L59.9798 8.52881H60.1214L59.9798 14.3674H62.4008V4.63581H60.263L57.4132 10.4739H57.2716L57.4132 4.63581V4.63581ZM68.8148 11.0302L71.0942 11.3064C70.666 13.252 69.6713 14.5053 67.5469 14.5053C64.9842 14.5053 63.6856 12.2811 63.6856 9.4997C63.6856 6.71878 64.9809 4.49414 67.5469 4.49414C69.6265 4.49414 70.666 5.74506 71.0942 7.55178L68.8148 8.10758C68.6732 7.13339 68.2584 5.88342 67.5469 5.88342C66.6938 5.88342 66.2516 7.55178 66.2516 9.49639C66.2516 11.4278 66.6938 13.1098 67.5469 13.1098C68.2449 13.1169 68.6693 12.0044 68.8148 11.0302ZM74.5134 4.63628H72.2339V14.3674H74.5134V10.056H74.655L76.3646 14.3674H79L76.5062 9.36181L78.9273 4.63581H76.5062L74.655 8.9472H74.5134V4.63581V4.63628Z", fill: "#747587" })));
};
const IconArrow = () => {
    return (react.createElement("svg", { width: "14", height: "16", viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react.createElement("path", { d: "M2.3519 15.7524C1.36679 16.2858 0 15.9529 0 14.7971V1.25792C0 0.146661 1.45635 -0.331171 2.3519 0.246682L13.4394 7C14.1869 7.33333 14.1869 8.66667 13.4394 9L2.3519 15.7524Z", fill: "white" })));
};
const IconFlag = () => {
    return (react.createElement("svg", { width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react.createElement("path", { d: "M1 3C1 1.89543 1.89543 1 3 1H13.1176C14.2222 1 15.1176 1.89543 15.1176 3V17.1324C15.1176 18.7556 13.2861 19.7027 11.9616 18.7645L9.21486 16.8189C8.52224 16.3283 7.5954 16.3283 6.90279 16.8189L4.15604 18.7645C2.83152 19.7027 1 18.7556 1 17.1324V3Z", stroke: "white", strokeWidth: "1.5" })));
};
const IconHeart = () => {
    return (react.createElement("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react.createElement("path", { d: "M17.0715 0.734694C16.2656 0.272548 15.3348 0 14.3473 0C12.5993 0 11.0329 0.829493 10 2.13298C8.95573 0.829493 7.38933 0 5.64132 0C4.6538 0 3.72304 0.272548 2.91714 0.734694C1.18048 1.74194 0 3.67347 0 5.90125C0 6.54115 0.102157 7.14549 0.283768 7.71429C1.24858 12.2646 10 18 10 18C10 18 18.7401 12.2646 19.7162 7.71429C19.8978 7.14549 20 6.5293 20 5.90125C19.9886 3.67347 18.8082 1.74194 17.0715 0.734694Z", fill: "#188BF5" })));
};
const IconShare = () => {
    return (react.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react.createElement("path", { d: "M11.3636 2C11.3636 1.5853 11.6196 1.21363 12.007 1.06575C12.3945 0.91786 12.833 1.02445 13.1093 1.33367L20.7457 9.87912C21.0848 10.2586 21.0848 10.8323 20.7457 11.2118L13.1093 19.7572C12.833 20.0665 12.3945 20.173 12.007 20.0252C11.6196 19.8773 11.3636 19.5056 11.3636 19.0909L11.3636 15.0804C11.1692 15.0768 10.98 15.0726 10.7961 15.0685C10.3061 15.0576 9.85884 15.0476 9.43237 15.0497C8.58022 15.0538 7.86307 15.1064 7.18736 15.2765C5.88994 15.6032 4.56121 16.4101 2.77937 18.6266C2.51356 18.9572 2.06803 19.0841 1.66787 18.9432C1.2677 18.8023 0.999999 18.4242 0.999999 18C0.999999 14.55 2.1446 11.5449 4.16965 9.39405C5.9912 7.45936 8.482 6.26307 11.3636 6.03855L11.3636 2Z", stroke: "white", strokeWidth: "2", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" })));
};

;// CONCATENATED MODULE: ./src/components/video-full-card/video-full-card.tsx



const VideoFullCard = ({ title, image, genre, production, labels }) => {
    return (react.createElement("div", { className: "video-full-card" },
        react.createElement("div", { className: "video-full-card__media" },
            react.createElement("img", { src: image, alt: title, width: "232", height: "342" })),
        react.createElement("div", { className: "video-full-card__content" },
            react.createElement("div", { className: "video-full-card__content-wrapped" },
                react.createElement("h2", { className: "video-full-card__title" }, title),
                react.createElement("ul", { className: "video-full-card__labels" },
                    (labels === null || labels === void 0 ? void 0 : labels.fullhd) && (react.createElement("li", null, "full HD")),
                    (labels === null || labels === void 0 ? void 0 : labels.subtitles) && (react.createElement("li", null, "\u0421\u0423\u0411")),
                    (labels === null || labels === void 0 ? void 0 : labels.age_restrictions) && (react.createElement("li", null, labels === null || labels === void 0 ? void 0 : labels.age_restrictions))),
                react.createElement("ul", { className: "video-full-card__production" },
                    (production === null || production === void 0 ? void 0 : production.year) && (react.createElement("li", null, production === null || production === void 0 ? void 0 : production.year)),
                    react.createElement("li", null, genre === null || genre === void 0 ? void 0 :
                        genre.map((item) => {
                            return (`${item}, `);
                        }), production === null || production === void 0 ? void 0 :
                        production.country)),
                react.createElement(IconKinopoisk, null)),
            react.createElement("a", { href: "#", className: "btn btn--not-av mb-18" },
                react.createElement("span", null,
                    "C\u043C\u043E\u0442\u0440\u0435\u0442\u044C",
                    react.createElement("span", { className: "btn__add" }, "\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C 7 \u0434\u043D\u0435\u0439"))),
            react.createElement("a", { href: "#", className: "btn btn--spec btn--not-av mb-18" },
                react.createElement("span", null, "\u0421\u041C\u041E\u0422\u0420\u0415\u0422\u042C \u0437\u0430 1 \u20BD \u0431\u0435\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u044B")),
            react.createElement("div", { className: "video-full-card__btn-line" },
                react.createElement("a", { href: "#", className: "btn btn--dark btn--text-with-icon btn--not-av" },
                    react.createElement("span", null,
                        react.createElement(IconArrow, null),
                        "\u0422\u0420\u0415\u0419\u041B\u0415\u0420")),
                react.createElement("a", { href: "#", className: "btn btn--dark btn--round btn--not-av" },
                    react.createElement("span", null,
                        react.createElement(IconFlag, null),
                        react.createElement("span", { className: "sr-only" }, "Screen Reader text will be here"))),
                react.createElement("a", { href: "#", className: "btn btn--dark btn--round btn--not-av" },
                    react.createElement("span", null,
                        react.createElement(IconHeart, null),
                        react.createElement("span", { className: "sr-only" }, "Screen Reader text will be here"))),
                react.createElement("a", { href: "#", className: "btn btn--dark btn--round btn--not-av" },
                    react.createElement("span", null,
                        react.createElement(IconShare, null),
                        react.createElement("span", { className: "sr-only" }, "Screen Reader text will be here")))))));
};

;// CONCATENATED MODULE: ./src/components/video-comment/video-comment.tsx


const VideoComment = ({ author, description, comment, image }) => {
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "video-comment__author-area" },
            image && (react.createElement("div", { className: "video-comment__image" },
                react.createElement("img", { src: image, alt: author }))),
            react.createElement("div", null,
                react.createElement("h2", { className: "video-comment__author" }, author),
                react.createElement("div", { className: "video-comment__description" }, description))),
        react.createElement("div", { className: "video-comment__comment" }, comment)));
};

;// CONCATENATED MODULE: ./src/components/video-comments/video-comments.tsx


const VideoComments = ({ comments }) => {
    return (react.createElement("ul", { className: "video-comments" }, comments === null || comments === void 0 ? void 0 : comments.map((item) => (react.createElement("li", { key: `${item.id}`, className: "video-comment" },
        react.createElement(VideoComment, Object.assign({}, item)))))));
};

// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(439);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/video-form/video-form.tsx





const SUBMIT_TEXT_SEND = 'Отправить';
const SUBMIT_TEXT_ERROR = 'Произошла ошибка';
const SUBMIT_TEXT_SUCCESS = 'Успешно';
const FORM_ERROR_MESSAGE = 'Не заполнены поля';
const FIELD_ERROR_MESSAGE = 'Поле не заполнено';
const VIDEO_COMMENT_SENT_API_ENDPOINT = 'https://corsanywhere.herokuapp.com/http://fe-dev-offer.herokuapp.com/comments/post/';
const VideoForm = ({ id }) => {
    var _a, _b, _c, _d;
    const { register, formState: { errors, isDirty }, handleSubmit, reset } = (0,index_esm/* useForm */.cI)({ mode: 'onChange' });
    const [submitState, setSubmitState] = (0,react.useState)({
        submitClassName: 'btn--ok',
        submitText: SUBMIT_TEXT_SEND,
        submitErrorText: FORM_ERROR_MESSAGE,
        isFormValid: true,
        isFormSent: false,
    });
    const { submitClassName, submitText, submitErrorText, isFormValid, isFormSent } = submitState;
    const onSubmit = (data) => {
        axios_default()({
            method: 'post',
            url: VIDEO_COMMENT_SENT_API_ENDPOINT + id,
            data,
        })
            .then(() => {
            reset({ author: '', comment: '', city: '' });
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: 'btn--success', submitText: SUBMIT_TEXT_SUCCESS, isFormValid: true, isFormSent: true }));
        })
            .catch((error) => {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: 'btn--error', submitText: SUBMIT_TEXT_ERROR }));
            console.dir(error);
        });
    };
    (0,react.useEffect)(() => {
        var _a, _b;
        if (((_a = errors.city) === null || _a === void 0 ? void 0 : _a.type) === 'required' || ((_b = errors.author) === null || _b === void 0 ? void 0 : _b.type) === 'required') {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: 'btn--error', submitText: SUBMIT_TEXT_ERROR, isFormValid: false }));
        }
        else {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: '', submitText: SUBMIT_TEXT_SEND, isFormValid: true }));
        }
    }, [errors.city, errors.author]);
    (0,react.useEffect)(() => {
        if (isFormSent && isFormValid) {
            setSubmitState(Object.assign(Object.assign({}, submitState), { submitClassName: '', submitText: SUBMIT_TEXT_SEND, isFormSent: false }));
        }
    }, [isDirty]);
    return (react.createElement(react.Fragment, null,
        react.createElement("h2", { className: "form__title" }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),
        react.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "form" },
            react.createElement("fieldset", null,
                react.createElement("legend", null, "\u0427\u0442\u043E \u0432\u044B \u0434\u0443\u043C\u0430\u0435\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u0432\u0438\u0434\u0435\u043E?"),
                react.createElement("div", { className: "form__card" },
                    react.createElement("div", { className: classnames_default()('form__field', { 'is-field-error': ((_a = errors.author) === null || _a === void 0 ? void 0 : _a.type) === 'required' }) },
                        react.createElement("label", { htmlFor: "author" },
                            "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0438 \u0438\u043C\u044F",
                            react.createElement("span", { className: "form__asterix" }, "*")),
                        react.createElement("input", Object.assign({ id: "author" }, register("author", { required: true }), { "aria-invalid": errors.author ? "true" : "false" })),
                        ((_b = errors.author) === null || _b === void 0 ? void 0 : _b.type) === 'required' && react.createElement("div", { role: "alert", className: "form__alert" }, FIELD_ERROR_MESSAGE)),
                    react.createElement("div", { className: classnames_default()('form__field', { 'is-field-error': ((_c = errors.city) === null || _c === void 0 ? void 0 : _c.type) === 'required' }) },
                        react.createElement("label", { htmlFor: "city" },
                            "\u0413\u043E\u0440\u043E\u0434",
                            react.createElement("span", { className: "form__asterix" }, "*")),
                        react.createElement("input", Object.assign({ id: "city" }, register("city", { required: true }), { "aria-invalid": errors.city ? "true" : "false" })),
                        ((_d = errors.city) === null || _d === void 0 ? void 0 : _d.type) === 'required' && react.createElement("div", { role: "alert", className: "form__alert" }, FIELD_ERROR_MESSAGE)),
                    react.createElement("div", { className: "form__field" },
                        react.createElement("label", { htmlFor: "comment" }, "\u0412\u0430\u0448\u0435 \u043C\u043D\u0435\u043D\u0438\u0435"),
                        react.createElement("textarea", Object.assign({ id: "comment" }, register("comment", { required: false })))),
                    react.createElement("input", { type: "submit", value: submitText, className: submitClassName }),
                    !isFormValid && react.createElement("div", { role: "alert", className: "form__alert" }, submitErrorText))))));
};

;// CONCATENATED MODULE: ./src/components/video-detail/video-detail.tsx








const VIDEO_DETAIL_API_ENDPOINT = 'https://corsanywhere.herokuapp.com/https://fe-dev-offer.herokuapp.com/item/';
const VIDEO_COMMENTS_API_ENDPOINT = 'https://corsanywhere.herokuapp.com/http://fe-dev-offer.herokuapp.com/comments/';
const VideoDetail = () => {
    const [loadingDetail, setLoadingDetail] = (0,react.useState)(true);
    const [loadingComments, setLoadingComments] = (0,react.useState)(true);
    const { id } = (0,react_router_dist/* useParams */.UO)();
    const [videoDetail, setVideoDetail] = (0,react.useState)(null);
    const [videoComments, setVideoComments] = (0,react.useState)(null);
    (0,react.useEffect)(() => {
        getVideoDetal();
        getVideoComments();
    }, []);
    const getVideoComments = () => {
        axios_default().get(VIDEO_COMMENTS_API_ENDPOINT + id)
            .then(res => {
            setVideoComments(res.data);
            setLoadingComments(false);
        })
            .catch((error) => {
            console.dir(error);
        });
    };
    const getVideoDetal = () => {
        axios_default().get(VIDEO_DETAIL_API_ENDPOINT + id)
            .then(res => {
            setVideoDetail(res.data);
            setLoadingDetail(false);
        })
            .catch((error) => {
            console.dir(error);
        });
    };
    return (react.createElement(react.Fragment, null,
        react.createElement("div", { className: "grid-container" },
            (loadingDetail || loadingComments) && react.createElement(LoadingSpinner, null),
            react.createElement("div", { className: "video-detail__header" },
                react.createElement("h1", { className: "video-detail__title" }, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0435 \u0432\u0438\u0434\u0435\u043E"),
                react.createElement(dist/* Link */.rU, { to: "/", className: "video-detail__all-link" },
                    react.createElement("span", { className: "is-mobile" }, "\u0432\u0441\u0435"),
                    react.createElement("span", { className: "is-tablet" }, "\u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u0432\u0438\u0434\u0435\u043E"),
                    react.createElement("span", { className: "is-desktop" }, "\u0432\u0441\u0435"),
                    react.createElement("span", { className: "is-destop-medium" }, "\u0432\u0441\u0435 \u0432\u0438\u0434\u0435\u043E")))),
        react.createElement("div", { className: "grid-container-detail" },
            react.createElement("div", { className: "grid-container-detail__col1" },
                react.createElement("div", { className: "video-detail" },
                    react.createElement(VideoFullCard, Object.assign({}, videoDetail)),
                    react.createElement(VideoComments, Object.assign({}, videoComments)),
                    react.createElement(VideoForm, { id: id }))),
            react.createElement("div", { className: "grid-container-detail__col2" },
                react.createElement("div", { className: "banner" },
                    react.createElement("a", { href: "#", title: "\u0412\u0441\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0438 \u043B\u0443\u0447\u0448\u0438\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B" },
                        react.createElement("img", { src: "assets/images/banner2.png" })))))));
};

;// CONCATENATED MODULE: ./src/components/scroll-to-top/scroll-to-top.ts


const ScrollToTop = () => {
    const { pathname } = (0,react_router_dist/* useLocation */.TH)();
    (0,react.useEffect)(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

;// CONCATENATED MODULE: ./src/Application.tsx
/* module decorator */ module = __webpack_require__.hmd(module);







const Application = () => {
    return (react.createElement("main", null,
        react.createElement(dist/* HashRouter */.UT, null,
            react.createElement(ScrollToTop, null),
            react.createElement(react_router_dist/* Routes */.Z5, null,
                react.createElement(react_router_dist/* Route */.AW, { path: "/", element: react.createElement(VideoList, null) }),
                react.createElement(react_router_dist/* Route */.AW, { path: "/video/:id", element: react.createElement(VideoDetail, null) })))));
};
/* harmony default export */ const src_Application = ((0,react_hot_loader_production_min/* hot */.wU)(module)(Application));


/***/ }),

/***/ 535:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./src/Application.tsx + 11 modules
var Application = __webpack_require__(911);
;// CONCATENATED MODULE: ./src/utils/helpers.ts
/**
 * Checks if process NODE_ENV in 'development' mode
 */
function inDev() {
    return "production" == 'development';
}

;// CONCATENATED MODULE: ./src/main.tsx
/* module decorator */ module = __webpack_require__.hmd(module);




// Application to Render
const app = react.createElement(Application/* default */.Z, null);
// Render application in DOM
react_dom.render(app, document.getElementById('app'));
// Hot module replacement
if (inDev() && module.hot)
    module.hot.accept();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(535)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);