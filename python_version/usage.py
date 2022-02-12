import python_version
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)
width = 500

figure = dict(
    data=[
        dict(
            x=[1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
            2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
            y=[219, 146, 112, 127, 124, 180, 236, 207, 236, 263,
            350, 430, 474, 526, 488, 537, 500, 439],
            name='Rest of world',
            marker=dict(
                color='rgb(55, 83, 109)'
            )
        ),
        dict(
            x=[1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
            2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
            y=[16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270,
            299, 340, 403, 549, 499],
            name='China',
            marker=dict(
                color='rgb(26, 118, 255)'
            )
        )
    ],
    layout=dict(
        title='US Export of Plastic Scrap',
        plot_bgcolor="#181B23",
        paper_bgcolor="#181B23",
        showlegend=True,
        autosize=True,
        legend=dict(
            x=0,
            y=1.0
        ),
        margin=dict(l=40, r=0, t=40, b=30)
    )
)

graph = dash.dcc.Graph(
    figure=figure,
    style={ "height": 300 },
    id='my-graph'
)

modalGraph = dash.dcc.Graph(
    figure=figure,
    style={ "height": 300 },
    id='my-modal-graph',
)

app.layout = html.Div([
    python_version.Home(
        children=graph,
        id="home",
        isOpen=False
    ),    
    python_version.Graph(
        children=modalGraph,
        id="graph",
        isOpen=False,
        width=width
    )
])

@app.callback(Output('graph', 'isOpen'), [Input('home', 'isOpen')])
def display_output(value):
    return value

@app.callback(Output('home', 'isOpen'), [Input('graph', 'isOpen')])
def display_output(value):
    return value

@app.callback(Output('my-modal-graph', 'style'), [Input('graph', 'width')])
def display_output(value):
    height = 500
    if value * 0.5 <= 500:
        height = value  * 0.5 

    updatedStyle = {
        "height": height,
        "width": value
    }

    return updatedStyle


if __name__ == '__main__':
    app.run_server(debug=False)
