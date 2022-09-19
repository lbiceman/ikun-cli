/**
 * author: libing
 * git: https://github.com/lbiceman
 * email: lbiceman@126.com
 */
import { defineStore } from "pinia";

export interface Menu {
	id?: string;
	name?: string;
	url?: string;
	children?: Menu[];
}

export interface MenuStoreState {
	menus: Menu[];
}

export interface MenuStoreActions {
	setMenus: (list: Menu[]) => void;
}

export interface MenuStoreGetters<T = MenuStoreState> {
	getMenus: (state: T) => Menu[];
	[key: string]: any;
}

export const useMenuStore = defineStore<string, MenuStoreState, MenuStoreGetters, MenuStoreActions>(
	"menu",
	{
		state: () => ({
			menus: [
				{
					id: "1",
					name: "首页",
					url: "/index"
				},
				{
					id: "2",
					name: "系统管理",
					url: "/admin",
					children: [
						{
							id: "20",
							name: "角色管理",
							url: "/admin/role"
						},
						{
							id: "21",
							name: "用户管理",
							url: "/admin/user"
						},
						{
							id: "22",
							name: "菜单管理",
							url: "/admin/menu"
						},
						{
							id: "23",
							name: "权限管理",
							url: "/admin/root"
						}
					]
				}
			]
		}),

		getters: {
			getMenus: (state: MenuStoreState) => state.menus
		},

		actions: {
			setMenus(this: MenuStoreState, list: Menu[]) {
				this.menus = list;
			}
		}
	}
);