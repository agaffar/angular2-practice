import {FirstComponent} from "./first/first.component";
import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from "../../node_modules/@angular/core/src/metadata/ng_module";

export const routeConfig: Routes = <Routes>[
  {path: 'first', component: FirstComponent}
];

export const routing = RouterModule.forRoot(routeConfig);
