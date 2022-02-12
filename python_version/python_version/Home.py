# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Home(Component):
    """A Home component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- isOpen (boolean; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, isOpen=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'isOpen']
        self._type = 'Home'
        self._namespace = 'python_version'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'isOpen']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Home, self).__init__(children=children, **args)
