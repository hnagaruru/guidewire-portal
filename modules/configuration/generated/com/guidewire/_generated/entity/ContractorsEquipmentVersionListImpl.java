package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipment.eti;ContractorsEquipment.eix;ContractorsEquipment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContractorsEquipmentVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContractorsEquipmentVersionList {
  public ContractorsEquipmentVersionListImpl(entity.ContractorsEquipment base)  {
    super(base);
  }
  
  public ContractorsEquipmentVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSchEquipAddlInterest> AdditionalInterestsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipment.ADDITIONALINTERESTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.ContractorsEquipment AsOf(java.util.Date date) {
    return (entity.ContractorsEquipment)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContractorsEquipCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipment.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInterests(entity.IMSchEquipAddlInterest bean) {
    addToArray(entity.ContractorsEquipment.ADDITIONALINTERESTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.ContractorsEquipCov bean) {
    addToArray(entity.ContractorsEquipment.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMSchEquipAddlInterestVersionList> getAdditionalInterests() {
    return (java.util.List)getArray(entity.ContractorsEquipment.ADDITIONALINTERESTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContractorsEquipment> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContractorsEquipCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.ContractorsEquipment.COVERAGES_PROP.get());
  }
  
  
}