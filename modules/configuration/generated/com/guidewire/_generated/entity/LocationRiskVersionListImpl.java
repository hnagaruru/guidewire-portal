package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationRisk.eti;LocationRisk.eix;LocationRisk.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class LocationRiskVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.LocationRiskVersionList {
  public LocationRiskVersionListImpl(entity.LocationRisk base)  {
    super(base);
  }
  
  public LocationRiskVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.LocationRisk AsOf(java.util.Date date) {
    return (entity.LocationRisk)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationRisk> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}