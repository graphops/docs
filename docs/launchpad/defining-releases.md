---
sidebar_position: 4
description: Steps to get override an existing release on Launchpad, the Kubernetes toolkit for Graph Protocol Indexers
---
# Defining Releases

## LEVEL 1 CUSTOMISATION - overriding release name

```yaml
releases:
  - name: ingress-nginx-some-release-name # override the release name
    <<: *launchpad-release-template-ingress-nginx
    values:
      - ../release-values/{{`{{ .Release.Namespace }}`}}/{{`{{ .Release.Name }}`}}.yaml
    version: v100.0.0 # override the Chart version
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