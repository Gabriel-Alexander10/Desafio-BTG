# AUTO GENERATED FILE - DO NOT EDIT

#' @export
''index <- function(children=NULL, id=NULL, setGraphWidth=NULL, width=NULL) {
    
    props <- list(children=children, id=id, setGraphWidth=setGraphWidth, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'index',
        namespace = 'python_version',
        propNames = c('children', 'id', 'setGraphWidth', 'width'),
        package = 'pythonVersion'
        )

    structure(component, class = c('dash_component', 'list'))
}
