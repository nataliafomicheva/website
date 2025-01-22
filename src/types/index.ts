interface BaseLink {
    text: string;
    href?: string | never;
    nestedLinks?: Link[] | never;
}

export interface Link extends BaseLink {
    href: string;
    nestedLinks?: never;
}

export interface LinkGroup extends BaseLink {
    href?: never;
    nestedLinks: Link[];
}
