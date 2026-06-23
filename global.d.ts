declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Allow importing static assets as modules in TypeScript
declare module '*.svg' {
  const content: any;
  export default content;
}
