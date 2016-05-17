import { describe, it, expect, injectAsync } from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { Flashcard } from "./flashcard";

describe('flashcard test', () => {
    it('default name', injectAsync([TestComponentBuilder], (builder: TestComponentBuilder) => {
        builder.createAsync(Flashcard)
            .then((fixture: ComponentFixture<Flashcard>) => {
                const component: Flashcard = fixture.componentInstance;
                
                expect(component.getName()).toBe('flash');
            });
    }));
});
