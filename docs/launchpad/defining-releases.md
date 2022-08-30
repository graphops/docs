
```yaml
<<: *template-default-ingress-releases
```

## LEVEL 1 CUSTOMISATION - overriding release name

```yaml
releases:
  - name: ingress-nginx-some-release-name # override the release name
    version: v100.0.0 # override the Chart version
    <<: *template-default-release-ingress-nginx # inject defaults
  - name: ingress-nginx-some-other-release-name  # override the release name
    version: v100.0.0 # override the Chart version
    <<: *template-default-release-ingress-nginx # inject defaults
```

## LEVEL 2 CUSTOMISATION

```yaml
releases:
  - name: ingress-nginx-blah-blah
    <<: *template-default-release-ingress-nginx # inject release defaults
    values:
      - *template-default-values-ingress-nginx # inject default release values
      - commonLabels: # specify custom values overrides
          someValue2: true
```