# AUTO GENERATED FILE - DO NOT EDIT

export ''_graph

"""
    ''_graph(;kwargs...)
    ''_graph(children::Any;kwargs...)
    ''_graph(children_maker::Function;kwargs...)


A Graph component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `isOpen` (Bool; optional)
- `width` (Real; optional)
"""
function ''_graph(; kwargs...)
        available_props = Symbol[:children, :id, :isOpen, :width]
        wild_props = Symbol[]
        return Component("''_graph", "Graph", "python_version", available_props, wild_props; kwargs...)
end

''_graph(children::Any; kwargs...) = ''_graph(;kwargs..., children = children)
''_graph(children_maker::Function; kwargs...) = ''_graph(children_maker(); kwargs...)

