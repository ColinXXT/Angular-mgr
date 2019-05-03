import { NgModule , SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material';
/**
 * 适合只加载一次的组建或者服务
 *  */

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class CoreModule {
  //SkipSelf 去系统父级资源池查找
  //第一次加载，系统没有coreModule 
  constructor(@Optional() @SkipSelf() parent: CoreModule){
    if(parent){
      throw new Error("模块已经存在，不能再次加载！")
    }
  }
 }
