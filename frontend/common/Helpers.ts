class Helpers {
    static isRouteMatch = (routes: string[]) => {
        const pathname = window.location.pathname;

        for(let i = 0; i < routes.length; i++) {
            if (routes[i] === pathname || routes[i] + '/' === pathname) {
                return true;
            }
        }

        return false;
    }
}

export { Helpers };