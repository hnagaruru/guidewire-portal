package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationAnswer.eti;LocationAnswer.eix;LocationAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class LocationAnswerVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.LocationAnswerVersionList {
  public LocationAnswerVersionListImpl(entity.LocationAnswer base)  {
    super(base);
  }
  
  public LocationAnswerVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.LocationAnswer AsOf(java.util.Date date) {
    return (entity.LocationAnswer)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.LocationAnswer> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}