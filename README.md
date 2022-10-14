# Blender RenderQueue Test

This is a test repository for [BlenderHub](https://github.com/Chipsnet/blender-hub).

## Create Render queue file

1. Create file `src/render.json`

2. Write json file

`render.json`

```json
{
  "files": [
    {
      "path": "path/to/render.blend",
      "out": "path/to/output/render_#####"
    },
    {
      "path": "path/to/render1.blend",
      "out": "path/to/output/render1_#####"
    }
  ]
}
```

## Run script

1. Install dependencies.

```shell
yarn install
```

2. Run script

```shell
yarn start
```