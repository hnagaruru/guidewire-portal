package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMLocation.eti;IMLocation.eix;IMLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMLocationVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMLocationVersionList {
  public IMLocationVersionListImpl(entity.IMLocation base)  {
    super(base);
  }
  
  public IMLocationVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMLocation AsOf(java.util.Date date) {
    return (entity.IMLocation)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMBuilding> BuildingsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMLocation.BUILDINGS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBuildings(entity.IMBuilding bean) {
    addToArray(entity.IMLocation.BUILDINGS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMLocation> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMBuildingVersionList> getBuildings() {
    return (java.util.List)getArray(entity.IMLocation.BUILDINGS_PROP.get());
  }
  
  
}