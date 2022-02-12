# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''Home <- function(children=NULL, id=NULL, isOpen=NULL) {
    
    props <- list(children=children, id=id, isOpen=isOpen)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Home',
        namespace = 'python_version',
        propNames = c('children', 'id', 'isOpen'),
        package = 'pythonVersion'
        )

    structure(component, class = c('dash_component', 'list'))
}
