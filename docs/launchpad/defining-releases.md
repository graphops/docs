---
sidebar_position: 4
description: Steps to get override an existing release on Launchpad, the Kubernetes toolkit for Graph Protocol Indexers
---

# Defining Releases

## LEVEL 1 CUSTOMISATION - overriding release name

```yaml
releases:
  - name: ingress-nginx-some-release-name # override the release name
    <<: *launchpad-release-template-ingress-nginx
    values:
      - ../release-values/{{`{{ .Release.Namespace }}`}}/{{`{{ .Release.Name }}`}}.yaml
    version: v100.0.0 # override the Chart version
```

## LEVEL 2 CUSTOMISATION - overriding release values

Add a new file or overrride existing values if already set in  `my-infra-repo/helmfiles/release-values/ingress/ingress-nginx-some-release-name.yaml` - where `ingress` is the namespace the release lives in and `ingress-nginx-some-release-name` is the actual `release-name`.
