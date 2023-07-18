package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMBuilding.eti;IMBuilding.eix;IMBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMBuildingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMBuildingVersionList {
  public IMBuildingVersionListImpl(entity.IMBuilding base)  {
    super(base);
  }
  
  public IMBuildingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMBuilding AsOf(java.util.Date date) {
    return (entity.IMBuilding)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMBuilding> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}