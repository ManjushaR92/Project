import { TestBed } from '@angular/core/testing';
import { BloglistService } from './bloglist.service';
describe('BloglistService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BloglistService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bloglist.service.spec.js.map