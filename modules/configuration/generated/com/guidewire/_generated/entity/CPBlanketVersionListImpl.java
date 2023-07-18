package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBlanket.eti;CPBlanket.eix;CPBlanket.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPBlanketVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPBlanketVersionList {
  public CPBlanketVersionListImpl(entity.CPBlanket base)  {
    super(base);
  }
  
  public CPBlanketVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPBlanket AsOf(java.util.Date date) {
    return (entity.CPBlanket)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuildingCov> BuildingCoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBlanket.BUILDINGCOVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBlanketCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBlanket.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBuildingCoverages(entity.CPBuildingCov bean) {
    addToArray(entity.CPBlanket.BUILDINGCOVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.CPBlanketCov bean) {
    addToArray(entity.CPBlanket.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBlanket> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPBuildingCovVersionList> getBuildingCoverages() {
    return (java.util.List)getArray(entity.CPBlanket.BUILDINGCOVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPBlanketCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.CPBlanket.COVERAGES_PROP.get());
  }
  
  
}