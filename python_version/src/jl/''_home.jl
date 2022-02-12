# AUTO GENERATED FILE - DO NOT EDIT

export ''_home

"""
    ''_home(;kwargs...)
    ''_home(children::Any;kwargs...)
    ''_home(children_maker::Function;kwargs...)


A Home component.

Keyword arguments:
- `children` (a list of or a singular dash component, string or number; optional)
- `id` (String; optional)
- `isOpen` (Bool; optional)
"""
function ''_home(; kwargs...)
        available_props = Symbol[:children, :id, :isOpen]
        wild_props = Symbol[]
        return Component("''_home", "Home", "python_version", available_props, wild_props; kwargs...)
end

''_home(children::Any; kwargs...) = ''_home(;kwargs..., children = children)
''_home(children_maker::Function; kwargs...) = ''_home(children_maker(); kwargs...)

