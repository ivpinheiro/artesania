import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

const oauthMiddleWare = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    // Lógica do middleware
    console.log('Middleware executado')

    // Para continuar a navegação, chame next()
    next()
};

export const authMiddleWare = {
    oauthMiddleWare
}