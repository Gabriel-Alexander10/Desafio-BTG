# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class index(Component):
    """An index component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- width (number; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, width=Component.UNDEFINED, setGraphWidth=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'width']
        self._type = 'index'
        self._namespace = 'python_version'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(index, self).__init__(children=children, **args)
