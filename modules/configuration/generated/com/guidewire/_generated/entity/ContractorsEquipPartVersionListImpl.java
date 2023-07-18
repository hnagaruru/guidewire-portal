package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipPart.eti;ContractorsEquipPart.eix;ContractorsEquipPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContractorsEquipPartVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContractorsEquipPartVersionList {
  public ContractorsEquipPartVersionListImpl(entity.ContractorsEquipPart base)  {
    super(base);
  }
  
  public ContractorsEquipPartVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ContractorsEquipPart AsOf(java.util.Date date) {
    return (entity.ContractorsEquipPart)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCond> ContrEquipPartConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipPart.CONTREQUIPPARTCONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCost> ContrEquipPartCostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipPart.CONTREQUIPPARTCOSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCov> ContrEquipPartCovsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipPart.CONTREQUIPPARTCOVS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartExcl> ContrEquipPartExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipPart.CONTREQUIPPARTEXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContractorsEquipment> ContractorsEquipmentsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipPart.CONTRACTORSEQUIPMENTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToContrEquipPartConditions(entity.ContrEquipPartCond bean) {
    addToArray(entity.ContractorsEquipPart.CONTREQUIPPARTCONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToContrEquipPartCosts(entity.ContrEquipPartCost bean) {
    addToArray(entity.ContractorsEquipPart.CONTREQUIPPARTCOSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToContrEquipPartCovs(entity.ContrEquipPartCov bean) {
    addToArray(entity.ContractorsEquipPart.CONTREQUIPPARTCOVS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToContrEquipPartExclusions(entity.ContrEquipPartExcl bean) {
    addToArray(entity.ContractorsEquipPart.CONTREQUIPPARTEXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToContractorsEquipments(entity.ContractorsEquipment bean) {
    addToArray(entity.ContractorsEquipPart.CONTRACTORSEQUIPMENTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContractorsEquipPart> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContrEquipPartCondVersionList> getContrEquipPartConditions() {
    return (java.util.List)getArray(entity.ContractorsEquipPart.CONTREQUIPPARTCONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContrEquipPartCostVersionList> getContrEquipPartCosts() {
    return (java.util.List)getArray(entity.ContractorsEquipPart.CONTREQUIPPARTCOSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContrEquipPartCovVersionList> getContrEquipPartCovs() {
    return (java.util.List)getArray(entity.ContractorsEquipPart.CONTREQUIPPARTCOVS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContrEquipPartExclVersionList> getContrEquipPartExclusions() {
    return (java.util.List)getArray(entity.ContractorsEquipPart.CONTREQUIPPARTEXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContractorsEquipmentVersionList> getContractorsEquipments() {
    return (java.util.List)getArray(entity.ContractorsEquipPart.CONTRACTORSEQUIPMENTS_PROP.get());
  }
  
  
}