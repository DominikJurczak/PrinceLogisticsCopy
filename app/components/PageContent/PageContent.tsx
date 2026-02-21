export type PageContentProps = {
    title: string;
    children: React.ReactNode;
}
const PageContent = ({title, children}:PageContentProps) => {
    return ( 
        <div className="flex-1">
            <h2 className="text-4xl font-extrabold italic uppercase tracking-wide mb-6">{title}</h2>
            <div className="border-t border-gray-300 mt-6 pt-6" />

            <div className="content-body">
                {children}
            </div>
        </div>
     );
}
 
export default PageContent;