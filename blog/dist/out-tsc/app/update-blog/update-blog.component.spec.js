import { TestBed } from '@angular/core/testing';
import { UpdateBlogComponent } from './update-blog.component';
describe('UpdateBlogComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UpdateBlogComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateBlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=update-blog.component.spec.js.map