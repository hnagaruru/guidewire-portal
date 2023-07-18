package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPLocation.eti;CPLocation.eix;CPLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPLocationVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPLocationVersionList {
  public CPLocationVersionListImpl(entity.CPLocation base)  {
    super(base);
  }
  
  public CPLocationVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPLocation AsOf(java.util.Date date) {
    return (entity.CPLocation)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuilding> BuildingsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPLocation.BUILDINGS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPLocationCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPLocation.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBuildings(entity.CPBuilding bean) {
    addToArray(entity.CPLocation.BUILDINGS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.CPLocationCov bean) {
    addToArray(entity.CPLocation.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPLocation> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPBuildingVersionList> getBuildings() {
    return (java.util.List)getArray(entity.CPLocation.BUILDINGS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPLocationCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.CPLocation.COVERAGES_PROP.get());
  }
  
  
}