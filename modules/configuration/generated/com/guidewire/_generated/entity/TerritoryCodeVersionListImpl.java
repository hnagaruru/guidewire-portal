package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TerritoryCode.eti;TerritoryCode.eix;TerritoryCode.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class TerritoryCodeVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.TerritoryCodeVersionList {
  public TerritoryCodeVersionListImpl(entity.TerritoryCode base)  {
    super(base);
  }
  
  public TerritoryCodeVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.TerritoryCode AsOf(java.util.Date date) {
    return (entity.TerritoryCode)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.TerritoryCode> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}