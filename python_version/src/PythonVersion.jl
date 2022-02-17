
module PythonVersion
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/''_draggableandresizable.jl")
include("jl/''_graph.jl")
include("jl/''_index.jl")
include("jl/''_home.jl")
include("jl/''_index.jl")
include("jl/''_index.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "python_version",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "python_version.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "python_version.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
