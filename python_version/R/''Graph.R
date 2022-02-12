# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''Graph <- function(children=NULL, id=NULL, isOpen=NULL, width=NULL) {
    
    props <- list(children=children, id=id, isOpen=isOpen, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Graph',
        namespace = 'python_version',
        propNames = c('children', 'id', 'isOpen', 'width'),
        package = 'pythonVersion'
        )

    structure(component, class = c('dash_component', 'list'))
}
