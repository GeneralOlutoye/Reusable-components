import SidebarMenu from 'react-bootstrap-sidebar-menu';


export const SideBar = () => {
    return (
        <div>
            <SidebarMenu>
                <SidebarMenu.Header>
                    <SidebarMenu.Brand>
                        Olutoye
                    </SidebarMenu.Brand>
                    <SidebarMenu.Toggle />
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <SidebarMenu.Nav.Link>
                            <SidebarMenu.Nav.Icon>
                                {/* Menu item icon */}
                            </SidebarMenu.Nav.Icon>
                            <SidebarMenu.Nav.Title>
                                Portfolio
                            </SidebarMenu.Nav.Title>
                        </SidebarMenu.Nav.Link>
                        <SidebarMenu.Nav />
                        <SidebarMenu.Sub>
                            <SidebarMenu.Sub.Toggle>
                                <SidebarMenu.Nav.Icon />
                                <SidebarMenu.Nav.Title>
                                    Projects
                                </SidebarMenu.Nav.Title>
                            </SidebarMenu.Sub.Toggle>
                            <SidebarMenu.Sub.Collapse>
                                <SidebarMenu.Nav>
                                    <SidebarMenu.Nav.Link>
                                        <SidebarMenu.Nav.Icon>
                                           About 
                                        </SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>
                                           Contact
                                        </SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>
                            </SidebarMenu.Sub.Collapse>
                        </SidebarMenu.Sub>
                    </SidebarMenu.Nav>
                </SidebarMenu.Body>
            </SidebarMenu>

        </div>

    )
}
