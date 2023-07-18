package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCov.eti;ContrEquipPartCov.eix;ContrEquipPartCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ContrEquipPartCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ContrEquipPartCovVersionList {
  public ContrEquipPartCovVersionListImpl(entity.ContrEquipPartCov base)  {
    super(base);
  }
  
  public ContrEquipPartCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ContrEquipPartCov AsOf(java.util.Date date) {
    return (entity.ContrEquipPartCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ContrEquipPartCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.ContrEquipPartCovCost bean) {
    addToArray(entity.ContrEquipPartCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ContrEquipPartCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ContrEquipPartCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.ContrEquipPartCov.COSTS_PROP.get());
  }
  
  
}