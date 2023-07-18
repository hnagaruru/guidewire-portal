package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "DwellingHazard.eti;DwellingHazard.eix;DwellingHazard.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class DwellingHazardVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.DwellingHazardVersionList {
  public DwellingHazardVersionListImpl(entity.DwellingHazard base)  {
    super(base);
  }
  
  public DwellingHazardVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.DwellingHazard AsOf(java.util.Date date) {
    return (entity.DwellingHazard)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DwellingHazard> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}