# AUTO GENERATED FILE - DO NOT EDIT

export ''_draggableandresizable

"""
    ''_draggableandresizable(;kwargs...)
    ''_draggableandresizable(children::Any;kwargs...)
    ''_draggableandresizable(children_maker::Function;kwargs...)


A DraggableAndResizable component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `width` (Real; optional)
"""
function ''_draggableandresizable(; kwargs...)
        available_props = Symbol[:children, :id, :width]
        wild_props = Symbol[]
        return Component("''_draggableandresizable", "DraggableAndResizable", "python_version", available_props, wild_props; kwargs...)
end

''_draggableandresizable(children::Any; kwargs...) = ''_draggableandresizable(;kwargs..., children = children)
''_draggableandresizable(children_maker::Function; kwargs...) = ''_draggableandresizable(children_maker(); kwargs...)

