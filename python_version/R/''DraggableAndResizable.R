# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''DraggableAndResizable <- function(children=NULL, id=NULL, width=NULL) {
    
    props <- list(children=children, id=id, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DraggableAndResizable',
        namespace = 'python_version',
        propNames = c('children', 'id', 'width'),
        package = 'pythonVersion'
        )

    structure(component, class = c('dash_component', 'list'))
}
