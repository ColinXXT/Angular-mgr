
import { MatIconRegistry}  from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const LoadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('gifts', ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
}