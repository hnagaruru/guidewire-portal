package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBuilding.eti;BOPBuilding.eix;BOPBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPBuildingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPBuildingVersionList {
  public BOPBuildingVersionListImpl(entity.BOPBuilding base)  {
    super(base);
  }
  
  public BOPBuildingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPBldgAddlInterest> AdditionalInterestsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPBuilding.ADDITIONALINTERESTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.BOPBuilding AsOf(java.util.Date date) {
    return (entity.BOPBuilding)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPCovBuildingCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPBuilding.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPBuildingCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPBuilding.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInterests(entity.BOPBldgAddlInterest bean) {
    addToArray(entity.BOPBuilding.ADDITIONALINTERESTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCosts(entity.BOPCovBuildingCost bean) {
    addToArray(entity.BOPBuilding.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.BOPBuildingCov bean) {
    addToArray(entity.BOPBuilding.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPBldgAddlInterestVersionList> getAdditionalInterests() {
    return (java.util.List)getArray(entity.BOPBuilding.ADDITIONALINTERESTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPBuilding> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPCovBuildingCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.BOPBuilding.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPBuildingCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.BOPBuilding.COVERAGES_PROP.get());
  }
  
  
}