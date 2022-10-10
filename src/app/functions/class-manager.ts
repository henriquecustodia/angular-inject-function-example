import { inject, Renderer2 } from "@angular/core";

export function classManager(el: HTMLElement, className: string) {
    const renderer = inject(Renderer2);

    return {
        add: () => renderer.addClass(el, className),
        remove: () => renderer.removeClass(el, className),
    };
}   
