package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationNamedInsured.eti;LocationNamedInsured.eix;LocationNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class LocationNamedInsuredVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.LocationNamedInsuredVersionList {
  public LocationNamedInsuredVersionListImpl(entity.LocationNamedInsured base)  {
    super(base);
  }
  
  public LocationNamedInsuredVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.LocationNamedInsured AsOf(java.util.Date date) {
    return (entity.LocationNamedInsured)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationNamedInsured> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}