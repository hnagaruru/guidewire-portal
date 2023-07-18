package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuilding.eti;CPBuilding.eix;CPBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPBuildingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPBuildingVersionList {
  public CPBuildingVersionListImpl(entity.CPBuilding base)  {
    super(base);
  }
  
  public CPBuildingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBldgAddlInterest> AdditionalInterestsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBuilding.ADDITIONALINTERESTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.CPBuilding AsOf(java.util.Date date) {
    return (entity.CPBuilding)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuildingCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.CPBuilding.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInterests(entity.CPBldgAddlInterest bean) {
    addToArray(entity.CPBuilding.ADDITIONALINTERESTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.CPBuildingCov bean) {
    addToArray(entity.CPBuilding.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPBldgAddlInterestVersionList> getAdditionalInterests() {
    return (java.util.List)getArray(entity.CPBuilding.ADDITIONALINTERESTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPBuilding> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.CPBuildingCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.CPBuilding.COVERAGES_PROP.get());
  }
  
  
}