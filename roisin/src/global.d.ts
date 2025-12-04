// Allow importing image assets without TypeScript errors
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.JPG";
declare module "*.JPEG";

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

<<<<<<< HEAD
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.JPG";
declare module "*.png";
declare module "*.PNG";


=======
>>>>>>> 9a08ae2e84aeff0bbd59e2f9c971168f5acc75e7
