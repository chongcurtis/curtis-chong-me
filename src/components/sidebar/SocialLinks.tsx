import classNames from "classnames";

const fillTransitionClassnames = "transition duration-500 ease-in-out ";

const links = [
    {
        label: "Github",
        href: "https://github.com/curtischong",
        icon: (
            <svg
                className={classNames(fillTransitionClassnames, "h-7 w-7 hover:fill-black")}
                aria-hidden="true"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
            >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
        ),
    },
    {
        label: "StackOverflow",
        href: "https://stackoverflow.com/users/4647924/curtis-chong",
        icon: (
            <svg
                className={classNames(fillTransitionClassnames, "h-8 w-8 hover:fill-[#FF9900]")}
                aria-hidden="true"
                data-prefix="fab"
                data-icon="stack-overflow"
                role="img"
                xmlns="https://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
            >
                <path d="M293.7 300l-181.2-84.5 16.7-36.5 181.3 84.7-16.8 36.3zm48-76L188.2 95.7l-25.5 30.8 153.5 128.3 25.5-30.8zm39.6-31.7L262 32l-32 24 119.3 160.3 32-24zM290.7 311L95 269.7 86.8 309l195.7 41 8.2-39zm31.6 129H42.7V320h-40v160h359.5V320h-40v120zm-39.8-80h-200v39.7h200V360z"></path>
            </svg>
        ),
    },
    {
        label: "Kaggle",
        href: "https://www.kaggle.com/splacorn",
        icon: (
            <svg
                className={classNames(fillTransitionClassnames, "h-12 w-12 hover:fill-[#20beff]")}
                aria-hidden="true"
                data-prefix="fab"
                data-icon="kaggle"
                role="img"
                xmlns="https://www.w3.org/2000/svg"
                viewBox="15 0 90 50"
            >
                <path
                    clipPath="url(#a)"
                    d="m105.75 102.968c-.06.238-.298.357-.713.357h-7.937c-.477 0-.9-.208-1.248-.625l-13.106-16.672-3.655 3.477v12.93c0 .595-.298.892-.892.892h-6.152c-.595 0-.892-.297-.892-.892v-58.935c0-.593.297-.9.892-.9h6.153c.594 0 .892.298.892.9v36.288l15.692-15.87c.416-.415.832-.624 1.248-.624h8.204c.356 0 .593.15.713.445.12.357.1.624-.1.803l-16.575 16.046 17.297 21.488c.237.238.297.535.18.892m32.144.356h-6.152c-.654 0-.98-.296-.98-.9v-1.25c-2.616 1.96-5.974 2.942-10.075 2.942-3.744 0-6.985-1.16-9.72-3.476-2.675-2.377-4.012-5.4-4.012-9.094 0-5.825 3.625-9.778 10.877-11.858 2.853-.833 7.162-1.545 12.928-2.14.18-2.198-.4-4.07-1.738-5.617s-3.285-2.318-5.84-2.318c-3.33 0-6.717 1.2-10.164 3.566-.535.298-.922.238-1.16-.178l-3.2-4.547c-.298-.357-.208-.772.267-1.248 4.577-3.15 9.332-4.726 14.266-4.726 3.804 0 7.044.892 9.72 2.675 3.923 2.616 5.884 6.806 5.884 12.57v24.697c0 .595-.298.9-.9.9m-7.134-18.622c-5.826.595-9.807 1.368-11.947 2.318-2.913 1.248-4.222 3.03-3.924 5.35.178 1.308.833 2.363 1.962 3.165s2.437 1.264 3.923 1.382c4.16.297 7.5-.803 9.986-3.3zm44.463 34.093c-3.24 3.357-7.832 5.038-13.775 5.038-3.448 0-6.717-.862-9.807-2.585-.655-.417-1.427-.967-2.318-1.65s-1.933-1.53-3.12-2.54c-.417-.356-.446-.802-.1-1.338l4.2-4.2c.178-.18.416-.268.713-.268.237 0 .446.1.624.268 3.328 3.328 6.568 4.993 9.718 4.993 7.2 0 10.788-3.745 10.788-11.234v-4.636c-2.794 2.318-6.508 3.477-11.145 3.477-5.766 0-10.284-2.168-13.552-6.508-2.853-3.803-4.28-8.6-4.28-14.354 0-5.468 1.367-10.104 4.102-13.9 3.2-4.576 7.757-6.865 13.642-6.865 4.458 0 8.203 1.16 11.233 3.478v-1.783c0-.594.297-.892.892-.892h6.153c.593 0 .9.298.9.892v39.854c0 6.476-1.62 11.395-4.86 14.753m-3.077-42.84c-1.486-3.803-4.934-5.706-10.342-5.706-6.954 0-10.43 4.34-10.43 13.017 0 4.814 1.16 8.323 3.477 10.52 1.723 1.725 3.952 2.586 6.687 2.586 5.586 0 9.123-1.902 10.6-5.706zm45.006 42.85c-3.24 3.357-7.832 5.038-13.775 5.038-3.45 0-6.718-.862-9.808-2.585-.655-.417-1.427-.967-2.318-1.65s-1.932-1.53-3.12-2.54c-.416-.356-.446-.802-.1-1.338l4.2-4.2c.178-.18.416-.268.713-.268.237 0 .446.1.624.268 3.328 3.328 6.567 4.993 9.718 4.993 7.2 0 10.8-3.745 10.8-11.234v-4.636c-2.795 2.318-6.5 3.477-11.145 3.477-5.766 0-10.284-2.168-13.552-6.508-2.854-3.803-4.28-8.6-4.28-14.354 0-5.468 1.367-10.104 4.1-13.9 3.2-4.576 7.757-6.865 13.642-6.865 4.458 0 8.202 1.16 11.234 3.478v-1.783c0-.594.296-.892.892-.892h6.152c.593 0 .9.298.9.892v39.854c0 6.476-1.62 11.395-4.858 14.753m-3.076-42.84c-1.487-3.803-4.935-5.706-10.343-5.706-6.955 0-10.432 4.34-10.432 13.017 0 4.814 1.16 8.323 3.477 10.52 1.724 1.725 3.953 2.586 6.687 2.586 5.586 0 9.124-1.902 10.6-5.706v-14.7zm21.575 27.36h-6.153c-.594 0-.9-.296-.9-.9v-58.923c0-.593.297-.9.9-.9h6.153c.593 0 .9.297.9.9v58.935c0 .594-.298.9-.9.9m44.843-18.1c0 .595-.3.892-.892.892h-28.977c.356 2.913 1.605 5.35 3.745 7.3 2.437 2.082 5.498 3.12 9.184 3.12 3.268 0 6.2-.92 8.826-2.764.536-.357.98-.357 1.338 0l4.2 4.28c.476.477.476.9 0 1.248-4.28 3.2-9.244 4.814-14.9 4.814-6.063 0-11.116-2.02-15.158-6.062-3.922-3.982-5.884-9.064-5.884-15.246 0-5.825 1.93-10.758 5.795-14.8 3.567-3.685 8.203-5.527 13.9-5.527 5.408 0 9.955 1.932 13.642 5.795 3.803 3.983 5.557 8.976 5.26 14.98zm-11.68-13.106c-2.02-1.842-4.458-2.764-7.3-2.764-2.675 0-5.024.892-7.043 2.674s-3.3 4.102-3.834 6.955h21.487c-.06-2.733-1.16-5.023-3.3-6.865"
                    transform="matrix(.405932 0 0 .405932 -11.403348 -3.781452)"
                />
            </svg>
        ),
    },
    {
        // from https://www.veryicon.com/icons/miscellaneous/general-icon-library/resume-7.html
        label: "Resume",
        href: "/resume.pdf",
        icon: (
            <svg
                className={classNames(
                    fillTransitionClassnames,
                    "ml-3 mt-1 inline-block h-10 w-10 overflow-hidden align-middle text-current hover:fill-red-500"
                )}
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M334.336 616.3456c0 11.5712 9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944H355.4304c-11.6736 0-21.0944 9.5232-21.0944 21.0944zM670.9248 702.0544H355.4304c-11.5712 0-21.0944 9.5232-21.0944 21.0944s9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944z" />
                <path d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m27.4432 87.1424l97.1776 97.1776h-89.9072c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072z m137.1136 562.7904s0 0.1024 0 0l-479.0272 0.1024s-0.1024 0-0.1024-0.1024V208.1792s0-0.1024 0.1024-0.1024h297.984l1.6384 1.6384v133.12c0 27.2384 22.3232 49.4592 49.4592 49.4592h129.9456v423.5264z" />
                <path d="M428.8512 388.7104c37.1712 0 67.2768-30.1056 67.2768-67.2768 0-37.1712-30.1056-67.2768-67.2768-67.2768S361.472 284.16 361.472 321.4336c0 37.1712 30.1056 67.2768 67.3792 67.2768z m0-97.6896c16.7936 0 30.4128 13.6192 30.4128 30.4128s-13.6192 30.4128-30.4128 30.4128-30.4128-13.6192-30.4128-30.4128 13.6192-30.4128 30.4128-30.4128zM355.4304 504.7296c11.6736 0 21.0944-9.4208 21.0944-21.0944 0-22.8352 23.9616-42.1888 52.3264-42.1888s52.3264 19.2512 52.3264 42.1888c0 11.6736 9.4208 21.0944 21.0944 21.0944s21.0944-9.4208 21.0944-21.0944c0-46.4896-42.3936-84.3776-94.5152-84.3776s-94.5152 37.888-94.5152 84.3776c0 11.6736 9.4208 21.0944 21.0944 21.0944z" />
            </svg>
        ),
    },
];

export const SocialLinks = () => {
    return (
        <div className="fixed relative z-10 mt-0 flex w-full cursor-default items-center justify-start no-underline">
            {links.map((socialLink, idx) => {
                return (
                    <a
                        key={idx}
                        title={socialLink.label}
                        href={socialLink.href}
                        className="quickLinksLink relative mx-1 inline-block w-10 fill-slate-500"
                        target="_blank"
                    >
                        {socialLink.icon}
                    </a>
                );
            })}
        </div>
    );
};
