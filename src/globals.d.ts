declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module '*.svg' {
  const content: string;
  export = content;
}

declare module '*.pdf' {
  const content: string;
  export = content;
}

declare module '*.ico' {
  const content: string;
  export = content;
}
