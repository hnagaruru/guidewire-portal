package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipCov.eti;ContractorsEquipCov.eix;ContractorsEquipCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContractorsEquipCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContractorsEquipCovVersionList {
  public ContractorsEquipCovVersionListImpl(entity.ContractorsEquipCov base)  {
    super(base);
  }
  
  public ContractorsEquipCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ContractorsEquipCov AsOf(java.util.Date date) {
    return (entity.ContractorsEquipCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContractorsEquipCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.ContrEquipCovCost bean) {
    addToArray(entity.ContractorsEquipCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContractorsEquipCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContrEquipCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.ContractorsEquipCov.COSTS_PROP.get());
  }
  
  
}