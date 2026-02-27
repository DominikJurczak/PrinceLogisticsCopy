import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/index.tsx"),
    route('history', './routes/history/index.tsx'),
    route('services', './routes/services/index.tsx'),
    route('fleet', './routes/fleet/index.tsx'),
    route('partners', './routes/partners/index.tsx'),
    route('careers', './routes/careers/index.tsx'),
    route('contact', './routes/contact/index.tsx'),
    route('documents', './routes/documents/index.tsx'),
    route('quotes', './routes/quotes/index.tsx'),    

] satisfies RouteConfig;
