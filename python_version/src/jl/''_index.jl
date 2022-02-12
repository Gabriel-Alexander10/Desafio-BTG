# AUTO GENERATED FILE - DO NOT EDIT

export ''_index

"""
    ''_index(;kwargs...)
    ''_index(children::Any;kwargs...)
    ''_index(children_maker::Function;kwargs...)


An index component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `width` (Real; optional)
"""
function ''_index(; kwargs...)
        available_props = Symbol[:children, :id, :width]
        wild_props = Symbol[]
        return Component("''_index", "index", "python_version", available_props, wild_props; kwargs...)
end

''_index(children::Any; kwargs...) = ''_index(;kwargs..., children = children)
''_index(children_maker::Function; kwargs...) = ''_index(children_maker(); kwargs...)

