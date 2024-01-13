/**
 * array of routes that allow a user
 * who IS NOT authenticated to access
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
]

/**
 * array of routes that allow a user
 * who IS authenticated to access
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
]

/**
 * this route will always be available so users can login
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"